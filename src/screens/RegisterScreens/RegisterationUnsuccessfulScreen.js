import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';

import { Text } from '~components/common';
import { StyleTypes } from '~constants';
import { GlobalStyles } from '~styles';

class RegisterationUnsuccessfulScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { availableAttempts } = navigation.state.params;

    if (availableAttempts) {
      return {
        headerTitle: <Text type={StyleTypes.headerTitleDark}>REGISTERATION</Text>,
        headerRight: <View>{null}</View>,
      };
    } else {
      return {
        headerTitle: <Text type={StyleTypes.headerTitleDark}>REGISTERATION</Text>,
        headerLeft: <View>{null}</View>,
        headerRight: <View>{null}</View>,
      };
    }
  };

  handleButtonPress = () => {
    this.props.navigation.navigate('AppNavigator');
  };

  render() {
    console.log('navigation2:', this.props.navigation);
    const { availableAttempts } = this.props.navigation.state.params;
    return (
      <Container>
        <Content contentContainerStyle={styles.contentStyle} showsVerticalScrollIndicator={false}>
          <View style={[styles.textViewStyle, GlobalStyles.lgGapStyle]}>
            <Text style={[styles.headingStyle, GlobalStyles.lgGapStyle]} type={StyleTypes.h1}>
              REGISTERATION UNSUCCESSFUL
            </Text>

            {availableAttempts ? (
              <Text style={styles.textStyle} type={StyleTypes.p}>
                Unfortunately our system did not recognise or understand your registration, please
                check the details and retry. You have {availableAttempts} attempts remaining. If
                this is a mistake, please contact support and attach purchase details at
                support@smoothstar.com.au.{'\n\n'}You will receive a response within 5 working days.
                This service is only supported in English.
              </Text>
            ) : (
              <Text style={styles.textStyle} type={StyleTypes.p}>
                Unfortunately our system did not recognise or understand your registration. If this
                is a mistake, please contact support and attach purchase details at
                support@smoothstar.com.au.{'\n\n'}You will receive a response within 5 working days.
                This service is only supported in English.
              </Text>
            )}
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  contentStyle: {
    alignItems: 'center',
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

export default RegisterationUnsuccessfulScreen;
