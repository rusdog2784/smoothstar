import { ActionTypes, AppStates } from '~constants';

const {
  API_INITIATE,
  API_COMPLETED,
  UNSUB_STATE,
  CLEAR_ERR_MSG,
  FETCH_LIST_NEWS,
  CREATE_SS_REGISTERATION,
  CHECK_SS_REGISTERATION,
  READY_APP,
} = ActionTypes;

const REGISTERATION_STATES = {
  [AppStates.REGISTER_SS]: false,
  registerationAttempts: 0,
  alreadyRegisteredId: null,
  registerationStatus: false,
};

const INITIAL_STATE = {
  ready: false,
  message: '',
  error: '',
  loading: false,
  newsList: [],
  ...REGISTERATION_STATES,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case READY_APP:
      return { ...state, ready: true };
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

    //NEWS

    case FETCH_LIST_NEWS:
      return { ...state, newsList: action.payload };

    // REGISTER SMOOTHSTAR

    case CREATE_SS_REGISTERATION:
      return {
        ...state,
        [AppStates.REGISTER_SS]: true,
        registerationStatus: action.payload.status,
        registerationAttempts: state.registerationAttempts + 1,
        alreadyRegisteredId: action.payload.id,
      };
    case CHECK_SS_REGISTERATION:
      return {
        ...state,
        alreadyRegisteredId: action.payload.id,
        registerationAttempts: action.payload.attempts,
        registerationStatus: action.payload.status,
      };
    default:
      return state;
  }
};
