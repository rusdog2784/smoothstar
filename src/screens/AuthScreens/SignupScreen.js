import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';

import { authSignUp, authLoginFacebook, authLoginGoogle } from '~redux/actions';
import { Text, Button, InputBox, CheckBox, DatePicker, Dropdown } from '~components/common';
import { Assets, StaticData, StyleTypes, AuthActionTypes } from '~constants';
import { GlobalStyles, Colors } from '~styles';
import countries from '~constants/countries.json';

const { SIGNED_UP, SIGNED_IN } = AuthActionTypes;

const countriesList = Object.keys(countries).map(name => ({ label: name, value: name }));
const countriesDialCodesList = Object.keys(countries).map(name => ({
  label: `${countries[name]} - ${name}`,
  value: countries[name],
  key: countries[name],
}));

class SignupScreen extends Component {
  state = {
    email: 'tester2@test.com',
    password: 'Tester@1234',
    phone_code: '+92',
    phone_number: '3331431852',
    first_name: 'Tester',
    last_name: 'Testing',
    birthdate: '2019-04-13',
    gender: 'M',
    country: 'Pakistan',
    city: 'Lahore',
    emailSub: true,
  };

  componentDidUpdate = () => {
    const { navigation, authAction, loading, authActionData } = this.props;

    if (authAction === SIGNED_UP && !loading) {
      navigation.navigate('AuthVerificationScreen', {
        username: authActionData,
        type: 'ConfirmSignUp',
      });
    } else if (authAction === SIGNED_IN && !loading) {
      navigation.navigate('AuthVerificationScreen', {
        type: 'ConfirmSignIn',
        user: authActionData,
      });
    }
  };

  formTextChange = (text, type) => {
    this.setState({ [type]: text });
  };

  isFormOK = () => {
    let formOK = true;
    Object.keys(this.state).some(key => {
      if (key !== 'emailSub' && this.state[key].trim() === '') {
        alert(`${key} can not be empty`);
        formOK = false;
        return true;
      }
    });
    return formOK;
  };

  handleSignUp = () => {
    if (!this.isFormOK()) return;

    const user = { ...this.state };
    user.address = `${user.city}-${user.country}`;
    user.locale = 'en_US';
    user.given_name = user.first_name;
    user.family_name = user.last_name;
    user.phone_number = user.phone_code + user.phone_number;
    delete user.country;
    delete user.city;
    delete user.first_name;
    delete user.last_name;
    delete user.phone_code;

    this.props.authSignUp({ user, verifyEmail: this.state.emailSub });
  };

  render() {
    const {
      screenContainerStyle,
      underlineTextStyle,
      lgGapStyle,
      mdGapStyle,
      smGapStyle,
    } = GlobalStyles;
    const {
      contentStyle,
      logoStyle,
      introTextStyle,
      lineViewStyle,
      lineStyle,
      checkBoxViewStyle,
    } = styles;

    return (
      <Container style={screenContainerStyle}>
        <Content contentContainerStyle={contentStyle} showsVerticalScrollIndicator={false}>
          <Image source={Assets.Images.logoDark} style={[mdGapStyle, logoStyle]} />

          <Text dark type={StyleTypes.h1} style={[lgGapStyle, introTextStyle]}>
            YOUR ACCOUNT{'\n'}FOR SMOOTHSTAR
          </Text>

          <Text type={StyleTypes.p} style={[mdGapStyle, introTextStyle]}>
            {StaticData.SignupScreenIntroText}
          </Text>

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

          <View style={[lineViewStyle, lgGapStyle]}>
            <View style={lineStyle} />
            <Text
              style={{ backgroundColor: Colors.backgroundColor, textAlign: 'center', width: 50 }}>
              OR
            </Text>
          </View>

          <InputBox
            onChangeText={text => this.formTextChange(text, 'email')}
            value={this.state.email}
            style={smGapStyle}
            placeholder="Email"
            keyboardType="email-address"
          />
          <InputBox
            onChangeText={text => this.formTextChange(text, 'password')}
            value={this.state.password}
            style={smGapStyle}
            placeholder="Password"
            secureTextEntry
          />
          <View style={{ flexDirection: 'row' }}>
            <Dropdown
              style={[smGapStyle, { flex: 0.2 }]}
              selectedValue={this.state.phone_code}
              placeholderLabel="Code"
              onValueChange={value => this.formTextChange(value, 'phone_code')}
              items={countriesDialCodesList}
            />
            <InputBox
              onChangeText={text => this.formTextChange(text, 'phone_number')}
              value={this.state.phone_number}
              style={[smGapStyle, { flex: 0.8, marginLeft: 5 }]}
              placeholder="Phone"
              iconType="MaterialIcons"
              keyboardType="number-pad"
              iconRight="info"
              tooltipIconText="Smoothstar requires phone verification. We will send you a code via SMS. Carrier rates may apply."
              tooltipHeight={90}
            />
          </View>
          <InputBox
            onChangeText={text => this.formTextChange(text, 'first_name')}
            value={this.state.first_name}
            style={smGapStyle}
            placeholder="First Name"
          />
          <InputBox
            onChangeText={text => this.formTextChange(text, 'last_name')}
            value={this.state.last_name}
            style={smGapStyle}
            placeholder="Last Name"
          />
          <DatePicker
            onDateChange={text => this.formTextChange(text, 'birthdate')}
            date={this.state.birthdate}
            style={smGapStyle}
            placeholder="Birthdate"
          />
          <Dropdown
            style={smGapStyle}
            selectedValue={this.state.gender}
            onValueChange={value => this.formTextChange(value, 'gender')}
            placeholderLabel="Select Gender"
            items={[{ label: 'Male', value: 'M' }, { label: 'Female', value: 'F' }]}
          />
          <Dropdown
            style={smGapStyle}
            selectedValue={this.state.country}
            placeholderLabel="Select Country"
            onValueChange={value => this.formTextChange(value, 'country')}
            items={countriesList}
          />
          <InputBox
            onChangeText={text => this.formTextChange(text, 'city')}
            value={this.state.city}
            style={lgGapStyle}
            placeholder="City"
          />

          <View style={[checkBoxViewStyle, mdGapStyle]}>
            <CheckBox
              checked={this.state.emailSub}
              onPress={() => this.setState({ emailSub: !this.state.emailSub })}
            />
            <Text numberOfLines={2} type={StyleTypes.small} style={{ marginLeft: 10, flex: 1 }}>
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

          <Button onPress={this.handleSignUp} style={mdGapStyle}>
            CREATE ACCOUNT
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
)(SignupScreen);
