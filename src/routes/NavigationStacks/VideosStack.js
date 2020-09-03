import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Colors } from '~styles';
import { VideosCategoryScreen } from '~screens/VideosScreens';

const VideosStack = createStackNavigator(
  {
    VideosCategoryScreen: {
      screen: VideosCategoryScreen,
    },
  },
  {
    initialRouteName: 'VideosCategoryScreen',
    defaultNavigationOptions: {
      headerTintColor: Colors.headerTitleColorDark,
    },
  }
);

export default createAppContainer(VideosStack);
