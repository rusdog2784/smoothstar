import { ActionTypes } from '~constants';
import * as APINames from '~config/APIConfig';
import { addUserInfo, checkUserInfo, loginChecks } from './AppActions';
import { _c } from '~utils';
import NavigationService from '~utils/NavigationService';
import {
  checkAuth,
  signUp,
  confirmSignUp,
  signIn,
  confirmSignIn,
  loginFacebook,
  loginGoogle,
} from '~utils/AuthController';
import { AppConstants } from '../../constants/General';

const {
  AUTH_INITIATE,
  AUTH_COMPLETED,
  CLEAR_AUTH,
  CONFIRM_SIGNUP,
  CONFIRM_SIGNIN,
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
        NavigationService.navigate('AuthVerificationScreen', {
          username: user.email,
          type: 'ConfirmSignUp',
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
          NavigationService.navigate('LoginScreen');
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
        NavigationService.navigate('AuthVerificationScreen', {
          type: 'ConfirmSignIn',
          user: response,
        });
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

          let userInfoId = prevUserInfo.id;

          if (!prevUserInfo) {
            const userInfo = {
              ...userData,
              city: userData.address.split('-')[0],
              country: userData.address.split('-')[1],
              email_verified: false,
              phone_number_verified: true,
              promo_email_preference: true,
              type: 'Unknown',
              lastModifiedOn: _c.formatDateServer(Date.now()),
              lastSigninOn: _c.formatDateServer(Date.now()),
              active: true,
            };
            delete userInfo.address;
            delete userInfo.username;
            delete userInfo.sub;

            const resUserInfoAdd = await addUserInfo(userInfo, APINames.CREATE_USER_INFO);
            userInfoId = resUserInfoAdd.data[APINames.CREATE_USER_INFO].id;
          } else {
            const userInfo = {
              id: prevUserInfo.id,
              expectedVersion: prevUserInfo.version,
              lastSigninOn: _c.formatDateServer(Date.now()),
            };

            const resUserInfoAdd = await addUserInfo(userInfo, APINames.UPDATE_USER_INFO);
            userInfoId = resUserInfoAdd.data[APINames.UPDATE_USER_INFO].id;
          }

          dispatch(loginChecks({ username: data.user.username, userId: userInfoId }));
        }
      })
      .catch(error => {
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
