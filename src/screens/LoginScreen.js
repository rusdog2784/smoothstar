import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Content } from 'native-base';

import { Text, Button, InputBox } from '~components/common';
import { Assets, StaticData, StyleTypes } from '~constants';
import { GlobalStyles, Colors } from '~styles';

class LoginScreen extends Component {
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

          <InputBox style={smGapStyle} placeholder="Email" keyboardType="email-address" />
          <InputBox style={mdGapStyle} placeholder="Password" secureTextEntry />

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

          <Button onPress={() => {}} style={xlgGapStyle}>
            LOGIN
          </Button>

          <Button
            onPress={() => {}}
            style={smGapStyle}
            color={Colors.buttonGoogleColor}
            icon="google-"
            iconType="Entypo">
            LOGIN WITH GOOGLE
          </Button>

          <Button
            onPress={() => {}}
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

export default LoginScreen;
