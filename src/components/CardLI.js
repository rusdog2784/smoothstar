import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Card } from 'native-base';

import { Text } from '~components/common';
import { Assets, StyleTypes } from '~constants';

export const CardLI = () => {
  const { h2, p, date } = StyleTypes;

  return (
    <Card style={styles.containerStyle}>
      <View style={styles.parentViewStyle}>
        <Image style={styles.imageStyle} resizeMode="cover" source={Assets.Images.testImg} />

        <View style={styles.textViewStyle}>
          <Text numberOfLines={2} type={h2}>
            Testing the header of the card to check the font view?
          </Text>

          <Text type={date}>19/1/2019</Text>

          <View style={styles.descriptionViewStyle}>
            <Text numberOfLines={2} type={p}>
              Description will be enterd here. This is a text description for the card to check it.
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 7,
  },
  parentViewStyle: {
    margin: 15,
    flexDirection: 'row',
  },
  textViewStyle: {
    marginLeft: 10,
    flex: 1,
    flexDirection: 'column',
  },
  descriptionViewStyle: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    height: 120,
    width: 120,
    borderRadius: 5,
  },
});
