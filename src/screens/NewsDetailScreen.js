import React, { Component } from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';

import { Text } from '~components/common';
import { StyleTypes } from '~constants';
import { GlobalStyles, Colors } from '~styles';

const { height } = Dimensions.get('window');

class NewsDetailScreen extends Component {
  static navigationOptions = {
    headerTitle: (
      <Text shadow type={StyleTypes.headerTitle}>
        NEWS DETAIL
      </Text>
    ),
  };

  render() {
    const { imageSource, heading, description } = this.props.navigation.state.params;
    return (
      <Container>
        <Content showsVerticalScrollIndicator={false}>
          <Image style={styles.imageStyle} resizeMode="cover" source={imageSource} />

          <View style={styles.textViewStyle}>
            <Text style={styles.headingStyle} type={StyleTypes.h1}>
              {heading}
            </Text>

            <Text type={StyleTypes.p}>{description}</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    height: height / 2,
    width: '100%',
    backgroundColor: Colors.imageBackgroundColor,
  },
  textViewStyle: {
    marginHorizontal: 25,
    marginVertical: 20,
    ...GlobalStyles.screenType2ContentStyle,
  },
  headingStyle: {
    marginBottom: 10,
  },
});

export default NewsDetailScreen;
