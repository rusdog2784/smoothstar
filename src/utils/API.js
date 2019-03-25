import { API, graphqlOperation } from 'aws-amplify';

import { ApiTypes } from '~constants';
import * as queries from '~graphql/queries';
import * as mutations from '~graphql/mutations';

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
