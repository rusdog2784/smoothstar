import { API, graphqlOperation, Storage } from 'aws-amplify';
import uuidv1 from 'uuid/v1';

import { ApiTypes } from '~constants';
import * as queries from '~graphql/queries';
import * as mutations from '~graphql/mutations';
import aws_config from '~config/aws-exports';

const { QUERY, MUTATION } = ApiTypes;

export const executeApi = async ({ type, name, data = null }) => {
  const operation = type === QUERY ? queries[name] : type === MUTATION ? mutations[name] : null;

  return API.graphql(graphqlOperation(operation, data))
    .then(response => {
      console.log(`API (${name}) Response => `, response);
      return response;
    })
    .catch(error => {
      throw error;
    });
};

export const executeApiWithMedia = async ({ name, data }) => {
  const { extension, identityId, uri } = data;

  const bucket = aws_config.aws_user_files_s3_bucket;
  const region = aws_config.aws_user_files_s3_bucket_region;
  const visibility = 'public';

  const key = `${identityId}/${uuidv1()}${extension && '.'}${extension}`;

  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(xhr.response);
    };
    xhr.onerror = function() {
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });

  return Storage.put(key, blob, {
    level: visibility,
    contentType: `image/${extension}`,
  })
    .then(result => {
      const file = {
        bucket,
        region,
        key: result.key,
      };

      const input = { ...data.input, file };

      return executeApi({ type: MUTATION, name, data: { input } });
    })
    .catch(error => {
      throw error;
    });
};
