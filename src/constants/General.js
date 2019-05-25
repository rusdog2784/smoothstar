import aws_config from '~config/aws-exports';

const {
  aws_user_files_s3_bucket_region: s3Region,
  aws_user_files_s3_bucket: s3Bucket,
} = aws_config;

export const StyleTypes = {
  headerTitle: 'headerTitle',
  headerTitleDark: 'headerTitleDark',
  title: 'title',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  p: 'p',
  small: 'small',
  date: 'date',
};

export const AppStates = {
  REGISTER_SS: 'REGISTER_SS',
};

export const ApiTypes = {
  MUTATION: 'mutations',
  QUERY: 'queries',
};

export const AppConstants = {
  RegitrationAttemptsAllowed: 3,
  RegistrationStatus: { Unregistered: 'unregistered', Registered: 'registered' },
  InitLaunchStorageFlag: 'initLaunch',
  S3ImageURL: `https://s3-${s3Region}.amazonaws.com/${s3Bucket}/`,
};
