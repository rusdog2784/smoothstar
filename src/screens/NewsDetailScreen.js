import React, { Component } from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';

import { Text } from '~components/common';
import { StyleTypes } from '~constants';

const { height } = Dimensions.get('window');

class NewsDetailScreen extends Component {
  static navigationOptions = {
    headerTitle: <Text type={StyleTypes.headerTitle}>NEWS</Text>,
  };

  render() {
    const { imageSource, heading, description } = this.props.navigation.state.params;
    return (
      <Container>
        <Content>
          <Image style={styles.imageStyle} resizeMode="cover" source={imageSource} />

          <View style={styles.textViewStyle}>
            <Text style={styles.headingStyle} type={StyleTypes.h1}>
              {heading}
            </Text>

            <Text>{description}</Text>
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
  },
  textViewStyle: {
    marginHorizontal: 25,
    marginVertical: 20,
  },
  headingStyle: {
    marginBottom: 10,
  },
});

export default NewsDetailScreen;
