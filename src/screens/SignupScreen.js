import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
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
            <CheckBox checked />
            <Text numberOfLines={2} type={StyleTypes.small} style={{ marginLeft: 20, flex: 1 }}>
              Signup for emails to surf training events and latest products
            </Text>
          </View>

          <View
            style={[
              mdGapStyle,
              { justifyContent: 'center', flexWrap: 'wrap', flexDirection: 'row' },
            ]}>
            <Text type={StyleTypes.small}>By creating an account, you agree to SmoothStar's </Text>
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

          <Button onPress={() => {}} style={mdGapStyle}>
            CREATE ACCOUNT
          </Button>

          <View
            style={[
              mdGapStyle,
              { justifyContent: 'center', flexWrap: 'wrap', flexDirection: 'row' },
            ]}>
            <Text type={StyleTypes.small}>Already a member? </Text>
            <TouchableOpacity>
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
