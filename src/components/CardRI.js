import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

import { Text } from './common';
import { Colors } from '~styles';

export const CardRI = ({ style, imgSource, heading, children, subText, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.parentViewStyle, style]}>
      <View style={styles.dataViewStyle}>
        <Text light type="h2">
          {heading}
        </Text>
        <Text light type="h3" numberOfLines={3}>
          {children}
        </Text>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <Text numberOfLines={1} style={{ color: Colors.cardRISubTextColor }}>
            {subText}
          </Text>
        </View>
      </View>

      <Image source={imgSource} resizeMode="cover" style={styles.imageStyle} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  parentViewStyle: {
    borderWidth: 1,
    borderColor: '#fff',
    height: 120,
    borderRadius: 7,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  imageStyle: {
    height: null,
    width: 110,
  },
  dataViewStyle: {
    flex: 1,
    padding: 10,
  },
});
