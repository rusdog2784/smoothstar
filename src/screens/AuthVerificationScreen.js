import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';

import { authConfirmSignUp, authConfirmSignIn } from '~redux/actions';
import { Text, Button, InputBox } from '~components/common';
import { Assets, StyleTypes, AuthActionTypes } from '~constants';
import { GlobalStyles } from '~styles';

const { CONFIRMED_SIGN_UP, CONFIRMED_SIGN_IN, VERIFIED_ATTR } = AuthActionTypes;

class AuthVerificationScreen extends Component {
  state = {
    code: '',
  };

  componentDidUpdate = () => {
    const { navigation, authAction, loading } = this.props;
    // const { verifyEmail } = this.props.navigation.state.params;

    // if (authAction === CONFIRMED_SIGN_UP && !loading && verifyEmail) {
    //   Alert.alert(
    //     'Verify Email',
    //     'You have subscribed for emails, kindly verify your email address as well to avail subscription service.',
    //     [
    //       {
    //         text: 'Cancel',
    //         onPress: () => navigation.navigate('LoginScreen'),
    //         style: 'cancel',
    //       },
    //       {
    //         text: 'OK',
    //         onPress: () => {
    //           authVerifyAttribute('email');
    //           this.setState({ code: '' });
    //           navigation.setParams({ type: 'ConfirmEmail' });
    //         },
    //       },
    //     ]
    //   );
    // }
    if (authAction === CONFIRMED_SIGN_UP && !loading) {
      navigation.navigate('LoginScreen');
    } else if (authAction === CONFIRMED_SIGN_IN && !loading) {
      navigation.navigate('AppNavigator');
    } else if (authAction === VERIFIED_ATTR && !loading) {
      navigation.navigate('LoginScreen');
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
      this.props.authConfirmSignIn({ user, code: this.state.code, mfaType: 'SMS' });
    }
    // else if (type === 'ConfirmEmail') {
    //   this.props.authVerifyAttributeSubmit('email', this.state.code);
    // }
  };

  render() {
    const { screenContainerStyle, underlineTextStyle } = GlobalStyles;
    const {
      contentStyle,
      logoStyle,
      introTextStyle,
      forgotViewStyle,
      lgGapStyle,
      mdGapStyle,
      smGapStyle,
    } = styles;

    return (
      <Container style={screenContainerStyle}>
        <Content contentContainerStyle={contentStyle}>
          <Image source={Assets.Images.logoDark} style={[mdGapStyle, logoStyle]} />

          <Text type={StyleTypes.h1} style={[mdGapStyle, introTextStyle]}>
            YOUR ACCOUNT{'\n'}FOR SMOOTHSTAR
          </Text>

          <InputBox
            onChangeText={code => this.setState({ code })}
            style={smGapStyle}
            placeholder="Verfication Code"
            keyboardType="number-pad"
          />

          <TouchableOpacity style={[forgotViewStyle, lgGapStyle]}>
            <Text type={StyleTypes.small}>Resend?</Text>
          </TouchableOpacity>

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
  const { loading, authAction } = state.auth;

  return {
    loading,
    authAction,
  };
};

export default connect(
  mapStateToProps,
  { authConfirmSignUp, authConfirmSignIn }
)(AuthVerificationScreen);
