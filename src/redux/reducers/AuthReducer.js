const INITIAL_STATE = {
  username: '',
  password: '',
  error: '',
  message: '',
  token: '',
  loading: false,
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
