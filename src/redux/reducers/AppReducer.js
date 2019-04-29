import { ActionTypes, AppStates } from '~constants';

const {
  API_INITIATE,
  API_COMPLETED,
  UNSUB_STATE,
  CLEAR_ERR_MSG,
  FETCH_LIST_NEWS,
  FETCH_LIST_EVENTS,
  CREATE_SS_REGISTRATION,
  CHECK_SS_REGISTRATION,
  READY_APP,
} = ActionTypes;

const REGISTRATION_STATES = {
  [AppStates.REGISTER_SS]: false,
  registrationAttempts: 0,
  alreadyRegisteredId: null,
  registrationStatus: false,
};

const INITIAL_STATE = {
  ready: false,
  message: '',
  error: '',
  loading: false,
  newsList: [],
  eventsList: [],
  ...REGISTRATION_STATES,
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

    //EVENTS

    case FETCH_LIST_EVENTS:
      return { ...state, eventsList: action.payload };

    // REGISTER SMOOTHSTAR

    case CREATE_SS_REGISTRATION:
      return {
        ...state,
        [AppStates.REGISTER_SS]: true,
        registrationStatus: action.payload.status,
        registrationAttempts: state.registrationAttempts + 1,
        alreadyRegisteredId: action.payload.id,
      };
    case CHECK_SS_REGISTRATION:
      return {
        ...state,
        alreadyRegisteredId: action.payload.id,
        registrationAttempts: action.payload.attempts,
        registrationStatus: action.payload.status,
      };
    default:
      return state;
  }
};
