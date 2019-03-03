import Amplify, { API, graphqlOperation } from 'aws-amplify';

import * as queries from '~graphql/queries';
import config from '~config/aws-exports';

Amplify.configure(config);

export const executeApi = async type => {
  return API.graphql(graphqlOperation(queries[type])).then(response => {
    console.log(`%cAPI (${type}) Response => %o`, 'color: blue', response);
    return response;
  });
};
