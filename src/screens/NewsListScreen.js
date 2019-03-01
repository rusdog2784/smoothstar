import React, { Component } from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import { Container, Content, List } from 'native-base';
import Swiper from 'react-native-swiper';

import { Text } from '~components/common';
import { CardLI } from '~components';
import { Assets, StyleTypes } from '~constants';

const { height, width } = Dimensions.get('window');

const data = [
  {
    imgSource: 'https://cdn.hipwallpaper.com/i/46/21/RQbvzG.jpg',
    heading:
      'After a hard day at school, give the kids a chance to let loose with us safely in the waves – and improve their surfing and ocean skills.',
    description:
      'The after school program is an 8 week course, the kids will surf with the same instructor and same students each week. We have a low student/instructor ratio and will group the kids accordingly to ability. All lessons have been designed by a PE/PD/Health teacher and cover the basics from warm-up to paddling, catching waves and standing while also catering to intermediate and advanced students (technique refinement and style improvement). Your kids will also learn important surf and safety rules including info on rips, tides, sandbars and waves.',
    date: '20/02/2019',
  },
  {
    imgSource: 'https://cdn.hipwallpaper.com/i/46/21/RQbvzG.jpg',
    heading:
      'After a hard day at school, give the kids a chance to let loose with us safely in the waves – and improve their surfing and ocean skills.',
    description:
      'The after school program is an 8 week course, the kids will surf with the same instructor and same students each week. We have a low student/instructor ratio and will group the kids accordingly to ability. All lessons have been designed by a PE/PD/Health teacher and cover the basics from warm-up to paddling, catching waves and standing while also catering to intermediate and advanced students (technique refinement and style improvement). Your kids will also learn important surf and safety rules including info on rips, tides, sandbars and waves.',
    date: '20/02/2019',
  },
  {
    imgSource: 'https://cdn.hipwallpaper.com/i/46/21/RQbvzG.jpg',
    heading:
      'After a hard day at school, give the kids a chance to let loose with us safely in the waves – and improve their surfing and ocean skills.',
    description:
      'The after school program is an 8 week course, the kids will surf with the same instructor and same students each week. We have a low student/instructor ratio and will group the kids accordingly to ability. All lessons have been designed by a PE/PD/Health teacher and cover the basics from warm-up to paddling, catching waves and standing while also catering to intermediate and advanced students (technique refinement and style improvement). Your kids will also learn important surf and safety rules including info on rips, tides, sandbars and waves.',
    date: '20/02/2019',
  },
  {
    imgSource: 'https://cdn.hipwallpaper.com/i/46/21/RQbvzG.jpg',
    heading:
      'After a hard day at school, give the kids a chance to let loose with us safely in the waves – and improve their surfing and ocean skills.',
    description:
      'The after school program is an 8 week course, the kids will surf with the same instructor and same students each week. We have a low student/instructor ratio and will group the kids accordingly to ability. All lessons have been designed by a PE/PD/Health teacher and cover the basics from warm-up to paddling, catching waves and standing while also catering to intermediate and advanced students (technique refinement and style improvement). Your kids will also learn important surf and safety rules including info on rips, tides, sandbars and waves.',
    date: '20/02/2019',
  },
  {
    imgSource: 'https://cdn.hipwallpaper.com/i/46/21/RQbvzG.jpg',
    heading:
      'After a hard day at school, give the kids a chance to let loose with us safely in the waves – and improve their surfing and ocean skills.',
    description:
      'The after school program is an 8 week course, the kids will surf with the same instructor and same students each week. We have a low student/instructor ratio and will group the kids accordingly to ability. All lessons have been designed by a PE/PD/Health teacher and cover the basics from warm-up to paddling, catching waves and standing while also catering to intermediate and advanced students (technique refinement and style improvement). Your kids will also learn important surf and safety rules including info on rips, tides, sandbars and waves.',
    date: '20/02/2019',
  },
  {
    imgSource: 'https://cdn.hipwallpaper.com/i/46/21/RQbvzG.jpg',
    heading:
      'After a hard day at school, give the kids a chance to let loose with us safely in the waves – and improve their surfing and ocean skills.',
    description:
      'The after school program is an 8 week course, the kids will surf with the same instructor and same students each week. We have a low student/instructor ratio and will group the kids accordingly to ability. All lessons have been designed by a PE/PD/Health teacher and cover the basics from warm-up to paddling, catching waves and standing while also catering to intermediate and advanced students (technique refinement and style improvement). Your kids will also learn important surf and safety rules including info on rips, tides, sandbars and waves.',
    date: '20/02/2019',
  },
  {
    imgSource: 'https://cdn.hipwallpaper.com/i/46/21/RQbvzG.jpg',
    heading:
      'After a hard day at school, give the kids a chance to let loose with us safely in the waves – and improve their surfing and ocean skills.',
    description:
      'The after school program is an 8 week course, the kids will surf with the same instructor and same students each week. We have a low student/instructor ratio and will group the kids accordingly to ability. All lessons have been designed by a PE/PD/Health teacher and cover the basics from warm-up to paddling, catching waves and standing while also catering to intermediate and advanced students (technique refinement and style improvement). Your kids will also learn important surf and safety rules including info on rips, tides, sandbars and waves.',
    date: '20/02/2019',
  },
];

class NewsListScreen extends Component {
  static navigationOptions = {
    headerTitle: <Text type={StyleTypes.headerTitle}>NEWS</Text>,
    headerLeft: <View>{null}</View>,
  };

  _renderRow = ({ heading, date, description, imgSource }) => {
    return (
      <CardLI
        heading={heading}
        date={date}
        imageSource={{ uri: imgSource }}
        description={description}
      />
    );
  };

  render() {
    return (
      <Container>
        <Content>
          <View style={styles.carouselViewStyle}>
            <Swiper
              dotColor="#bbb"
              activeDotColor="#fff"
              paginationStyle={styles.carouselPaginationStyle}
              style={styles.carouselStyle}>
              <View style={styles.slideStyle}>
                <Image style={styles.imageStyle} resizeMode="cover" source={Assets.Images.testImg} />
              </View>
              <View style={styles.slideStyle}>
                <Image style={styles.imageStyle} resizeMode="cover" source={Assets.Images.testImg} />
              </View>
              <View style={styles.slideStyle}>
                <Image style={styles.imageStyle} resizeMode="cover" source={Assets.Images.testImg} />
              </View>
            </Swiper>
          </View>
          <View style={styles.carouselTextStyle}>
            <Text type={StyleTypes.title}>Test Heading</Text>
          </View>
          <List style={styles.listViewStyle} dataArray={data} renderRow={this._renderRow} />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  carouselViewStyle: {
    height: height / 2.5,
    position: 'absolute',
    width: '100%',
  },
  carouselTextStyle: {
    height: height / 2.5,
    width,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: null,
    flex: 1,
  },
  listViewStyle: {
    marginTop: height / 3,
  },
  carouselStyle: {
    flex: 1,
  },
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  carouselPaginationStyle: {
    top: height / 4.5,
  },
});

export default NewsListScreen;
