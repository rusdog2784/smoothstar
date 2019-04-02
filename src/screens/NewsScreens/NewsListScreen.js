import React, { Component } from 'react';
import { View, Image, Dimensions, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Container, Content } from 'native-base';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';
import Moment from 'moment';

import { fetchListNews, authSignOut } from '~redux/actions';
import { Text, CustomIcon } from '~components/common';
import { CardLI } from '~components';
import { Assets, StyleTypes, StaticData } from '~constants';
import { GlobalStyles, Colors } from '~styles';

const { height, width } = Dimensions.get('window');

class NewsListScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <Text shadow type={StyleTypes.headerTitle}>
        NEWS
      </Text>
    ),
    headerRight: <View>{null}</View>,
    headerLeft: (
      <CustomIcon
        shadow
        button
        onPress={navigation.toggleDrawer}
        style={GlobalStyles.headerLeftStyle}
        name="menu"
      />
    ),
  });

  componentDidMount() {
    this.props.fetchListNews();
  }

  _renderItem = ({ item }) => {
    const { title, publishedOn, rawContent } = item;
    return (
      <CardLI
        style={styles.listItemStyle}
        onPress={() =>
          this.props.navigation.navigate('NewsDetailScreen', {
            imageSource: {
              uri:
                'https://chile.travel/wp-content/uploads/bfi_thumb/Surf-pichilemu-ACT158-mpo3ti23d6dwe815ue248fxju4t66nm4vbb5pzf06o.jpg',
            },
            heading: title,
            description: rawContent,
          })
        }
        heading={title}
        date={Moment(publishedOn).format('DD/MM/YYYY')}
        imageSource={{
          uri: 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-26808.jpg',
        }}
        description={rawContent}
      />
    );
  };

  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View style={styles.carouselViewStyle}>
            <Swiper
              loop={false}
              dotColor="#bbb"
              activeDotColor="#fff"
              paginationStyle={styles.carouselPaginationStyle}
              style={styles.carouselStyle}>
              <View style={styles.slideStyle}>
                <Image
                  style={styles.imageStyle}
                  resizeMode="cover"
                  source={Assets.Images.testImg}
                />
              </View>
              <View style={styles.slideStyle}>
                <Image
                  style={styles.imageStyle}
                  resizeMode="cover"
                  source={Assets.Images.testImg}
                />
              </View>
              <View style={styles.slideStyle}>
                <Image
                  style={styles.imageStyle}
                  resizeMode="cover"
                  source={Assets.Images.testImg}
                />
              </View>
            </Swiper>
          </View>
          <View style={styles.carouselTextViewStyle}>
            <Text numberOfLines={2} shadow type={StyleTypes.title} style={styles.carouselTextStyle}>
              {StaticData.NewsListTitle}
            </Text>
          </View>
          {this.props.newsList.length ? (
            <FlatList
              style={styles.listViewStyle}
              data={this.props.newsList}
              keyExtractor={item => item.id}
              renderItem={this._renderItem}
            />
          ) : null}
        </Content>

        <TouchableOpacity
          style={{ alignItems: 'center', marginVertical: 20 }}
          onPress={this.props.authSignOut}>
          <Text>SignOut</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  carouselViewStyle: {
    height: height / 2,
    width: '100%',
  },
  carouselTextViewStyle: {
    height: height / 2,
    width,
    position: 'absolute',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  carouselTextStyle: {
    textAlign: 'center',
  },
  imageStyle: {
    height: null,
    width: '100%',
    flex: 1,
    backgroundColor: Colors.imageBackgroundColor,
  },
  listViewStyle: {
    position: 'absolute',
    marginTop: height / 2 - 40,
    ...GlobalStyles.screenType2ContentStyle,
  },
  listItemStyle: {
    marginBottom: 10,
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
    top: height / 2 - 100,
  },
});

const mapStateToProps = state => {
  const { newsList } = state.app;

  return {
    newsList,
  };
};

export default connect(
  mapStateToProps,
  { fetchListNews, authSignOut }
)(NewsListScreen);
