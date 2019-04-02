import { ActionTypes, AuthActionTypes } from '~constants';

import NavigationService from '~utils/NavigationService';
import {
  checkAuth,
  signUp,
  confirmSignUp,
  signIn,
  confirmSignIn,
  loginFacebook,
  signOut,
  loginGoogle,
  verifyAttribute,
  verifyAttributeSubmit,
} from '~utils/AuthController';

const {
  SIGNED_UP,
  SIGNED_IN,
  CONFIRMED_SIGN_UP,
  CONFIRMED_SIGN_IN,
  VERIFY_ATTR_CALLED,
  VERIFIED_ATTR,
} = AuthActionTypes;

const {
  AUTH_INITIATE,
  AUTH_COMPLETED,
  SET_AUTH,
  CLEAR_AUTH,
  CONFIRM_SIGNUP,
  CONFIRM_SIGNIN,
  SET_AUTH_ACTION_COMPLETED,
} = ActionTypes;

export const setAuth = () => {
  return dispatch => {
    dispatch({ type: AUTH_INITIATE });

    checkAuth()
      .then(response => {
        console.log('responseCheck:', response);
        const user = { username: response.username, ...response.attributes };
        dispatch({ type: SET_AUTH, payload: user });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: CLEAR_AUTH });
      })
      .finally(() => dispatch({ type: AUTH_COMPLETED }));
  };
};

export const authSignUp = ({ user }) => {
  return dispatch => {
    dispatch({ type: AUTH_INITIATE });

    signUp(user)
      .then(response => {
        console.log('responseSignUp:', response);
        dispatch({
          type: SET_AUTH_ACTION_COMPLETED,
          payload: { type: SIGNED_UP, data: user.email },
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: CLEAR_AUTH });
      })
      .finally(() => dispatch({ type: AUTH_COMPLETED }));
  };
};

export const authConfirmSignUp = ({ username, code }) => {
  return dispatch => {
    dispatch({ type: AUTH_INITIATE });

    confirmSignUp({ username, code })
      .then(response => {
        console.log('responseConfirmSignUp:', response);
        if (response === 'SUCCESS') {
          dispatch({ type: CONFIRM_SIGNUP, payload: username });
          dispatch({
            type: SET_AUTH_ACTION_COMPLETED,
            payload: { type: CONFIRMED_SIGN_UP, data: null },
          });
        }
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: CLEAR_AUTH });
      })
      .finally(() => dispatch({ type: AUTH_COMPLETED }));
  };
};

export const authSignIn = user => {
  return dispatch => {
    dispatch({ type: AUTH_INITIATE });

    signIn(user)
      .then(response => {
        console.log('responseSignIn:', response);
        dispatch({ type: SET_AUTH_ACTION_COMPLETED, payload: { type: SIGNED_IN, data: response } });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: CLEAR_AUTH });
      })
      .finally(() => dispatch({ type: AUTH_COMPLETED }));
  };
};

export const authConfirmSignIn = data => {
  return dispatch => {
    dispatch({ type: AUTH_INITIATE });

    confirmSignIn(data)
      .then(response => {
        console.log('responseConfirmSignIn:', response);
        if (response === 'SUCCESS') {
          dispatch({ type: CONFIRM_SIGNIN, payload: response });
          dispatch({
            type: SET_AUTH_ACTION_COMPLETED,
            payload: { type: CONFIRMED_SIGN_IN, data: null },
          });
        }
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: CLEAR_AUTH });
      })
      .finally(() => dispatch({ type: AUTH_COMPLETED }));
  };
};

export const authLoginFacebook = () => {
  return dispatch => {
    dispatch({ type: AUTH_INITIATE });

    loginFacebook()
      .then(response => {
        console.log('responseLoginFacebbok:', response);
        if (response) {
          dispatch({ type: CONFIRM_SIGNIN, payload: response });
          NavigationService.navigate('AppNavigator');
        }
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: CLEAR_AUTH });
      })
      .finally(() => dispatch({ type: AUTH_COMPLETED }));
  };
};

export const authLoginGoogle = () => {
  return dispatch => {
    dispatch({ type: AUTH_INITIATE });

    loginGoogle()
      .then(response => {
        console.log('responseLoginGoogle:', response);
        if (response) {
          dispatch({ type: CONFIRM_SIGNIN, payload: response });
          NavigationService.navigate('AppNavigator');
        }
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: CLEAR_AUTH });
      })
      .finally(() => dispatch({ type: AUTH_COMPLETED }));
  };
};

export const authSignOut = () => {
  return dispatch => {
    dispatch({ type: AUTH_INITIATE });

    signOut()
      .then(response => {
        console.log('signOut:', response);
        dispatch({ type: CLEAR_AUTH });
        NavigationService.navigate('AuthNavigator');
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => dispatch({ type: AUTH_COMPLETED }));
  };
};

export const authVerifyAttribute = attr => {
  return dispatch => {
    dispatch({ type: AUTH_INITIATE });

    verifyAttribute(attr)
      .then(response => {
        console.log('responseverifyAttribute:', response);
        if (response === 'SUCCESS') {
          dispatch({
            type: SET_AUTH_ACTION_COMPLETED,
            payload: { type: VERIFY_ATTR_CALLED, data: response },
          });
        }
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: CLEAR_AUTH });
      })
      .finally(() => dispatch({ type: AUTH_COMPLETED }));
  };
};

export const authVerifyAttributeSubmit = (attr, code) => {
  return dispatch => {
    dispatch({ type: AUTH_INITIATE });

    verifyAttributeSubmit(attr, code)
      .then(response => {
        console.log('responseverifyAttributeSubmit:', response);
        if (response === 'SUCCESS') {
          dispatch({
            type: SET_AUTH_ACTION_COMPLETED,
            payload: { type: VERIFIED_ATTR, data: response },
          });
        }
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: CLEAR_AUTH });
      })
      .finally(() => dispatch({ type: AUTH_COMPLETED }));
  };
};
