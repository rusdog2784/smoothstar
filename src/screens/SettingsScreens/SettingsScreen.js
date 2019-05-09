import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Content, Thumbnail } from 'native-base';
import { connect } from 'react-redux';
import { SplashScreen } from 'expo';

import {} from '~redux/actions';
import { Text, Switch, Button, InputBox, DatePicker, Dropdown } from '~components/common';
import { Assets, StyleTypes } from '~constants';
import { GlobalStyles } from '~styles';
import countries from '~constants/countries.json';

const countriesList = Object.keys(countries).map(name => ({ label: name, value: name }));
const countriesDialCodesList = Object.keys(countries).map(name => ({
  label: `${countries[name]} - ${name}`,
  value: countries[name],
  key: countries[name],
}));

class SettingsScreen extends Component {
  state = {
    alteration: false,
    videoNotify: true,
    eventNotify: true,
    productNotify: true,
    msgNotify: true,
    given_name: this.props.user.given_name,
    family_name: this.props.user.family_name,
    email: this.props.user.email,
    phone_number: this.props.user.phone_number,
    birthdate: this.props.user.birthdate,
    gender: this.props.user.gender,
    country: this.props.user.address && this.props.user.address.split('-')[1],
    city: this.props.user.address && this.props.user.address.split('-')[0],
  };

  componentDidMount() {
    SplashScreen.hide();
  }

  toggleEditMode = () => this.setState({ alteration: !this.state.alteration });

  toggleVideoNotify = () => this.setState({ videoNotify: !this.state.videoNotify });
  toggleEventNotify = () => this.setState({ eventNotify: !this.state.eventNotify });
  toggleProductNotify = () => this.setState({ productNotify: !this.state.productNotify });
  toggleMsgNotify = () => this.setState({ msgNotify: !this.state.msgNotify });

  render() {
    const { screenContainerStyle, lgGapStyle, mdGapStyle, smGapStyle, xlgGapStyle } = GlobalStyles;
    const { contentStyle, logoStyle, introTextStyle, thumbnailStyle, switchViewStyle } = styles;

    const {
      given_name,
      family_name,
      email,
      phone_number,
      country,
      city,
      birthdate,
      gender,
    } = this.props.user;

    const { alteration } = this.state;

    return (
      <Container style={screenContainerStyle}>
        <Content contentContainerStyle={contentStyle} showsVerticalScrollIndicator={false}>
          <Image source={Assets.Images.logoDark} style={[mdGapStyle, logoStyle]} />

          <Text dark type={StyleTypes.h1} style={[lgGapStyle, introTextStyle]}>
            APP SETTINGS
          </Text>

          <Thumbnail style={[smGapStyle, thumbnailStyle]} source={Assets.Images.testImg} />

          <TouchableOpacity onPress={this.toggleEditMode}>
            <Text type="h3" grey style={[lgGapStyle, { alignSelf: 'center' }]}>
              {alteration ? 'CANCEL' : 'EDIT'}
            </Text>
          </TouchableOpacity>

          <View style={[lgGapStyle]}>
            <Text type="p" grey style={[smGapStyle]}>
              FIRST NAME
            </Text>
            {alteration ? (
              <InputBox
                // onChangeText={text => this.formTextChange(text, 'first_name')}
                value={this.state.given_name}
                style={smGapStyle}
                placeholder="First Name"
              />
            ) : (
              <Text type="h3" dark>
                {given_name}
              </Text>
            )}
          </View>

          <View style={[lgGapStyle]}>
            <Text type="p" grey style={[smGapStyle]}>
              LAST NAME
            </Text>
            {alteration ? (
              <InputBox
                // onChangeText={text => this.formTextChange(text, 'first_name')}
                value={this.state.family_name}
                style={smGapStyle}
                placeholder="Last Name"
              />
            ) : (
              <Text type="h3" dark>
                {family_name}
              </Text>
            )}
          </View>

          <View style={[lgGapStyle]}>
            <Text type="p" grey style={[smGapStyle]}>
              EMAIL
            </Text>
            <Text type="h3" dark>
              {email}
            </Text>
          </View>

          {birthdate ? (
            <View style={[lgGapStyle]}>
              <Text type="p" grey style={[smGapStyle]}>
                BIRTHDATE
              </Text>
              {alteration ? (
                <DatePicker
                  // onDateChange={text => this.formTextChange(text, 'birthdate')}
                  date={this.state.birthdate}
                  style={smGapStyle}
                  placeholder="Birthdate"
                />
              ) : (
                <Text type="h3" dark>
                  {birthdate}
                </Text>
              )}
            </View>
          ) : null}

          {gender ? (
            <View style={[lgGapStyle]}>
              <Text type="p" grey style={[smGapStyle]}>
                GENDER
              </Text>
              {alteration ? (
                <Dropdown
                  style={smGapStyle}
                  selectedValue={this.state.gender}
                  // onValueChange={value => this.formTextChange(value, 'gender')}
                  placeholderLabel="Select Gender"
                  items={[{ label: 'Male', value: 'M' }, { label: 'Female', value: 'F' }]}
                />
              ) : (
                <Text type="h3" dark>
                  {gender === 'M' ? 'Male' : 'Female'}
                </Text>
              )}
            </View>
          ) : null}

          {phone_number ? (
            <View style={[lgGapStyle]}>
              <Text type="p" grey style={[smGapStyle]}>
                PHONE NUMBER
              </Text>
              {alteration ? (
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
              ) : (
                <Text type="h3" dark>
                  {phone_number}
                </Text>
              )}
            </View>
          ) : null}

          {country ? (
            <View style={[lgGapStyle]}>
              <Text type="p" grey style={[smGapStyle]}>
                COUNTRY
              </Text>
              {alteration ? (
                <Dropdown
                  style={smGapStyle}
                  selectedValue={this.state.country}
                  placeholderLabel="Select Country"
                  // onValueChange={value => this.formTextChange(value, 'country')}
                  items={countriesList}
                />
              ) : (
                <Text type="h3" dark>
                  {country}
                </Text>
              )}
            </View>
          ) : null}

          {city ? (
            <View style={[xlgGapStyle]}>
              <Text type="p" grey style={[smGapStyle]}>
                CITY
              </Text>
              {alteration ? (
                <InputBox
                  // onChangeText={text => this.formTextChange(text, 'first_name')}
                  value={this.state.city}
                  style={smGapStyle}
                  placeholder="City"
                />
              ) : (
                <Text type="h3" dark>
                  {city}
                </Text>
              )}
            </View>
          ) : null}

          <View style={[switchViewStyle, lgGapStyle]}>
            <Text numberOfLines={1} grey type={StyleTypes.p}>
              NOTIFICATION NEW VIDEOS
            </Text>
            <Switch
              disabled={!alteration}
              onValueChange={this.toggleVideoNotify}
              value={this.state.videoNotify}
            />
          </View>

          <View style={[switchViewStyle, lgGapStyle]}>
            <Text numberOfLines={1} grey type={StyleTypes.p}>
              NOTIFICATION NEW PRODUCTS
            </Text>
            <Switch
              disabled={!alteration}
              onValueChange={this.toggleProductNotify}
              value={this.state.productNotify}
            />
          </View>

          <View style={[switchViewStyle, lgGapStyle]}>
            <Text numberOfLines={1} grey type={StyleTypes.p}>
              NOTIFICATION WITH EVENTS
            </Text>
            <Switch
              disabled={!alteration}
              onValueChange={this.toggleEventNotify}
              value={this.state.eventNotify}
            />
          </View>

          <View style={[switchViewStyle, xlgGapStyle]}>
            <Text numberOfLines={1} grey type={StyleTypes.p}>
              NOTIFICATION ON TEXT MESSAGE
            </Text>
            <Switch
              disabled={!alteration}
              onValueChange={this.toggleMsgNotify}
              value={this.state.msgNotify}
            />
          </View>

          {this.state.alteration ? (
            <Button onPress={this.handleSignUp} style={mdGapStyle}>
              UPDATE ACCOUNT
            </Button>
          ) : null}
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
  switchViewStyle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const mapStateToProps = state => {
  const { user } = state.auth;
  console.log('user', user);
  return {
    user,
  };
};

export default connect(
  mapStateToProps,
  {}
)(SettingsScreen);
