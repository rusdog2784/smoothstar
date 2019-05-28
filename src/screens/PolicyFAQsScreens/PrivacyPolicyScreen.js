import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';

import { Text } from '~components/common';
import { Assets, StyleTypes } from '~constants';
import { GlobalStyles } from '~styles';

class PrivacyPolicyScreen extends Component {
  render() {
    const { screenContainerStyle, lgGapStyle, mdGapStyle } = GlobalStyles;
    const { contentStyle, logoStyle, introTextStyle } = styles;

    return (
      <Container style={screenContainerStyle}>
        <Content contentContainerStyle={contentStyle} showsVerticalScrollIndicator={false}>
          <Image source={Assets.Images.logoDark} style={[mdGapStyle, logoStyle]} />

          <Text dark type={StyleTypes.h1} style={[lgGapStyle, introTextStyle]}>
            PRIVACY POLICY
          </Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  contentStyle: {
    paddingVertical: 35,
    ...GlobalStyles.screenType1ContentStyle,
  },
  thumbnailStyle: {
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: '#666666',
  },
  logoStyle: {
    alignSelf: 'center',
    width: 50,
    height: 50,
  },
  introTextStyle: {
    textAlign: 'center',
  },
  textStyle: {
    textAlign: 'center',
  },
});

export default PrivacyPolicyScreen;
