// giao diện chờ
import * as React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { FontFamily } from "../GlobalStyles";
import * as Animatable from "react-native-animatable";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
const HomePage = ({ navigation }) => {
  
  const [fadeAnim] = useState(new Animated.Value(0));
  const fadeInBotton = {
    0: {
      opacity: 0,
      translateX: 100,
    },
    1: {
      opacity: 1,
      translateX: 0,
    },
  };
  useEffect(() => {
    const startAnimationTimeout = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }, 500);
    return () => clearTimeout(startAnimationTimeout);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <LinearGradient
        style={styles.homepage}
        locations={[0, 1]}
        colors={["#fff", "#FFFF99"]}
      >
        <View style={styles.homepageChild} />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}> 
        <Animatable.View
        animation="zoomIn"
        duration={1000}
        delay={400 * 2 + 3 * 200}
        style={styles.rectangleParent}
      >
          <LinearGradient
            style={styles.groupChild}
            locations={[0, 1]}
            colors={["#FF9900", "#FF9900"]}
          />

          <Text style={styles.getStarted}>Tiếp Tục</Text>
        </Animatable.View>
        </TouchableOpacity>
        <View style={styles.homepageInner}>
          <View style={styles.frameWrapper}>
            <View style={styles.frameChild} />
          </View>
        </View>
         <Animatable.View
        animation="zoomIn"
        duration={900}
        delay={400 * 2 + 3 * 200}
       
      >
        
        <Text style={[styles.choMngBn, styles.thGiiTypo]}>
Chào Mừng Bạn Đã Đến </Text>
        </Animatable.View>

        <Animatable.View
        animation="fadeIn"
        duration={1000}
        delay={400 * 2 + 3 * 200}
      
      >
        <Image
          style={styles.sport11983142Icon}
          contentFit="cover"
          source={require("../assets/images/logo.png")}
        />
        </Animatable.View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  thGiiTypo: {
    textShadowOffset: {
      width: 0,
      height: 4,
      textAlign:"center",
    },
flexDirection:"row",
justifyContent:"center",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontFamily: FontFamily.trebuchetMS,
    fontWeight: "700",
    position: "absolute",
  },
  thGiiTypo2: {
    textShadowOffset: {
      width: 0,
      height: 4,
    },

    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontFamily: FontFamily.trebuchetMS,
    fontWeight: "700",
    position: "absolute",
  },
 
  groupChild: {

    borderRadius: 27,
    shadowColor: "rgba(110, 75, 10, 0.11)",
    shadowRadius: 18,
    elevation: 18,
    height:hp('5%'),
    marginleft: wp('10'),
    width:  wp('60%'),
    position: "absolute",
    backgroundColor: "transparent",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  
  },
  getStarted: {
   
    fontSize: hp('2%'),
    color: "#fff",

    textAlign: "center",
    fontFamily: FontFamily.trebuchetMS,
    fontWeight: "700",
    left: 0,

   
  },
  rectangleParent: {
    top: 611,
   
left:wp('43%'),
    position: "absolute",
    alignItems: 'center',
    justifyContent: 'center',
  },
  frameChild: {
    width: 64,
    height: 90,
  },
  frameWrapper: {
    top: -11,
    left: 33,
    width: 75,
    height: 42,
    flexDirection: "row",
    position: "absolute",
  },
  homepageInner: {
    top: 194,
    left: 18,
    borderRadius: 130,
    width: 136,
    height: 34,
    position: "absolute",
  },
  thGii: {
    top: 448,
  left:65,
    paddingHorizontal:20,
    fontSize: 36,
    color: "#ff591d",
    width: 272,
    height: 101,
    textAlign: "center",
  },

  homepageItem: {
    top: 1,
    left: 537,
    width: 420,
    height: 890,
    position: "relative",
  },
  choMngBn: {
    top: 270,
    fontSize: hp('3%'),
    color: "#ffa717",
    alignSelf: 'center', // Center the element horizontally
   
  },
  sport11983142Icon: {
    top: 320,
    width: hp('55%'),
    height:wp(' 80%'),
    position: "absolute",
    alignSelf: 'center',
    marginTop: -moderateScale(wp('10%') / 2), // Half of the height
  },
  homepage: {
    elevation: 23,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: "transparent",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
});

export default HomePage;
