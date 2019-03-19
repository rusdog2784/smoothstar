import { Auth } from 'aws-amplify';
import { Facebook, Google } from 'expo';

import { FacebookAppId } from '~config/AuthConfig';

export const checkAuth = async () => {
  return Auth.currentAuthenticatedUser({
    bypassCache: true,
  })
    .then(user => {
      if (user.provider && user.provider === 'Facebook') {
        return { username: user.email, attributes: { ...user } };
      }
      return user;
    })
    .catch(error => {
      throw error;
    });
};

export const signUp = async user => {
  const username = user.email;
  const password = user.password;

  delete user.password;

  return Auth.signUp({
    username,
    password,
    attributes: { ...user },
  })
    .then(response => response)
    .catch(error => {
      throw error;
    });
};

export const confirmSignUp = async ({ username, code }) => {
  return Auth.confirmSignUp(username, code, {})
    .then(response => response)
    .catch(error => {
      throw error;
    });
};

export const signIn = async ({ username, password }) => {
  return Auth.signIn(username, password)
    .then(response => response)
    .catch(error => {
      throw error;
    });
};

export const confirmSignIn = async ({ user, code, mfaType }) => {
  return Auth.confirmSignIn(user, code, mfaType)
    .then(response => response)
    .catch(error => {
      throw error;
    });
};

export const signOut = async () => {
  return Auth.signOut()
    .then(() => true)
    .catch(error => {
      throw error;
    });
};

export const verifyAttribute = async attr => {
  return Auth.verifyCurrentUserAttribute(attr)
    .then(response => response)
    .catch(error => {
      throw error;
    });
};

export const verifyAttributeSubmit = async (attr, code) => {
  return Auth.verifyCurrentUserAttribute(attr, code)
    .then(response => response)
    .catch(error => {
      throw error;
    });
};

export const loginFacebook = async () => {
  try {
    const { type, token, expires } = await Facebook.logInWithReadPermissionsAsync(FacebookAppId, {
      permissions: ['public_profile', 'email'],
    });

    console.log('type:', type);
    console.log('token:', token);

    const fieldsRequired = 'id,first_name,last_name,email';

    if (type === 'success') {
      const response = await fetch(
        `https://graph.facebook.com/me?fields=${fieldsRequired}&access_token=${token}`
      );
      const res = await response.json();

      const user = {
        given_name: res.first_name,
        family_name: res.last_name,
        email: res.email,
        provider: 'facebook',
      };

      const date = new Date();

      const expires_at = expires * 1000 + date.getTime();

      return Auth.federatedSignIn('facebook', { token, expires_at }, user).then(() => {
        return checkAuth();
      });
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};

export const loginGoogle = async () => {
  try {
    const result = await Google.logInAsync({
      androidClientId: '671149193257-q40l6m57qn2el5d88qqgtgbaaujlbgf4.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });

    console.log('result:', result);

    if (result.type === 'success') {
      const { id_token: token, accessTokenExpirationDate: expires_at } = result;
      const { email, familyName, givenName } = result.user;
      const user = {
        given_name: givenName,
        family_name: familyName,
        email,
        provider: 'google',
      };

      return Auth.federatedSignIn('google', { token, expires_at }, user).then(() => {
        return checkAuth();
      });
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};
