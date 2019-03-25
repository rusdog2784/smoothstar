import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';
import { NavigationEvents, NavigationActions } from 'react-navigation';
import _ from 'lodash';

import { creatSSRegisteration, unsubState } from '~redux/actions';
import { Text, Button, InputBox, NumberBullet, Switch } from '~components/common';
import { Assets, StaticData, StyleTypes, AppStates } from '~constants';
import { GlobalStyles, Colors } from '~styles';
import { _c } from '~utils';

class RegisterSmoothStarScreen extends Component {
  state = {
    websiteOrderNum: '',
    address: 'Test Address',
    postCode: '54000',
    region: 'Punjab',
    birthdate: '2019-03-25',
    productModel: 'TEST MODEL',
    purchaseDate: '2019-03-21',
    shopName: 'WICKS SURF',
    stockist: true,
  };

  componentDidUpdate = () => {
    const { isRegistered, loading, navigation } = this.props;

    if (isRegistered && !loading) {
      navigation.navigate('NewsListScreen');
    }
  };

  onScreenBlur = () => {
    this.props.unsubState(AppStates.REGISTER_SS);
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
    const { productModel, purchaseDate, shopName } = this.state;

    if (_.isEmpty(productModel.trim())) {
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
    } = this.state;
    const { user } = this.props;

    const registeration = {
      active: true,
      registrationSubmitDate: _c.formatDateServer(Date.now()),
      userId: user.username,
      videoInfoReviewed: true,
      registrationAttempts: +1,
      privacyPolicyReviewed: true,
      extendedPolicyReviewed: true,
      termsOfUseReviewed: true,
    };

    if (stockist) {
      if (!this.checkStockist) return;

      registeration.type = 'S';
      registeration.address = address;
      registeration.postCode = postCode;
      registeration.region = region;
      registeration.dateOfBirth = _c.formatDateServer(birthdate);
      registeration.smoothstarModel = productModel;
      registeration.purchaseDate = _c.formatDateServer(purchaseDate);
      registeration.shopName = shopName;
    } else {
      if (!this.checkWebsiteOrderNum) return;

      registeration.type = 'W';
      registeration.orderNum = websiteOrderNum;
    }

    this.props.creatSSRegisteration({ stockist, registeration });
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
        <NavigationEvents onWillBlur={this.onScreenBlur} />
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

            <View style={{ marginLeft: 10, flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
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
              Submit the registeration form below
            </Text>
          </View>

          <View style={[blackBoxStyle, mdGapStyle]}>
            <Text light type={StyleTypes.p}>
              {StaticData.RegisterSSScreenInfoText}
            </Text>
          </View>

          <View style={[lineStyle, lgGapStyle]} />

          <Text type={StyleTypes.h1} style={[lgGapStyle, introTextStyle]}>
            REGISTERATION FORM
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
            onPress={() => {}}
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
          <InputBox
            onChangeText={text => this.formTextChange(text, 'birthdate')}
            value={this.state.birthdate}
            style={smGapStyle}
            placeholder="DOB Date"
            disable={!this.state.stockist}
          />
          <InputBox
            onChangeText={text => this.formTextChange(text, 'productModel')}
            value={this.state.productModel}
            style={smGapStyle}
            placeholder="Product/Model"
            disable={!this.state.stockist}
          />
          <InputBox
            onChangeText={text => this.formTextChange(text, 'purchaseDate')}
            value={this.state.purchaseDate}
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
              { justifyContent: 'center', flexWrap: 'wrap', flexDirection: 'row' },
            ]}>
            <Text type={StyleTypes.small}>
              By submitting extended warranty, you agree to SmoothStar’s{' '}
            </Text>
            <TouchableOpacity>
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
            <TouchableOpacity>
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
  const { loading } = state.app;

  return {
    loading,
    user,
    isRegistered: state.app[AppStates.REGISTER_SS],
  };
};

export default connect(
  mapStateToProps,
  { creatSSRegisteration, unsubState }
)(RegisterSmoothStarScreen);
