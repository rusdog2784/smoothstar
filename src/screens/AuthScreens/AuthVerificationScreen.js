import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';

import { authConfirmSignUp, authConfirmSignIn, checkSSRegistration } from '~redux/actions';
import { Text, Button, InputBox } from '~components/common';
import { Assets, StyleTypes, AuthActionTypes } from '~constants';
import { GlobalStyles } from '~styles';

const { CONFIRMED_SIGN_UP, CONFIRMED_SIGN_IN, VERIFIED_ATTR } = AuthActionTypes;

class AuthVerificationScreen extends Component {
  state = {
    code: '',
  };

  componentDidUpdate = () => {
    const {
      navigation,
      authAction,
      loading,
      user,
      checkSSRegistration,
      loadingApp,
      ready,
    } = this.props;

    if (authAction === CONFIRMED_SIGN_UP && !loading) {
      navigation.navigate('LoginScreen');
    } else if (authAction === CONFIRMED_SIGN_IN && !loading && !ready) {
      checkSSRegistration(user.username);
    } else if (authAction === VERIFIED_ATTR && !loading) {
      navigation.navigate('LoginScreen');
    } else if (ready && !loading && !loadingApp) {
      navigation.navigate('AppNavigator');
    }
  };

  handleVerificationCode = () => {
    if (this.state.code === '') {
      alert('Verification code can not be empty');
      return;
    }

    const { type, user, username } = this.props.navigation.state.params;

    if (type === 'ConfirmSignUp') {
      this.props.authConfirmSignUp({ username, code: this.state.code });
    } else if (type === 'ConfirmSignIn') {
      this.props.authConfirmSignIn({ user, code: this.state.code, mfaType: 'SMS_MFA' });
    }
  };

  render() {
    const { screenContainerStyle, underlineTextStyle } = GlobalStyles;
    const { type } = this.props.navigation.state.params;
    const {
      contentStyle,
      logoStyle,
      introTextStyle,
      // forgotViewStyle,
      lgGapStyle,
      mdGapStyle,
      smGapStyle,
    } = styles;

    return (
      <Container style={screenContainerStyle}>
        <Content contentContainerStyle={contentStyle} showsVerticalScrollIndicator={false}>
          <Image source={Assets.Images.logoDark} style={[mdGapStyle, logoStyle]} />

          <Text type={StyleTypes.h1} style={[lgGapStyle, introTextStyle]}>
            {type === 'ConfirmSignUp' ? 'Phone Verification' : 'Multi-Factor Authentication'}
          </Text>

          <Text type={StyleTypes.p} style={[mdGapStyle, introTextStyle]}>
            {type === 'ConfirmSignUp'
              ? 'Please type the verification code received via SMS'
              : 'Please type the MFA verification code received via SMS'}
          </Text>

          <InputBox
            onChangeText={code => this.setState({ code })}
            style={smGapStyle}
            placeholder="Verfication Code"
            keyboardType="number-pad"
            maxLength={6}
          />

          {/* <TouchableOpacity style={[forgotViewStyle, lgGapStyle]}>
            <Text type={StyleTypes.small}>Resend?</Text>
          </TouchableOpacity> */}

          <Button onPress={this.handleVerificationCode} style={lgGapStyle}>
            VERIFY
          </Button>

          <View
            style={[
              mdGapStyle,
              { justifyContent: 'center', flexWrap: 'wrap', flexDirection: 'row' },
            ]}>
            <Text type={StyleTypes.small}>Already a member? </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')}>
              <Text type={StyleTypes.small} style={underlineTextStyle}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
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
  logoStyle: {
    width: 50,
    height: 50,
  },
  forgotViewStyle: {
    width: '100%',
    alignItems: 'flex-end',
  },
  introTextStyle: {
    textAlign: 'center',
  },
  lgGapStyle: {
    marginBottom: 35,
  },
  mdGapStyle: {
    marginBottom: 25,
  },
  smGapStyle: {
    marginBottom: 10,
  },
});

const mapStateToProps = state => {
  const { loading, authAction, user } = state.auth;
  const { loadingApp, ready } = state.app;

  return {
    ready,
    user,
    loading,
    loadingApp,
    authAction,
  };
};

export default connect(
  mapStateToProps,
  { authConfirmSignUp, authConfirmSignIn, checkSSRegistration }
)(AuthVerificationScreen);
