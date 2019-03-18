import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';

import { authSignIn, authLoginFacebook, authLoginGoogle } from '~redux/actions';
import { Text, Button, InputBox } from '~components/common';
import { Assets, StyleTypes } from '~constants';
import { GlobalStyles, Colors } from '~styles';

class LoginScreen extends Component {
  state = {
    username: this.props.username,
    password: '',
  };

  onUsernameChange = text => {
    this.setState({ username: text });
  };

  onPasswordChange = text => {
    this.setState({ password: text });
  };

  handleSignIn = () => {
    const { username, password } = this.state;
    this.props.authSignIn({ username, password });
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
      xlgGapStyle,
    } = styles;

    return (
      <Container style={screenContainerStyle}>
        <Content contentContainerStyle={contentStyle}>
          <Image source={Assets.Images.logoDark} style={[mdGapStyle, logoStyle]} />

          <Text type={StyleTypes.h1} style={[mdGapStyle, introTextStyle]}>
            YOUR ACCOUNT{'\n'}FOR SMOOTHSTAR
          </Text>

          <InputBox
            onChangeText={this.onUsernameChange}
            style={smGapStyle}
            placeholder="Email"
            value={this.state.username}
            keyboardType="email-address"
          />
          <InputBox
            onChangeText={this.onPasswordChange}
            style={mdGapStyle}
            value={this.state.password}
            placeholder="Password"
            secureTextEntry
          />

          <TouchableOpacity style={[forgotViewStyle, lgGapStyle]}>
            <Text type={StyleTypes.small}>Forgotten Your Password?</Text>
          </TouchableOpacity>

          <View
            style={[
              smGapStyle,
              { justifyContent: 'center', flexWrap: 'wrap', flexDirection: 'row' },
            ]}>
            <Text type={StyleTypes.small}>By logging in, you agree to SmoothStar's </Text>
            <TouchableOpacity>
              <Text type={StyleTypes.small} style={underlineTextStyle}>
                Privacy Policy
              </Text>
            </TouchableOpacity>
            <Text type={StyleTypes.small}> and </Text>
            <TouchableOpacity>
              <Text type={StyleTypes.small} style={underlineTextStyle}>
                Terms of Use
              </Text>
            </TouchableOpacity>
          </View>

          <Button onPress={this.handleSignIn} style={xlgGapStyle}>
            LOGIN
          </Button>

          <Button
            onPress={this.props.authLoginGoogle}
            style={smGapStyle}
            color={Colors.buttonGoogleColor}
            icon="google-"
            iconType="Entypo">
            LOGIN WITH GOOGLE
          </Button>

          <Button
            onPress={this.props.authLoginFacebook}
            style={lgGapStyle}
            color={Colors.buttonFBColor}
            icon="facebook"
            iconType="FontAwesome">
            LOGIN WITH FACEBOOK
          </Button>

          <View
            style={[
              mdGapStyle,
              { justifyContent: 'center', flexWrap: 'wrap', flexDirection: 'row' },
            ]}>
            <Text type={StyleTypes.small}>Not a SmoothStar member? </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignupScreen')}>
              <Text type={StyleTypes.small} style={underlineTextStyle}>
                Join Now
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
  xlgGapStyle: {
    marginBottom: 55,
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
  const { username } = state.auth;

  return {
    username,
  };
};

export default connect(
  mapStateToProps,
  { authSignIn, authLoginFacebook, authLoginGoogle }
)(LoginScreen);
