import { ActionTypes } from '~constants';

const { API_INITIATE, API_COMPLETED, GET_LIST_NEWS } = ActionTypes;

const INITIAL_STATE = {
  loading: false,
  newsList: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_INITIATE:
      return { ...state, loading: true };
    case API_COMPLETED: {
      if (action.payload) {
        action.payload.error && console.log(action.payload.error);
        action.payload.message && console.log(action.payload.message);
      }
      return { ...state, loading: false };
    }
    case GET_LIST_NEWS:
      return { ...state, newsList: action.payload };
    default:
      return state;
  }
};
