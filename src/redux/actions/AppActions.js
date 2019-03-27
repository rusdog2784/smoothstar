import { ActionTypes, ApiTypes } from '~constants';

import * as APINames from '~config/APIConfig';
import { executeApi } from '~utils';

const { QUERY, MUTATION } = ApiTypes;
const {
  UNSUB_STATE,
  API_INITIATE,
  API_COMPLETED,
  FETCH_LIST_NEWS,
  CREATE_SS_REGISTERATION,
  CLEAR_ERR_MSG,
  SEARCH_ORDER_INFO,
  SEARCH_OCR_INFO,
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

export const creatSSRegisteration = ({ stockist, registeration }) => {
  return dispatch => {
    dispatch({ type: API_INITIATE });

    if (stockist) {
      const { smoothstarModel, purchaseDate, shopName } = registeration;

      _searchOcrInfo({ smoothstarModel, purchaseDate, shopName })
        .then(response => {
          if (response.data.listOCRInfos.items.length !== 0) {
            registeration.smoothstarRegistrationOcrInfoId = response.data.listOCRInfos.items[0].id;
            executeApi({
              type: MUTATION,
              name: APINames[CREATE_SS_REGISTERATION],
              data: { input: registeration },
            })
              .then(response => {
                dispatch({ type: CREATE_SS_REGISTERATION });
                _apiCompleted(dispatch);
              })
              .catch(error => {
                _apiCompleted(dispatch, { error });
              });
          } else {
            _apiCompleted(dispatch, { error: 'No order exist aginst this order number' });
          }
        })
        .catch(error => {
          console.log('error:', error);
          _apiCompleted(dispatch, { error });
        });
    } else {
      _searchOrderInfo(registeration.orderNum)
        .then(response => {
          if (response.data.listOrderInfos.items.length !== 0) {
            registeration.smoothstarRegistrationOrderInfoId =
              response.data.listOrderInfos.items[0].id;
            executeApi({
              type: MUTATION,
              name: APINames[CREATE_SS_REGISTERATION],
              data: { input: registeration },
            })
              .then(response => {
                dispatch({ type: CREATE_SS_REGISTERATION });
                _apiCompleted(dispatch);
              })
              .catch(error => {
                _apiCompleted(dispatch, { error });
              });
          } else {
            _apiCompleted(dispatch, { error: 'No order exist aginst this order number' });
          }
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
    name: APINames[SEARCH_ORDER_INFO],
    data: { filter: { orderNum: { eq: orderNum } } },
  })
    .then(response => response)
    .catch(error => {
      throw error;
    });
};

const _searchOcrInfo = ({ smoothstarModel, purchaseDate, shopName }) => {
  return executeApi({
    type: QUERY,
    name: APINames[SEARCH_OCR_INFO],
    data: {
      filter: {
        smoothstarModel: { eq: smoothstarModel },
        purchaseDate: { eq: purchaseDate },
        shopName: { eq: shopName },
      },
    },
  })
    .then(response => response)
    .catch(error => {
      throw error;
    });
};
