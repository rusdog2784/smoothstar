import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';

import { authSignUp } from '~redux/actions';
import { Text, Button, InputBox, NumberBullet, Switch } from '~components/common';
import { Assets, StaticData, StyleTypes } from '~constants';
import { GlobalStyles, Colors } from '~styles';

class RegisterSmoothStarScreen extends Component {
  state = {
    websiteOrder: '',
    address: '',
    postCode: '',
    region: '',
    birthdate: '',
    productModel: '',
    purchaseDate: '',
    shopName: '',
    stockist: true,
  };

  formTextChange = (text, type) => {
    this.setState({ [type]: text });
  };

  switchToggle = params => this.setState({ stockist: !this.state.stockist });

  render() {
    const {
      screenContainerStyle,
      underlineTextStyle,
      // xlgGapStyle,
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
        <Content contentContainerStyle={contentStyle}>
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
            onChangeText={text => this.formTextChange(text, 'email')}
            value={this.state.websiteOrder}
            style={lgGapStyle}
            placeholder="Website Order#"
            iconType="MaterialIcons"
            iconRight="info"
            tooltipIconText="Order number provided on online purchase"
            disable={this.state.stockist}
          />

          <View style={[lineStyle, lgGapStyle]} />

          <Button
            disable={!this.state.stockist}
            onPress={() => {}}
            style={smGapStyle}
            icon="upload"
            iconType="AntDesign">
            UPLOAD RECEIPT
          </Button>

          <InputBox
            onChangeText={text => this.formTextChange(text, 'phone_number')}
            value={this.state.address}
            style={smGapStyle}
            placeholder="Your Address"
            disable={!this.state.stockist}
          />
          <InputBox
            onChangeText={text => this.formTextChange(text, 'first_name')}
            value={this.state.postCode}
            style={smGapStyle}
            placeholder="Post Code"
            disable={!this.state.stockist}
          />
          <InputBox
            onChangeText={text => this.formTextChange(text, 'last_name')}
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
            onChangeText={text => this.formTextChange(text, 'gender')}
            value={this.state.productModel}
            style={smGapStyle}
            placeholder="Product/Model"
            disable={!this.state.stockist}
          />
          <InputBox
            onChangeText={text => this.formTextChange(text, 'country')}
            value={this.state.purchaseDate}
            style={smGapStyle}
            placeholder="Purchase Date"
            disable={!this.state.stockist}
          />
          <InputBox
            onChangeText={text => this.formTextChange(text, 'city')}
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

          <Button style={mdGapStyle}>SUBMIT WARRANTY</Button>
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
    borderBottomWidth: 1,
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
  { authSignUp }
)(RegisterSmoothStarScreen);
