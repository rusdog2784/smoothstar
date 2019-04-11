export const StyleTypes = {
  headerTitle: 'headerTitle',
  headerTitleDark: 'headerTitleDark',
  title: 'title',
  h1: 'h1',
  h2: 'h2',
  p: 'p',
  small: 'small',
  date: 'date',
};

export const AuthActionTypes = {
  SIGNED_UP: 'SIGNED_UP',
  CONFIRMED_SIGN_UP: 'CONFIRMED_SIGN_UP',
  SIGNED_IN: 'SIGNED_IN',
  CONFIRMED_SIGN_IN: 'CONFIRMED_SIGN_IN',
  VERIFY_ATTR_CALLED: 'VERIFY_ATTR_CALLED',
  VERIFIED_ATTR: 'VERIFIED_ATTR',
};

export const AppStates = {
  REGISTER_SS: 'REGISTER_SS',
};

export const ApiTypes = {
  MUTATION: 'mutations',
  QUERY: 'queries',
};

export const AppConstants = {
  RegiterationAttemptsAllowed: 3,
  RegisterationStatus: { Unregistered: 'unregistered', Registered: 'registered' },
  InitLaunchStorageFlag: 'initLaunch',
};
