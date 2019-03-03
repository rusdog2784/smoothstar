import { ActionTypes } from '~constants';

import { FETCH_LIST_NEWS } from '~config/APIConfig';
import { executeApi } from '~utils';

const { API_INITIATE, API_COMPLETED, GET_LIST_NEWS } = ActionTypes;

export const getListNews = () => {
  return dispatch => {
    dispatch({ type: API_INITIATE });

    executeApi(FETCH_LIST_NEWS)
      .then(response => {
        dispatch({ type: GET_LIST_NEWS, pyload: response });
        dispatch({ type: API_COMPLETED });
      })
      .catch(error => {
        dispatch({ type: API_COMPLETED, pyload: error });
      });
  };
};
