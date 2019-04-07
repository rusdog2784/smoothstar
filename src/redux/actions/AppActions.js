import { ActionTypes, ApiTypes, AppConstants } from '~constants';
import * as APINames from '~config/APIConfig';
import { executeApi, executeApiWithMedia } from '~utils/API';

const { QUERY, MUTATION } = ApiTypes;
const {
  UNSUB_STATE,
  READY_APP,
  API_INITIATE,
  API_COMPLETED,
  FETCH_LIST_NEWS,
  CREATE_SS_REGISTERATION,
  UPDATE_SS_REGISTERATION,
  CLEAR_ERR_MSG,
  CHECK_SS_REGISTERATION,
} = ActionTypes;

export const unsubState = state => {
  return {
    type: UNSUB_STATE,
    payload: state,
  };
};

export const fetchListNews = () => {
  return dispatch => {
    dispatch({ type: API_INITIATE });

    executeApi({ type: QUERY, name: APINames[FETCH_LIST_NEWS] })
      .then(response => {
        dispatch({ type: FETCH_LIST_NEWS, payload: response.data.listNewss.items });
        _apiCompleted(dispatch);
      })
      .catch(error => {
        _apiCompleted(dispatch, { error });
      });
  };
};

export const checkSSRegisteration = userId => {
  return dispatch => {
    dispatch({ type: API_INITIATE });

    _searchSSRegisteration(userId)
      .then(response => {
        const { items } = response.data.listSmoothstarRegisterations;

        if (items.length !== 0) {
          dispatch({
            type: CHECK_SS_REGISTERATION,
            payload: {
              id: items[0].id,
              attempts: items[0].registerationAttempts,
              status: items[0].registerationStatus,
            },
          });
        }

        dispatch({ type: READY_APP });

        _apiCompleted(dispatch);
      })
      .catch(error => {
        _apiCompleted(dispatch, { error });
      });
  };
};

export const creatSSRegisteration = ({ stockist, registeration }) => {
  return (dispatch, getState) => {
    dispatch({ type: API_INITIATE });

    const { alreadyRegisteredId, registerationAttempts } = getState().app;
    const { user } = getState().auth;
    let apiName = CREATE_SS_REGISTERATION;
    let apiMediaName = APINames.CREATE_REGISTERATION_MEDIA;

    if (alreadyRegisteredId) {
      apiName = UPDATE_SS_REGISTERATION;
      apiMediaName = APINames.UPDATE_REGISTERATION_MEDIA;
      registeration.id = alreadyRegisteredId;
      registeration.expectedVersion = registerationAttempts;
    }

    registeration.registerationStatus = AppConstants.RegisterationStatus.Unregistered;

    if (stockist) {
      const image = registeration.image;
      delete registeration.image;

      // _searchOcrInfo({ smoothstarModel, purchaseDate, shopName })
      //   .then(response => {
      //     if (response.data.listOCRInfos.items.length !== 0) {
      //       registeration.smoothstarRegisterationOcrInfoId = response.data.listOCRInfos.items[0].id;
      //       registeration.registerationStatus = AppConstants.RegisterationStatus.Registered;
      //     }
      //     // console.log('registeration:', registeration);
      //     _createUpdateRegisteration(dispatch, apiName, registeration);
      //   })
      //   .catch(error => {
      //     console.log('error:', error);
      //     _apiCompleted(dispatch, { error });
      //   });

      _createUpdateRegisteration({
        dispatch,
        apiName,
        registeration,
        stockist,
        media: { image, apiName: apiMediaName, user },
        version: registerationAttempts,
      });
    } else {
      _searchOrderInfo(registeration.orderNum)
        .then(response => {
          if (response.data.listOrderInfos.items.length !== 0) {
            registeration.smoothstarRegisterationOrderInfoId =
              response.data.listOrderInfos.items[0].id;
            registeration.registerationStatus = AppConstants.RegisterationStatus.Registered;
          }
          // console.log('registeration:', registeration);
          _createUpdateRegisteration({ dispatch, apiName, registeration, stockist });
        })
        .catch(error => {
          _apiCompleted(dispatch, { error });
        });
    }
  };
};

// HELPER METHODS
const _apiCompleted = (dispatch, payload = null) => {
  dispatch({ type: API_COMPLETED, payload });
  setTimeout(() => dispatch({ type: CLEAR_ERR_MSG }), 2000);
};

const _searchOrderInfo = orderNum => {
  return executeApi({
    type: QUERY,
    name: APINames.SEARCH_ORDER_INFO,
    data: { filter: { orderNum: { eq: orderNum } } },
  })
    .then(response => response)
    .catch(error => {
      throw error;
    });
};

// const _searchOcrInfo = ({ smoothstarModel, purchaseDate, shopName }) => {
//   return executeApi({
//     type: QUERY,
//     name: APINames.SEARCH_OCR_INFO,
//     data: {
//       filter: {
//         smoothstarModel: { eq: smoothstarModel },
//         purchaseDate: { eq: purchaseDate },
//         shopName: { eq: shopName },
//       },
//     },
//   })
//     .then(response => response)
//     .catch(error => {
//       throw error;
//     });
// };

const _createUpdateRegisteration = ({
  dispatch,
  apiName,
  registeration,
  stockist,
  media,
  version,
}) => {
  executeApi({
    type: MUTATION,
    name: APINames[apiName],
    data: { input: registeration },
  })
    .then(response => {
      const registerationId = response.data[APINames[apiName]].id;

      dispatch({
        type: CREATE_SS_REGISTERATION,
        payload: {
          status: registeration.registerationStatus === AppConstants.RegisterationStatus.Registered,
          id: registerationId,
        },
      });

      if (stockist) {
        _searchRegisteratioMedia(registerationId)
          .then(responseMedia => {
            const inputData = {
              registerationId,
              registerationMediaRegisterationId: registerationId,
            };

            if (responseMedia.data.listRegisterationMedias.items.length !== 0) {
              inputData.id = responseMedia.data.listRegisterationMedias.items[0].id;
              inputData.expectedVersion = version;
            }

            _createUpdateRegisterationMedia({ inputData, ...media })
              .then(() => {
                _apiCompleted(dispatch);
              })
              .catch(error => {
                _apiCompleted(dispatch, { error });
              });
          })
          .catch(error => {
            _apiCompleted(dispatch, { error });
          });
      } else {
        _apiCompleted(dispatch);
      }
    })
    .catch(error => {
      _apiCompleted(dispatch, { error });
    });
};

const _searchSSRegisteration = userId => {
  return executeApi({
    type: QUERY,
    name: APINames.SEARCH_SS_REGISTERATION,
    data: { filter: { userId: { eq: userId } } },
  })
    .then(response => response)
    .catch(error => {
      throw error;
    });
};

const _createUpdateRegisterationMedia = ({ image, apiName, user, inputData: input }) => {
  const { extension, uri } = image;
  const { id: identityId } = user;

  return executeApiWithMedia({
    type: MUTATION,
    name: apiName,
    data: { input, uri, extension, identityId },
  })
    .then(response => response)
    .catch(error => {
      throw error;
    });
};

const _searchRegisteratioMedia = registerationId => {
  return executeApi({
    type: QUERY,
    name: APINames.SEARCH_REGISTERATION_MEDIA,
    data: {
      filter: { registerationId: { eq: registerationId } },
    },
  })
    .then(response => response)
    .catch(error => {
      throw error;
    });
};
