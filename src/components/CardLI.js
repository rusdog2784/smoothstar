import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card } from 'native-base';
import ProgressBar from 'react-native-progress/CircleSnail';
import Image from 'react-native-image-progress';

import { Text } from '~components/common';
import { StyleTypes } from '~constants';

export const CardLI = ({ imageSource, heading, date: dateText, description }) => {
  const { h2, p, date } = StyleTypes;

  return (
    <Card style={styles.containerStyle}>
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
              {heading}
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
