import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Content, Thumbnail } from 'native-base';
import NavigationService from '~utils/NavigationService';
import { connect } from 'react-redux';

import { Text, CustomIcon } from '~components/common';
import { GlobalStyles, Colors } from '~styles';
import { Assets, StyleTypes } from '~constants';

const { drawerContainerStyle } = GlobalStyles;
const { p, h2 } = StyleTypes;

const SelectableItem = ({ children, iconName, iconType, customIcon, onPress }) => {
  return (
    <TouchableOpacity style={styles.selectableItemStyle} onPress={onPress}>
      <View style={{ width: 23, alignItems: 'center' }}>
        <CustomIcon custom={customIcon} size={20} name={iconName} type={iconType} light />
      </View>
      <Text type={p} style={{ fontWeight: '200', marginLeft: 5 }} light>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

class Drawer extends Component {
  render() {
    const { logoStyle, logoViewStyle, contentViewStyle, bottomViewStyle, thumbnailStyle } = styles;

    const { user } = this.props;

    let name;
    let address;

    if (user) {
      name = `${user.given_name} ${user.family_name}`;
      address = user.address || null;
    }

    return (
      <Container style={drawerContainerStyle}>
        <View style={logoViewStyle}>
          <Image source={Assets.Images.logoLight} style={[logoStyle]} />
        </View>
        <View style={contentViewStyle}>
          <Content showsVerticalScrollIndicator={false}>
            <SelectableItem onPress={() => NavigationService.navigate('HomeStack')} iconName="home">
              Home
            </SelectableItem>
            <SelectableItem iconType="MaterialIcons" iconName="info">
              Getting Started
            </SelectableItem>
            <SelectableItem iconType="MaterialIcons" iconName="play-circle-outline">
              Surf Training Series
            </SelectableItem>
            <SelectableItem
              iconName="ios-pin"
              onPress={() => NavigationService.navigate('EventsStack')}>
              Events
            </SelectableItem>
            <SelectableItem
              iconType="MaterialCommunityIcons"
              iconName="newspaper"
              onPress={() => NavigationService.navigate('NewsStack')}>
              News
            </SelectableItem>
            <SelectableItem iconType="FontAwesome" iconName="user-circle">
              Coaches
            </SelectableItem>
            <SelectableItem
              iconName="ios-checkmark-circle"
              onPress={() => NavigationService.navigate('RegistrationStack')}>
              Register
            </SelectableItem>
            <SelectableItem
              iconName="md-settings"
              onPress={() => NavigationService.navigate('SettingsStack')}>
              Settings
            </SelectableItem>
            <SelectableItem iconType="MaterialIcons" iconName="sms">
              Messages
            </SelectableItem>
            <SelectableItem
              iconType="SimpleLineIcons"
              iconName="question"
              onPress={() => NavigationService.navigate('FAQStack')}>
              FAQ
            </SelectableItem>
            <SelectableItem iconType="MaterialIcons" iconName="shopping-cart">
              Shop
            </SelectableItem>
          </Content>
        </View>
        <View style={bottomViewStyle}>
          <Thumbnail style={thumbnailStyle} source={Assets.Images.testImg3} />
          <View style={{ marginLeft: 10 }}>
            {name ? (
              <Text light type={h2}>
                {name}
              </Text>
            ) : null}
            {address ? <Text type={p}>{address}</Text> : null}
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  logoStyle: {
    width: 50,
    height: 50,
  },
  logoViewStyle: {
    marginTop: 20,
    marginLeft: 20,
  },
  contentViewStyle: {
    flex: 1,
    marginTop: 20,
    borderColor: 'white',
    paddingLeft: 40,
    paddingTop: 10,
  },
  bottomViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 40,
    backgroundColor: Colors.drawerBottomColor,
    height: 100,
  },
  selectableItemStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  thumbnailStyle: {
    borderWidth: 3,
    borderColor: '#fff',
  },
});

const mapStateToProps = state => {
  const { user } = state.auth;

  return {
    user,
  };
};
export default connect(
  mapStateToProps,
  null
)(Drawer);
