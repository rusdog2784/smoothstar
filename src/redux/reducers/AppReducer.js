import { ActionTypes } from '~constants';

const { NEWS_FETCH } = ActionTypes;

const INITIAL_STATE = {
  news: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
