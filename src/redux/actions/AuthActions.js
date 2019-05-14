import { ActionTypes, AuthActionTypes } from '~constants';
import * as APINames from '~config/APIConfig';
import { addUserInfo, checkUserInfo } from './AppActions';
import { _c } from '~utils';
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
import { AppConstants } from '../../constants/General';

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
  CLEAR_AUTH,
  CONFIRM_SIGNUP,
  CONFIRM_SIGNIN,
  SET_AUTH_ACTION_COMPLETED,
  SET_INIT_LAUNCH,
} = ActionTypes;

export const setAuth = (standalone = true) => {
  return dispatch => {
    if (standalone) {
      dispatch({ type: AUTH_INITIATE });
    }

    return checkAuth()
      .then(async response => {
        const user = { username: response.username, ...response.attributes };
        await dispatch({ type: CONFIRM_SIGNIN, payload: user });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: CLEAR_AUTH });
      })
      .finally(() => {
        if (standalone) {
          dispatch({ type: AUTH_COMPLETED });
        }
      });
  };
};

export const authSignUp = ({ user }) => {
  return dispatch => {
    dispatch({ type: AUTH_INITIATE });

    // let emailSub = user.emailSub;
    delete user.emailSub;

    signUp(user)
      .then(async response => {
        dispatch({
          type: SET_AUTH_ACTION_COMPLETED,
          payload: { type: SIGNED_UP, data: user.email },
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: CLEAR_AUTH, error });
      })
      .finally(() => dispatch({ type: AUTH_COMPLETED }));
  };
};

export const authConfirmSignUp = ({ username, code }) => {
  return dispatch => {
    dispatch({ type: AUTH_INITIATE });

    confirmSignUp({ username, code })
      .then(response => {
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
        dispatch({ type: CLEAR_AUTH, error });
      })
      .finally(() => dispatch({ type: AUTH_COMPLETED }));
  };
};

export const authSignIn = user => {
  return dispatch => {
    dispatch({ type: AUTH_INITIATE });

    signIn(user)
      .then(response => {
        dispatch({ type: SET_AUTH_ACTION_COMPLETED, payload: { type: SIGNED_IN, data: response } });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: CLEAR_AUTH, error });
      })
      .finally(() => dispatch({ type: AUTH_COMPLETED }));
  };
};

export const authConfirmSignIn = data => {
  return (dispatch, getState) => {
    dispatch({ type: AUTH_INITIATE });

    confirmSignIn(data)
      .then(async res => {
        if (res.username) {
          const prevUserInfo = await checkUserInfo(res.username);

          await dispatch(setAuth(false));

          const userData = getState().auth.user;

          if (!prevUserInfo) {
            const userInfo = {
              ...userData,
              city: userData.address.split('-')[0],
              country: userData.address.split('-')[1],
              email_verified: false,
              phone_number_verified: false,
              promo_email_preference: true,
              type: 'Unknown',
              lastModifiedOn: _c.formatDateServer(Date.now()),
              lastSigninOn: _c.formatDateServer(Date.now()),
              active: true,
            };
            delete userInfo.address;
            delete userInfo.username;
            delete userInfo.sub;

            addUserInfo(userInfo, APINames.CREATE_USER_INFO);
          } else {
            const userInfo = {
              id: prevUserInfo.id,
              expectedVersion: prevUserInfo.version,
              lastSigninOn: _c.formatDateServer(Date.now()),
            };
            addUserInfo(userInfo, APINames.UPDATE_USER_INFO);
          }

          dispatch({
            type: SET_AUTH_ACTION_COMPLETED,
            payload: { type: CONFIRMED_SIGN_IN, data: null },
          });
        }
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: CLEAR_AUTH, error });
      })
      .finally(() => dispatch({ type: AUTH_COMPLETED }));
  };
};

export const authLoginFacebook = () => {
  return dispatch => {
    dispatch({ type: AUTH_INITIATE });

    loginFacebook()
      .then(response => {
        if (response) {
          const user = {
            ...response.attributes,
            username: response.username,
          };
          dispatch({ type: CONFIRM_SIGNIN, payload: user });
          NavigationService.navigate('AppNavigator');
        }
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: CLEAR_AUTH, error });
      })
      .finally(() => dispatch({ type: AUTH_COMPLETED }));
  };
};

export const authLoginGoogle = () => {
  return dispatch => {
    dispatch({ type: AUTH_INITIATE });

    loginGoogle()
      .then(response => {
        if (response) {
          dispatch({ type: CONFIRM_SIGNIN, payload: response });
          NavigationService.navigate('AppNavigator');
        }
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: CLEAR_AUTH, error });
      })
      .finally(() => dispatch({ type: AUTH_COMPLETED }));
  };
};

export const authSignOut = () => {
  return (dispatch, getState) => {
    dispatch({ type: AUTH_INITIATE });

    const { provider } = getState().auth.user;

    signOut({ provider })
      .then(response => {
        console.log('signOut:', response);
        NavigationService.navigate('AuthNavigator');
        dispatch({ type: CLEAR_AUTH });
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
        if (response === 'SUCCESS') {
          dispatch({
            type: SET_AUTH_ACTION_COMPLETED,
            payload: { type: VERIFY_ATTR_CALLED, data: response },
          });
        }
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: CLEAR_AUTH, error });
      })
      .finally(() => dispatch({ type: AUTH_COMPLETED }));
  };
};

export const authVerifyAttributeSubmit = (attr, code) => {
  return dispatch => {
    dispatch({ type: AUTH_INITIATE });

    verifyAttributeSubmit(attr, code)
      .then(response => {
        if (response === 'SUCCESS') {
          dispatch({
            type: SET_AUTH_ACTION_COMPLETED,
            payload: { type: VERIFIED_ATTR, data: response },
          });
        }
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: CLEAR_AUTH, error });
      })
      .finally(() => dispatch({ type: AUTH_COMPLETED }));
  };
};

export const checkInitLaunch = () => {
  return dispatch => {
    _c.retrieveAsyncStorage(AppConstants.InitLaunchStorageFlag)
      .then(response => {
        dispatch({
          type: SET_INIT_LAUNCH,
          payload: false,
        });
      })
      .catch(() => {
        dispatch({
          type: SET_INIT_LAUNCH,
          payload: true,
        });
      });
  };
};

export const setInitLaunch = () => {
  _c.storeAsyncStorage({ key: AppConstants.InitLaunchStorageFlag, value: '1' });
  return {
    type: SET_INIT_LAUNCH,
    payload: false,
  };
};
