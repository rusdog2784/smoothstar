import { ActionTypes, AppStates } from '~constants';

const {
  API_INITIATE,
  API_COMPLETED,
  UNSUB_STATE,
  CLEAR_ERR_MSG,
  FETCH_LIST_NEWS,
  CREATE_SS_REGISTERATION,
} = ActionTypes;

const INITIAL_STATE = {
  message: '',
  error: '',
  loading: false,
  newsList: [],
  [AppStates.REGISTER_SS]: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_INITIATE:
      return { ...state, loading: true, message: '', error: '' };
    case API_COMPLETED: {
      if (action.payload) {
        if (action.payload.error) {
          console.log('Error:', action.payload.error);
          return { ...state, loading: false, error: action.payload.error };
        } else if (action.payload.message) {
          console.log('Message:', action.payload.message);
          return { ...state, loading: false, message: action.payload.message };
        }
      }
      return { ...state, loading: false };
    }
    case UNSUB_STATE:
      return { ...state, [action.payload]: false };
    case CLEAR_ERR_MSG:
      return { ...state, message: '', error: '' };
    case FETCH_LIST_NEWS:
      return { ...state, newsList: action.payload };
    case CREATE_SS_REGISTERATION:
      return { ...state, [AppStates.REGISTER_SS]: true };
    default:
      return state;
  }
};
