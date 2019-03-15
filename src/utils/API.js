import { API, graphqlOperation } from 'aws-amplify';

import * as queries from '~graphql/queries';

export const executeApi = async type => {
  return API.graphql(graphqlOperation(queries[type]))
    .then(response => {
      // console.log(`%cAPI (${type}) Response => %o`, 'color: blue', response);
      return response;
    })
    .catch(error => {
      console.log(error);
    });
};
