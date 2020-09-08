import React, { Component } from 'react';
import { View, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';
import { SplashScreen } from 'expo';

import {} from '~redux/actions';
import { Text, CustomIcon, Button } from '~components/common';
import {} from '~components';
import { Assets, StyleTypes } from '~constants';
import { GlobalStyles, Colors } from '~styles';
import VideoList from './VideoList';

const { height, width } = Dimensions.get('window');

class VideosCategoryScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <Text type={StyleTypes.headerTitleDark}>Surf Training Series</Text>,
    headerRight: <View>{null}</View>,
    headerLeft: (
      <CustomIcon
        shadow
        button
        onPress={navigation.toggleDrawer}
        style={GlobalStyles.headerLeftStyle}
        name="menu"
        type="MaterialIcons"
        color={Colors.iconColorLight}
      />
    ),
  });

  state = {
    popup: true,
  };

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const {
      textStyle,
      imageStyle,
      buttonStyle,
      parentContainerStyle,
      popupContainerStyle,
    } = styles;

    return (
      <Container style={parentContainerStyle}>
        {this.state.popup ? (
          <View style={popupContainerStyle}>
            <Image style={imageStyle} resizeMode="cover" source={Assets.Images.testImg2} />

            <Text type={StyleTypes.h3} style={textStyle}>
              The SmoothStar Mini Grom training video series are designed to assist parents teach
              their children on the basics of surfing for 3 - 8 year olds. The videos are
              contributed by one of the most respected and experienced surf coaches Gee Cormack.{' '}
            </Text>

            <Button
              textStyle={{ textAlign: 'center', flex: 0 }}
              onPress={() => this.setState({ popup: false })}
              style={buttonStyle}
              color={Colors.button1Color}
              icon="cross"
              iconType="Entypo">
              DISMISS
            </Button>
          </View>
        ) : null}

        <Text light type={StyleTypes.title} style={{ marginVertical: 20, alignSelf: 'center' }}>
          Training Videos
        </Text>

        <VideoList />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  parentContainerStyle: {
    backgroundColor: Colors.backgroundColorMid,
    flex: 1,
  },
  imageStyle: {
    height: 350,
    width: '100%',
    backgroundColor: Colors.imageBackgroundColor,
  },
  textStyle: {
    textAlign: 'center',
    marginVertical: 10,
  },
  buttonStyle: {
    alignSelf: 'center',
    width: 90,
    borderRadius: 50,
    height: 'auto',
    marginBottom: 20,
    paddingVertical: 5,
    paddingHorizontal: 0,
    justifyContent: 'center',
  },
  popupContainerStyle: {
    backgroundColor: '#ffffff',
  },
});

const mapStateToProps = state => {
  // const {} = state.app;

  return {};
};

export default connect(
  mapStateToProps,
  {}
)(VideosCategoryScreen);
