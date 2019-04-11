import Moment from 'moment';
import { AsyncStorage } from 'react-native';

const _storeAsyncStorage = async ({ key, value }) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.setItem(key, value)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const _retrieveAsyncStorage = async key => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key)
      .then(response => {
        if (response !== null) {
          resolve(response);
        }
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('error');
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const _c = {
  formatDateServer: date => Moment(date).format('YYYY-MM-DD'),
  storeAsyncStorage: _storeAsyncStorage,
  retrieveAsyncStorage: _retrieveAsyncStorage,
};
