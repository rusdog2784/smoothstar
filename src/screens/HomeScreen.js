import React, { Component } from "react";
import { View, Image, Dimensions, StyleSheet } from "react-native";
import { Container, Content } from "native-base";
import Swiper from "react-native-swiper";
import Moment from "moment";
import { SplashScreen } from "expo";
import { LinearGradient } from "expo-linear-gradient";

import { CustomIcon } from "~components/common";
import { CardRI } from "~components";
import { Assets } from "~constants";
import { GlobalStyles, Colors } from "~styles";

const { height } = Dimensions.get("window");

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: <View>{null}</View>,
    headerLeft: (
      <CustomIcon
        shadow
        button
        onPress={navigation.toggleDrawer}
        style={GlobalStyles.headerLeftStyle}
        name="menu"
        type="MaterialIcons"
        color={Colors.iconColorLight}
      />
    ),
  });

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Container style={{ backgroundColor: Colors.backgroundColorDark }}>
        <Content showsVerticalScrollIndicator={false}>
          <View style={styles.carouselViewStyle}>
            <Swiper
              autoplay
              autoplayTimeout={10}
              showsPagination={false}
              style={styles.carouselStyle}
            >
              <View style={styles.slideStyle}>
                <Image
                  style={styles.imageStyle}
                  resizeMode="cover"
                  source={Assets.Images.testImg3}
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
          <LinearGradient
            colors={["transparent", "transparent", Colors.backgroundColorDark]}
            style={styles.linearGradientStyle}
          />
          <View style={styles.cardsViewStyle}>
            <CardRI
              style={{ marginBottom: 20 }}
              imgSource={Assets.Images.initSlider2}
              heading="GETTING STARTED"
              subText="3 x Videos"
            >
              New to SmoothStar? folllow our guide on how to get started by
              expert SmoothStar coaches.
            </CardRI>

            <CardRI
              onPress={() =>
                this.props.navigation.navigate("RegistrationStack")
              }
              imgSource={Assets.Images.initSlider3}
              heading="REGISTER NOW"
              subText={Moment(Date.now()).format("DD MMM YYYY")}
            >
              Get an extra 3 months warranty when you register your SmoothStar
              on the app.
            </CardRI>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  carouselViewStyle: {
    height: height / 1.85,
    position: "absolute",
    width: "100%",
  },
  carouselStyle: {
    flex: 1,
  },
  slideStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
  },
  imageStyle: {
    height: null,
    width: "100%",
    flex: 1,
    backgroundColor: Colors.imageBackgroundColor,
  },
  linearGradientStyle: {
    height: height / 1.85,
    width: "100%",
    position: "absolute",
  },
  cardsViewStyle: {
    // ...GlobalStyles.screenType2ContentStyle,
    paddingHorizontal: 20,
    marginTop: height / 1.85 - 30,
    width: "100%",
  },
});

export default HomeScreen;
