import { ActionTypes } from '~constants';

const { AUTH_INITIATE, AUTH_COMPLETED, SET_AUTH, CONFIRM_SIGNUP } = ActionTypes;

const INITIAL_STATE = {
  username: '',
  loading: false,
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_INITIATE:
      return { ...state, loading: true };
    case AUTH_COMPLETED:
      return { ...state, loading: false };
    case SET_AUTH:
      return { ...state, user: action.payload };
    case CONFIRM_SIGNUP:
      return { ...state, username: action.payload };
    default:
      return state;
  }
};
