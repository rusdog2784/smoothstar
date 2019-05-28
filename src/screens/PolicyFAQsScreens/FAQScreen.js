import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content } from 'native-base';

import { Text, CustomIcon } from '~components/common';
import { StyleTypes } from '~constants';
import { GlobalStyles, Colors } from '~styles';

class FAQScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <Text type={StyleTypes.headerTitleDark}>FAQ</Text>,
    headerRight: <View>{null}</View>,
    headerLeft: (
      <CustomIcon
        shadow
        button
        onPress={navigation.toggleDrawer}
        style={GlobalStyles.headerLeftStyle}
        name="menu"
        type="MaterialIcons"
        color={Colors.iconColorDark}
      />
    ),
  });

  render() {
    return (
      <Container>
        <Content showsVerticalScrollIndicator={false} />
      </Container>
    );
  }
}

export default FAQScreen;
