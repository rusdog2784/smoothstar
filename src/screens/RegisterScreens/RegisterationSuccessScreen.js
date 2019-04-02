import React, { Component } from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';

import { Text, Button } from '~components/common';
import { StyleTypes, Assets } from '~constants';
import { GlobalStyles, Colors } from '~styles';

const { height } = Dimensions.get('window');

class RegisterationSuccessScreen extends Component {
  static navigationOptions = {
    headerTitle: <Text type={StyleTypes.headerTitleDark}>REGISTERATION</Text>,
    headerLeft: <View>{null}</View>,
    headerRight: <View>{null}</View>,
  };

  handleButtonPress = () => {
    this.props.navigation.navigate('AppNavigator');
  };

  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.contentStyle} showsVerticalScrollIndicator={false}>
          <View style={[styles.textViewStyle, GlobalStyles.lgGapStyle]}>
            <Text style={[styles.headingStyle, GlobalStyles.lgGapStyle]} type={StyleTypes.h1}>
              REGISTERATION SUCCESSFUL
            </Text>

            <Text style={styles.textStyle} type={StyleTypes.p}>
              Fantastic. Your SmoothStar has instantly been registered.{'\n\n'}
              We have sent you an email confirmation. If you do not receive it within 6hrs, please
              check your spam. If you haven’t received it after 24 hours, please contact
              support@smoothstar,com.au
            </Text>
          </View>

          <Image
            style={[styles.imageStyle, GlobalStyles.mdGapStyle]}
            resizeMode="cover"
            source={Assets.Images.surfSkate}
          />

          <Button small color={Colors.button1Color} onPress={this.handleButtonPress}>
            Let's Go!
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  contentStyle: {
    alignItems: 'center',
  },
  imageStyle: {
    height: height / 5,
    width: '100%',
    backgroundColor: Colors.imageBackgroundColor,
  },
  textViewStyle: {
    marginHorizontal: 50,
    marginTop: 170,
    alignItems: 'center',
  },
  textStyle: {
    textAlign: 'center',
  },
  headingStyle: {
    marginBottom: 40,
    textAlign: 'center',
  },
});

export default RegisterationSuccessScreen;
