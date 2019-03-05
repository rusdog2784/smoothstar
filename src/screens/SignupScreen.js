import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';

import { Text, Button, InputBox, CheckBox } from '~components/common';
import { Assets, StaticData, StyleTypes } from '~constants';
import { GlobalStyles, Colors } from '~styles';

class SignupScreen extends Component {
  render() {
    const { screenContainerStyle, underlineTextStyle } = GlobalStyles;
    const {
      contentStyle,
      logoStyle,
      introTextStyle,
      lgGapStyle,
      mdGapStyle,
      smGapStyle,
      lineViewStyle,
      lineStyle,
      checkBoxViewStyle,
    } = styles;

    return (
      <Container style={screenContainerStyle}>
        <Content contentContainerStyle={contentStyle}>
          <Image source={Assets.Images.logoDark} style={[mdGapStyle, logoStyle]} />

          <Text type={StyleTypes.h1} style={[lgGapStyle, introTextStyle]}>
            YOUR ACCOUNT{'\n'}FOR SMOOTHSTAR
          </Text>

          <Text type={StyleTypes.p} style={[mdGapStyle, introTextStyle]}>
            {StaticData.SignupScreenIntroText}
          </Text>

          <Button
            onPress={() => {}}
            style={smGapStyle}
            color={Colors.buttonGoogleColor}
            icon="google-"
            iconType="Entypo">
            REGISTER WITH GOOGLE
          </Button>

          <Button
            onPress={() => {}}
            style={lgGapStyle}
            color={Colors.buttonFBColor}
            icon="facebook"
            iconType="FontAwesome">
            REGISTER WITH GOOGLE
          </Button>

          <View style={[lineViewStyle, lgGapStyle]}>
            <View style={lineStyle} />
            <Text
              style={{ backgroundColor: Colors.backgroundColor, textAlign: 'center', width: 50 }}>
              OR
            </Text>
          </View>

          <InputBox style={smGapStyle} placeholder="Email" keyboardType="email-address" />
          <InputBox style={smGapStyle} placeholder="Password" secureTextEntry />
          <InputBox style={smGapStyle} placeholder="First Name" />
          <InputBox style={smGapStyle} placeholder="Second Name" />
          <InputBox style={smGapStyle} placeholder="dd/mm/yyyy" />
          <InputBox style={smGapStyle} placeholder="Sex" />
          <InputBox style={smGapStyle} placeholder="Country" />
          <InputBox style={lgGapStyle} placeholder="City" />

          <View style={[checkBoxViewStyle, mdGapStyle]}>
            <View>
              <CheckBox checked />
            </View>
            <View style={{ flex: 1 }}>
              <Text numberOfLines={2} type={StyleTypes.small} style={{ marginLeft: 20 }}>
                Signup for emails to surf training events and latest products
              </Text>
            </View>
          </View>

          <Text type={StyleTypes.small} style={[mdGapStyle, introTextStyle]}>
            By creating an account, you agree to SmoothStar's{' '}
            <Text onPress={() => {}} style={underlineTextStyle}>
              Privacy Policy
            </Text>{' '}
            and{' '}
            <Text onPress={() => {}} style={underlineTextStyle}>
              Terms of Use
            </Text>
          </Text>

          <Button onPress={() => {}} style={mdGapStyle}>
            CREATE ACCOUNT
          </Button>

          <Text type={StyleTypes.small} style={[mdGapStyle, introTextStyle]}>
            Already a member?{' '}
            <Text onPress={() => {}} style={underlineTextStyle}>
              Sign In
            </Text>
          </Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  contentStyle: {
    alignItems: 'center',
    paddingVertical: 35,
    marginHorizontal: 50,
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

export default SignupScreen;
