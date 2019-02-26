import React, { Component } from 'react';
import { View } from 'react-native';

import { Text } from '~components/common';
import { Assets } from '~constants';

class NewsListScreen extends Component {
  static navigationOptions = {
    title: 'NEWS',
    headerLeft: <View>{null}</View>,
  };

  render() {
    return (
      <View>
        <Text> NewsListScreen </Text>
      </View>
    );
  }
}

export default NewsListScreen;
