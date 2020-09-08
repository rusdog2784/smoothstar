import React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import ImageOverlay from 'react-native-image-overlay';

import { Assets } from '~constants';

const { width } = Dimensions.get('window');

const VideoList = ({ data = [{}, {}, {}, {}, {}, {}, {}] }) => {
  const { videoListContainerStyle } = styles;

  console.log('data:', data);

  return (
    <FlatList
      data={data}
      style={videoListContainerStyle}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => <ListItem item={item} index={index} />}
    />
  );
};

const ListItem = ({ item, index }) => {
  return (
    <TouchableOpacity
      style={{
        width: width / 2,
        height: width / 3.5,
        marginBottom: 5,
        paddingLeft: index % 2 ? 3 : 6,
        paddingRight: index % 2 ? 6 : 3,
      }}>
      <ImageOverlay
        containerStyle={{ width: '100%', flex: 1 }}
        resizeMode="cover"
        source={Assets.Images.testImg2}
        title={`Category ${index + 1}`}
        contentPosition="bottom"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  videoListContainerStyle: {
    // flexDirection: 'row',
    // flexWrap: 'wrap',
  },
});

export default VideoList;
