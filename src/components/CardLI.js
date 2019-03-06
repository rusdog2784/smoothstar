import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, CardItem } from 'native-base';
import ProgressBar from 'react-native-progress/CircleSnail';
import Image from 'react-native-image-progress';

import { Text } from '~components/common';
import { StyleTypes } from '~constants';

export const CardLI = ({ onPress, imageSource, heading, date: dateText, description, style }) => {
  const { h2, p, date } = StyleTypes;

  return (
    <Card style={[styles.cardStyle, style]}>
      <CardItem button onPress={onPress} style={styles.cardItemStyle}>
        <View style={styles.parentViewStyle}>
          <Image
            style={styles.imageStyle}
            resizeMode="cover"
            source={imageSource}
            indicator={ProgressBar}
            indicatorProps={{
              size: 40,
              borderWidth: 0,
              color: 'blue',
              unfilledColor: 'white',
            }}
          />

          <View style={styles.textViewStyle}>
            <Text numberOfLines={2} type={h2}>
              {heading}
            </Text>

            <Text type={date}>{dateText}</Text>

            <View style={styles.descriptionViewStyle}>
              <Text numberOfLines={2} type={p}>
                {description}
              </Text>
            </View>
          </View>
        </View>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    borderRadius: 7,
  },
  cardItemStyle: {
    borderRadius: 7,
  },
  parentViewStyle: {
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
    height: 100,
    width: 100,
  },
});
