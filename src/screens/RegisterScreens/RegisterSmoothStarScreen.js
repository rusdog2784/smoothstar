import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SplashScreen } from 'expo';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Container, Content, ActionSheet } from 'native-base';
import { connect } from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation';
import _ from 'lodash';

import { createSSRegistration, unsubState } from '~redux/actions';
import { Text, Button, InputBox, NumberBullet, Switch, DatePicker } from '~components/common';
import { Assets, StaticData, StyleTypes, AppStates, AppConstants } from '~constants';
import { GlobalStyles, Colors } from '~styles';
import { _c } from '~utils';

class RegisterSmoothStarScreen extends Component {
  state = {
    websiteOrderNum: '',
    address: '',
    postCode: '',
    region: '',
    birthdate: '',
    productModel: '',
    purchaseDate: '',
    shopName: '',
    stockist: true,
    image: null,
  };

  componentDidMount = () => {
    SplashScreen.hide();
  };

  componentDidUpdate = () => {
    const {
      isRegistered,
      loading,
      navigation,
      registrationStatus,
      registrationAttempts: attemps,
    } = this.props;

    if (isRegistered && !loading) {
      const availableAttempts = AppConstants.RegitrationAttemptsAllowed - attemps;

      if (registrationStatus) {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({
              routeName: 'RegistrationSuccessScreen',
              params: {},
            }),
          ],
        });
        navigation.dispatch(resetAction);
      } else if (availableAttempts) {
        navigation.navigate('RegistrationUnsuccessfulScreen', {
          availableAttempts,
        });
      } else {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({
              routeName: 'RegistrationUnsuccessfulScreen',
              params: { availableAttempts },
            }),
          ],
        });
        navigation.dispatch(resetAction);
      }

      this.props.unsubState(AppStates.REGISTER_SS);
    }
  };

  pickImage = async () => {
    const { statusGet } = await Permissions.getAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
    if (statusGet !== 'granted') {
      console.log('Hey! You heve not enabled selected permissions');
      const { statusAsk } = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
      if (statusAsk === 'granted') {
        console.log('Permissions Granted');
      } else {
        console.log('Permissions Not Granted');
      }
    }

    ActionSheet.show(
      {
        options: ['Camera', 'Gallery'],
        title: 'Select image source',
      },
      async buttonIndex => {
        if (buttonIndex === 1) {
          let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
          });

          if (!result.cancelled) {
            const { uri, type } = result;
            const [, , , extension] = /([^.]+)(\.(\w+))?$/.exec(uri);
            this.setState({ image: { uri, extension, type } });
          }
        } else if (buttonIndex === 0) {
          let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
          });

          if (!result.cancelled) {
            const { uri, type } = result;
            const [, , , extension] = /([^.]+)(\.(\w+))?$/.exec(uri);
            this.setState({ image: { uri, extension, type } });
          }
        }
      }
    );
  };

  formTextChange = (text, type) => {
    this.setState({ [type]: text });
  };

  switchToggle = params => this.setState({ stockist: !this.state.stockist });

  checkWebsiteOrderNum = () => {
    if (_.isEmpty(this.state.websiteOrderNum.trim())) {
      console.log('Website Order# model can not be empty');
      return false;
    }
    return true;
  };

  checkStockist = () => {
    const { productModel, purchaseDate, shopName, image } = this.state;

    if (!image) {
      console.log('Image is required');
      return false;
    } else if (_.isEmpty(productModel.trim())) {
      console.log('Product model can not be empty');
      return false;
    } else if (_.isEmpty(purchaseDate.trim())) {
      console.log('Purchase date can not be empty');
      return false;
    } else if (_.isEmpty(shopName.trim())) {
      console.log('Shop name can not be empty');
      return false;
    }

    return true;
  };

  handleSubmitWarranty = () => {
    const {
      websiteOrderNum,
      address,
      postCode,
      region,
      birthdate,
      productModel,
      purchaseDate,
      shopName,
      stockist,
      image,
    } = this.state;
    const { user, registrationAttempts } = this.props;

    let registration = {
      active: true,
      registrationSubmitDate: _c.formatDateServer(Date.now()),
      userId: user.username,
      videoInfoReviewed: true,
      registrationAttempts: registrationAttempts + 1,
      privacyPolicyReviewed: true,
      extendedPolicyReviewed: true,
      termsOfUseReviewed: true,
    };

    if (stockist) {
      if (!this.checkStockist()) return;

      registration = {
        ...registration,
        ...(address && { address }),
        ...(postCode && { postCode }),
        ...(region && { region }),
        ...(birthdate && { dateOfBirth: _c.formatDateServer(birthdate) }),
        type: 'S',
        smoothstarModel: productModel,
        purchaseDate: _c.formatDateServer(purchaseDate),
        shopName,
        image,
      };
    } else {
      if (!this.checkWebsiteOrderNum()) return;

      registration.type = 'W';
      registration.orderNum = websiteOrderNum;
    }

    this.props.createSSRegistration({ stockist, registration });
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
      lineStyle,
      bulletsViewStyle,
      blackBoxStyle,
      switchViewStyle,
    } = styles;

    return (
      <Container style={screenContainerStyle}>
        <Content contentContainerStyle={contentStyle} showsVerticalScrollIndicator={false}>
          <Image source={Assets.Images.logoDark} style={[mdGapStyle, logoStyle]} />

          <Text dark type={StyleTypes.h1} style={[lgGapStyle, introTextStyle]}>
            REGISTER YOUR{'\n'}SMOOTHSTAR
          </Text>

          <Text type={StyleTypes.p} style={[mdGapStyle, introTextStyle]}>
            {StaticData.RegisterSSScreenIntroText}
          </Text>

          <View style={[bulletsViewStyle, smGapStyle]}>
            <NumberBullet number={1} />
            <Text numberOfLines={1} type={StyleTypes.h2} style={{ marginLeft: 10, flex: 1 }}>
              Register then Login to the app
            </Text>
          </View>

          <View style={[bulletsViewStyle, smGapStyle]}>
            <NumberBullet number={2} />

            <View
              style={{
                marginLeft: 10,
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>
              <Text numberOfLines={1} type={StyleTypes.h2}>
                Read & watch maintainence info{' '}
              </Text>
              <TouchableOpacity>
                <Text type={StyleTypes.h2} style={underlineTextStyle}>
                  here
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[bulletsViewStyle, mdGapStyle]}>
            <NumberBullet number={3} />
            <Text numberOfLines={1} type={StyleTypes.h2} style={{ marginLeft: 10, flex: 1 }}>
              Submit the registration form below
            </Text>
          </View>

          <View style={[blackBoxStyle, mdGapStyle]}>
            <Text light type={StyleTypes.p}>
              {StaticData.RegisterSSScreenInfoText}
            </Text>
          </View>

          <View style={[lineStyle, lgGapStyle]} />

          <Text type={StyleTypes.h1} style={[lgGapStyle, introTextStyle]}>
            REGISTRATION FORM
          </Text>

          <View style={[switchViewStyle, smGapStyle]}>
            <Text numberOfLines={1} type={StyleTypes.p}>
              Purchase from SmoothStar stockist?
            </Text>
            <Switch onValueChange={this.switchToggle} value={this.state.stockist} />
          </View>

          <Text type={StyleTypes.p} style={[smGapStyle, { width: '100%' }]}>
            OR
          </Text>

          <View style={[switchViewStyle, lgGapStyle]}>
            <Text numberOfLines={1} type={StyleTypes.p}>
              Purchase from SmoothStar website?
            </Text>
            <Switch onValueChange={this.switchToggle} value={!this.state.stockist} />
          </View>

          <InputBox
            onChangeText={text => this.formTextChange(text, 'websiteOrderNum')}
            value={this.state.websiteOrderNum}
            style={lgGapStyle}
            placeholder="Website Order#"
            iconType="MaterialIcons"
            iconRight="info"
            tooltipIconText="Order number provided on online purchase"
            disable={this.state.stockist}
          />

          <View
            style={[
              lineStyle,
              lgGapStyle,
              {
                borderStyle: 'dashed',
                borderRadius: 5,
              },
            ]}
          />

          <Button
            disable={!this.state.stockist}
            onPress={this.pickImage}
            style={smGapStyle}
            icon="upload"
            iconType="AntDesign">
            UPLOAD RECEIPT
          </Button>

          <InputBox
            onChangeText={text => this.formTextChange(text, 'address')}
            value={this.state.address}
            style={smGapStyle}
            placeholder="Your Address"
            disable={!this.state.stockist}
          />
          <InputBox
            onChangeText={text => this.formTextChange(text, 'postCode')}
            value={this.state.postCode}
            style={smGapStyle}
            placeholder="Post Code"
            disable={!this.state.stockist}
          />
          <InputBox
            onChangeText={text => this.formTextChange(text, 'region')}
            value={this.state.region}
            style={smGapStyle}
            placeholder="Region"
            disable={!this.state.stockist}
          />
          <DatePicker
            onDateChange={text => this.formTextChange(text, 'birthdate')}
            date={this.state.birthdate}
            style={smGapStyle}
            placeholder="DOB"
            disable={!this.state.stockist}
          />
          <InputBox
            onChangeText={text => this.formTextChange(text, 'productModel')}
            value={this.state.productModel}
            style={smGapStyle}
            placeholder="Product/Model"
            disable={!this.state.stockist}
          />
          <DatePicker
            onDateChange={text => this.formTextChange(text, 'purchaseDate')}
            date={this.state.purchaseDate}
            style={smGapStyle}
            placeholder="Purchase Date"
            disable={!this.state.stockist}
          />
          <InputBox
            onChangeText={text => this.formTextChange(text, 'shopName')}
            value={this.state.shopName}
            style={lgGapStyle}
            placeholder="Shop Name"
            disable={!this.state.stockist}
          />

          <View
            style={[
              mdGapStyle,
              {
                justifyContent: 'center',
                flexWrap: 'wrap',
                flexDirection: 'row',
              },
            ]}>
            <Text type={StyleTypes.small}>
              By submitting extended warranty, you agree to SmoothStar’s{' '}
            </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('PrivacyPolicyScreen')}>
              <Text type={StyleTypes.small} style={underlineTextStyle}>
                Privacy Policy
              </Text>
            </TouchableOpacity>
            <Text type={StyleTypes.small}>, </Text>
            <TouchableOpacity>
              <Text type={StyleTypes.small} style={underlineTextStyle}>
                Extended Warranty Policy
              </Text>
            </TouchableOpacity>
            <Text type={StyleTypes.small}> and </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('TermsScreen')}>
              <Text type={StyleTypes.small} style={underlineTextStyle}>
                Terms of Use
              </Text>
            </TouchableOpacity>
          </View>

          <Button onPress={this.handleSubmitWarranty} style={mdGapStyle}>
            SUBMIT WARRANTY
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
  logoStyle: {
    width: 50,
    height: 50,
  },
  introTextStyle: {
    textAlign: 'center',
  },
  blackBoxStyle: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#000',
    backgroundColor: '#707070',
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: Colors.primaryTextColor,
    width: '40%',
  },
  bulletsViewStyle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
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
  const { loading, registrationAttempts, registrationStatus } = state.app;

  // console.log('IS_REGISTERED:', state.app[AppStates.REGISTER_SS]);

  return {
    loading,
    user,
    isRegistered: state.app[AppStates.REGISTER_SS],
    registrationAttempts,
    registrationStatus,
  };
};

export default connect(
  mapStateToProps,
  { createSSRegistration, unsubState }
)(RegisterSmoothStarScreen);
