import { ActionTypes } from '~constants';

const {
  CLEAR_AUTH,
  AUTH_INITIATE,
  AUTH_COMPLETED,
  CONFIRM_SIGNUP,
  CONFIRM_SIGNIN,
  SET_INIT_LAUNCH,
  UPDATE_ATTRIBUTES,
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
    case CONFIRM_SIGNUP:
      return { ...state, username: action.payload };
    case CONFIRM_SIGNIN:
      return { ...state, user: action.payload, username: '' };
    case UPDATE_ATTRIBUTES:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
