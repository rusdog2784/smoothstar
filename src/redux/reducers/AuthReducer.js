import { ActionTypes } from '~constants';

const {
  CLEAR_AUTH,
  AUTH_INITIATE,
  AUTH_COMPLETED,
  SET_AUTH_ACTION_COMPLETED,
  CONFIRM_SIGNUP,
  CONFIRM_SIGNIN,
  SET_INIT_LAUNCH,
} = ActionTypes;

const INITIAL_STATE = {
  username: '',
  authAction: '',
  authActionData: null,
  loading: false,
  user: null,
  isInitLaunch: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLEAR_AUTH:
      if (action.error && action.error !== undefined) {
        alert(action.error.message);
      }
      return { ...INITIAL_STATE, isInitLaunch: state.isInitLaunch };
    case AUTH_INITIATE:
      return { ...state, loading: true };
    case AUTH_COMPLETED:
      return { ...state, loading: false };
    case SET_INIT_LAUNCH:
      return { ...state, isInitLaunch: action.payload };
    case SET_AUTH_ACTION_COMPLETED:
      return { ...state, authAction: action.payload.type, authActionData: action.payload.data };
    case CONFIRM_SIGNUP:
      return { ...state, username: action.payload };
    case CONFIRM_SIGNIN:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
