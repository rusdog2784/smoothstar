import { ActionTypes, ApiTypes, AppConstants } from '~constants';
import * as APINames from '~config/APIConfig';
import { executeApi, executeApiWithMedia } from '~utils/API';
import { updateUserAttributes, checkAuth, signOut } from '~utils/AuthController';
import { _c } from '~utils';
import NavigationService from '~utils/NavigationService';
import { registerForPushNotificationsAsync } from '~utils/PushTokenController';

const { QUERY, MUTATION } = ApiTypes;
const {
  UNSUB_STATE,
  API_INITIATE,
  API_COMPLETED,
  FETCH_LIST_NEWS,
  FETCH_LIST_EVENTS,
  CREATE_SS_REGISTRATION,
  UPDATE_SS_REGISTRATION,
  CLEAR_ERR_MSG,
  CHECK_SS_REGISTRATION,
  UPDATE_ATTRIBUTES,
  AUTH_INITIATE,
  CLEAR_AUTH,
  AUTH_COMPLETED,
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

export const fetchListEvents = () => {
  return dispatch => {
    dispatch({ type: API_INITIATE });

    executeApi({ type: QUERY, name: APINames[FETCH_LIST_EVENTS] })
      .then(response => {
        dispatch({ type: FETCH_LIST_EVENTS, payload: response.data.listEvents.items });
        _apiCompleted(dispatch);
      })
      .catch(error => {
        _apiCompleted(dispatch, { error });
      });
  };
};

export const updateUserInfo = ({ user, username }) => {
  return async dispatch => {
    dispatch({ type: API_INITIATE });

    try {
      //COGNITO UPDATE
      const userAttr = {
        ...user,
        address: `${user.city}-${user.country}`,
      };
      delete userAttr.city;
      delete userAttr.country;

      let result = await updateUserAttributes(userAttr);
      console.log('result:', result);

      let res = await checkAuth();

      const userData = { username: res.username, ...res.attributes };

      //CUSTOM TABLE (UserInfo) UPDATE
      const prevUserInfo = await checkUserInfo(username);

      const userInfo = {
        id: prevUserInfo.id,
        expectedVersion: prevUserInfo.version,
        lastModifiedOn: _c.formatDateServer(Date.now()),
        ...user,
      };

      await addUserInfo(userInfo, APINames.UPDATE_USER_INFO);

      dispatch({ type: UPDATE_ATTRIBUTES, payload: userData });

      _apiCompleted(dispatch);
    } catch (error) {
      _apiCompleted(dispatch, { error });
    }
  };
};

export const loginChecks = ({ username, userId }) => {
  return async dispatch => {
    try {
      dispatch({ type: API_INITIATE });

      if (userId) {
        await (checkSSRegistration(dispatch, username) &&
          registerForPushNotificationsAsync(userId));
      } else {
        await checkSSRegistration(dispatch, username);
      }

      NavigationService.navigate('AppNavigator');
      _apiCompleted(dispatch);
    } catch (error) {
      _apiCompleted(dispatch, { error });
      console.log('error==', error);

      NavigationService.navigate('AppNavigator');
      // dispatch(authSignOut());
    }
  };
};

const checkSSRegistration = (dispatch, username) => {
  return _searchSSRegistration(username)
    .then(response => {
      const { items } = response.data.listSmoothstarRegistrations;

      if (items.length !== 0) {
        dispatch({
          type: CHECK_SS_REGISTRATION,
          payload: {
            id: items[0].id,
            attempts: items[0].registrationAttempts,
            status: items[0].registrationStatus,
          },
        });
      }

      return true;
    })
    .catch(error => {
      throw error;
    });
};

export const createSSRegistration = ({ stockist, registration }) => {
  return (dispatch, getState) => {
    dispatch({ type: API_INITIATE });

    const { alreadyRegisteredId, registrationAttempts } = getState().app;
    const { user } = getState().auth;
    let apiName = CREATE_SS_REGISTRATION;
    let apiMediaName = APINames.CREATE_REGISTRATION_MEDIA;

    if (alreadyRegisteredId) {
      apiName = UPDATE_SS_REGISTRATION;
      apiMediaName = APINames.UPDATE_REGISTRATION_MEDIA;
      registration.id = alreadyRegisteredId;
      registration.expectedVersion = registrationAttempts;
    }

    registration.registrationStatus = AppConstants.RegistrationStatus.Unregistered;

    if (stockist) {
      const image = registration.image;
      delete registration.image;

      // _searchOcrInfo({ smoothstarModel, purchaseDate, shopName })
      //   .then(response => {
      //     if (response.data.listOCRInfos.items.length !== 0) {
      //       registration.smoothstarRegistrationOcrInfoId = response.data.listOCRInfos.items[0].id;
      //       registration.registrationStatus = AppConstants.RegistrationStatus.Registered;
      //     }
      //     // console.log('registration:', registration);
      //     _createUpdateRegistration(dispatch, apiName, registration);
      //   })
      //   .catch(error => {
      //     console.log('error:', error);
      //     _apiCompleted(dispatch, { error });
      //   });

      _createUpdateRegistration({
        dispatch,
        apiName,
        registration,
        stockist,
        media: { image, apiName: apiMediaName, user },
        version: registrationAttempts,
      });
    } else {
      _searchOrderInfo(registration.orderNum)
        .then(response => {
          if (response.data.listOrderInfos.items.length !== 0) {
            registration.smoothstarRegistrationOrderInfoId =
              response.data.listOrderInfos.items[0].id;
            registration.registrationStatus = AppConstants.RegistrationStatus.Registered;
          }
          // console.log('registration:', registration);
          _createUpdateRegistration({ dispatch, apiName, registration, stockist });
        })
        .catch(error => {
          _apiCompleted(dispatch, { error });
        });
    }
  };
};

// HELPER METHODS-------------------------------------------------------------------------->

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

const _createUpdateRegistration = ({
  dispatch,
  apiName,
  registration,
  stockist,
  media,
  version,
}) => {
  executeApi({
    type: MUTATION,
    name: APINames[apiName],
    data: { input: registration },
  })
    .then(response => {
      const registrationId = response.data[APINames[apiName]].id;

      dispatch({
        type: CREATE_SS_REGISTRATION,
        payload: {
          status: registration.registrationStatus === AppConstants.RegistrationStatus.Registered,
          id: registrationId,
        },
      });

      if (stockist) {
        _searchRegisteratioMedia(registrationId)
          .then(responseMedia => {
            const inputData = {
              registrationId,
              registrationMediaRegistrationId: registrationId,
            };

            if (responseMedia.data.listRegistrationMedias.items.length !== 0) {
              inputData.id = responseMedia.data.listRegistrationMedias.items[0].id;
              inputData.expectedVersion = version;
            }

            _createUpdateRegistrationMedia({ inputData, ...media })
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

const _searchSSRegistration = userId => {
  return executeApi({
    type: QUERY,
    name: APINames.SEARCH_SS_REGISTRATION,
    data: { filter: { userId: { eq: userId } } },
  })
    .then(response => response)
    .catch(error => {
      throw error;
    });
};

const _createUpdateRegistrationMedia = ({ image, apiName, user, inputData: input }) => {
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

const _searchRegisteratioMedia = registrationId => {
  return executeApi({
    type: QUERY,
    name: APINames.SEARCH_REGISTRATION_MEDIA,
    data: {
      filter: { registrationId: { eq: registrationId } },
    },
  })
    .then(response => response)
    .catch(error => {
      throw error;
    });
};

export const addUserInfo = async (user, apiName) => {
  return await executeApi({
    type: MUTATION,
    name: apiName,
    data: { input: user },
  });
};

export const getUserInfo = async username => {
  return executeApi({
    type: QUERY,
    name: APINames.SEARCH_USER_INFO,
    data: {
      filter: { email: { eq: username } },
    },
  });
};

export const checkUserInfo = async username => {
  try {
    const user = await getUserInfo(username);
    const items = user.data[APINames.SEARCH_USER_INFO].items;

    return items.length ? { id: items[0].id, version: items[0].version } : null;
  } catch (error) {
    throw error;
  }
};

export const authSignOut = () => {
  return (dispatch, getState) => {
    dispatch({ type: AUTH_INITIATE });

    const { provider } = getState().auth.user;

    signOut({ provider })
      .then(response => {
        console.log('signOut:', response);
        NavigationService.navigate('AuthNavigator');
        dispatch({ type: CLEAR_AUTH });
      })
      .catch(error => {
        dispatch({ type: CLEAR_AUTH, error });
      })
      .finally(() => dispatch({ type: AUTH_COMPLETED }));
  };
};
