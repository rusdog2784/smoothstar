import { Permissions, Notifications } from 'expo';
import { Platform } from 'react-native';

import { LIST_PUSH_TOKEN, CREATE_PUSH_TOKEN } from '~config/APIConfig';
import { ApiTypes } from '~constants';
import { executeApi } from '~utils/API';

const { QUERY, MUTATION } = ApiTypes;

export const registerForPushNotificationsAsync = async userId => {
  console.log('in Push Token');
  try {
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
      return;
    }

    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();

    if (await isPushTokenNotExist(token)) {
      return await addPushToken(userId, token);
    }

    return true;
  } catch (error) {
    throw error;
  }
};

const isPushTokenNotExist = async token => {
  const listRes = await executeApi({
    type: QUERY,
    name: LIST_PUSH_TOKEN,
    data: { filter: { pushToken: { eq: token } } },
  });

  return listRes.data[LIST_PUSH_TOKEN].items.length === 0;
};

const addPushToken = (userId, token) => {
  return executeApi({
    type: MUTATION,
    name: CREATE_PUSH_TOKEN,
    data: {
      input: {
        deviceType: Platform.OS,
        pushToken: token,
        devicePushTokenUserId: userId,
        active: true,
      },
    },
  })
    .then(response => {
      if (response.data) {
        return true;
      }
    })
    .catch(error => {
      throw error;
    });
};
