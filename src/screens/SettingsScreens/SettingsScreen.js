import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Content, Thumbnail } from 'native-base';
import { connect } from 'react-redux';
import { SplashScreen } from 'expo';

import { authSignUp, authLoginFacebook, authLoginGoogle } from '~redux/actions';
import { Text, Button, InputBox, Dropdown } from '~components/common';
import { Assets, StyleTypes } from '~constants';
import { GlobalStyles, Colors } from '~styles';

class SettingsScreen extends Component {
  state = {
    alteration: false,
  };

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const { screenContainerStyle, lgGapStyle, mdGapStyle, smGapStyle } = GlobalStyles;
    const { contentStyle, logoStyle, introTextStyle, thumbnailStyle } = styles;

    return (
      <Container style={screenContainerStyle}>
        <Content contentContainerStyle={contentStyle} showsVerticalScrollIndicator={false}>
          <Image source={Assets.Images.logoDark} style={[mdGapStyle, logoStyle]} />

          <Text dark type={StyleTypes.h1} style={[lgGapStyle, introTextStyle]}>
            APP SETTINGS
          </Text>

          <Thumbnail style={[lgGapStyle, thumbnailStyle]} source={Assets.Images.testImg} />

          <InputBox
            onChangeText={() => {}}
            value={''}
            style={smGapStyle}
            placeholder="Email"
            keyboardType="email-address"
          />

          <Button onPress={this.handleSignUp} style={mdGapStyle}>
            CREATE ACCOUNT
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  contentStyle: {
    alignItems: 'center',
    paddingVertical: 35,
    ...GlobalStyles.screenType1ContentStyle,
  },
  thumbnailStyle: {
    borderWidth: 3,
    borderColor: '#666666',
  },
  logoStyle: {
    width: 50,
    height: 50,
  },
  introTextStyle: {
    textAlign: 'center',
  },
  lineViewStyle: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineStyle: {
    borderBottomWidth: 1,
    position: 'absolute',
    width: '100%',
  },
  checkBoxViewStyle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const mapStateToProps = state => {
  const { loading, user, authAction, authActionData } = state.auth;

  return {
    loading,
    user,
    authAction,
    authActionData,
  };
};

export default connect(
  mapStateToProps,
  { authSignUp, authLoginFacebook, authLoginGoogle }
)(SettingsScreen);
