import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { useEffect, useState } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  Keyboard,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View
} from "react-native";
import * as Animatable from "react-native-animatable";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
const Login = ({ navigation }) => {
  const { width, height } = Dimensions.get("window"); // Lấy chiều rộng màn hình

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


  //api 
  const [username, setName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignIn = () => {
    // Lấy giá trị từ TextInput và kiểm tra với dữ liệu từ API
    Keyboard.dismiss();
    if (!username || !password) {
      alert("Vui lòng nhập name và mật khẩu.");
      return;
    }

    fetch('http://192.168.180.177:8080/api/users')
      .then(response => response.json())
      .then(data => {
        const user = data.content.find(item => item.name === username);

        if (user) {
          if (user.password === password) {
            alert("Đăng nhập thành công");
            navigation.navigate('Overview');
          } else {
            alert('Mật khẩu không đúng.');
          }
        } else {
          alert("Tên tài khoản không đúng");
        }
      })
      .catch(error => {
        console.error('Lỗi cuộc gọi API:', error);
      });
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFCC" }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Animated.View style={[styles.signIn, { opacity: fadeAnim }]}>
        <View style={{ flexDirection: "row", alignItems: "center" }}></View>

        <Animatable.Text
          animation="zoomIn"
          delay={400 * 2 + 1 * 200}
          duration={2000}
          style={[
            styles.login2,
            styles.loginTypo,
            { fontSize: 34,marginLeft:70 }
          ]}
        >
          {`Đăng Nhập\n`}
        </Animatable.Text>


        <Animatable.View
          animation="fadeIn"
          duration={1000}
          delay={400 * 2 + 3 * 200}
          style={styles.rectangleParent}
        >
          <TouchableHighlight onPress={handleSignIn}>

            <LinearGradient
              style={[styles.frameChild, styles.login1Layout]}
              colors={["#8DEEEE", "#ffaf18"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={[styles.login1, styles.loginTypo1]}>Đăng Nhập</Text>
            </LinearGradient>
          </TouchableHighlight>
        </Animatable.View>
        {/* name */}
        <Animatable.View
          animation="fadeIn"
          duration={1500}
          delay={400 * 2 + 3 * 200}
          style={[styles.rectangleGroup, styles.rectangleLayout]}
        >

          <TextInput
            style={[styles.frameInner, styles.frameInnerShadowBox, styles.nameAddress, styles.passwordTypo]}
            placeholder="Tên tài khoản"
            value={username}
            onChangeText={text => setName(text)}
          />
          <Image
            style={[styles.mailIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icons/group-18.png")}
          />
        </Animatable.View>
        {/* password */}
        <Animatable.View
          animation="fadeIn"
          duration={1500}
          delay={2 * (400 * 2 + 3 * 100)}
          style={[styles.rectangleContainer, styles.rectangleLayout]}
        >

          <TextInput
            style={[styles.rectangleView, styles.frameInnerShadowBox, styles.password, styles.passwordTypo]}
            placeholder="Mật khẩu"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Image
            style={[styles.lockIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icons/lock.png")}
          />
        </Animatable.View>
        <Animatable.View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginHorizontal: 12,
            alignItems: "center",
            alignContent: "center",
            alignContent: "center",
            width: width, // Sử dụng chiều rộng của màn hình
          }}
        >
          <Animatable.View style={styles.icon}>
            <TouchableOpacity>
              <Animatable.View
                animation="fadeIn"
                delay={400 * 2 + 1 * 200}
                duration={1000}
                style={styles.google1Wrapper}
              >
                <Image
                  source={require("../assets/icons/google.png")}
                  style={styles.image1}
                />
              </Animatable.View>
            </TouchableOpacity>
          </Animatable.View>
          <TouchableOpacity>
            <Animatable.View
              animation="fadeIn"
              duration={3000}
              delay={400 * 2 + 3 * 200}
              style={styles.icon}
            >
              <Image
                source={require("../assets/icons/apple.png")}
                style={styles.image1}
              />
            </Animatable.View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Animatable.View
              animation="fadeIn"
              duration={3000}
              delay={400 * 2 + 3 * 200}
              style={styles.icon}
            >
              <Image
                source={require("../assets/icons/facebook.png")}
                style={styles.image1}
              />
            </Animatable.View>
          </TouchableOpacity>
        </Animatable.View>
        <View style={[styles.orConnectWithWrapper, styles.connectLayout]}>
          <Text style={[styles.orConnectWith, styles.connectLayout]}>OR</Text>
        </View>
        <Animatable.View
          animation="fadeIn"
          duration={1500}
          delay={400 * 2 + 3 * 200}
        >
          <View
            style={[styles.noAccountRegisterHereWrapper, styles.accountLayout]}
          >
            <Text style={[styles.noAccountContainer, styles.accountLayout]}>
              <Text style={styles.noAccount}>
                <Text style={styles.noAccount1}>Don't Have An Account ? </Text>
              </Text>
            </Text>

            <Text style={[styles.RegisterHere, styles.passwordTypo1]}>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={styles.registerHere1}>Đăng Ký</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </Animatable.View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  google1Wrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {

    borderRadius: 20,
    marginHorizontal: 12,
  },
  image1: {
    width: 40,
    height: 40,
    top: 630,
  },
  login1Layout: {
    width: wp("80%"),
    left: 0,
  },
  loginTypo: {
    textAlign: "center",
    fontFamily: FontFamily.trebuchetMS,
    fontWeight: "700",
    position: "absolute",
  },
  loginTypo1: {
    textAlign: "center",
    fontFamily: FontFamily.trebuchetMS,
    fontWeight: "700",
    position: "absolute",
  },
  passwordTypo1: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  rectangleLayout: {
    height: 47,
    width: wp("80%"),
    marginHorizontal: "50%",
    position: "absolute",
    alignItems: 'center',
    justifyContent: 'center',
  },
  frameInnerShadowBox: {
    elevation: 21,
    shadowRadius: 21,
    backgroundColor: Color.colorWhite,
    height: 47,
    width: wp("80%"),


    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },

  },
  passwordTypo: {
    color: Color.colorSilver,
    fontSize: FontSize.size_mini,
    top: 14,
    fontFamily: FontFamily.trebuchetMS,

    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  connectLayout: {
    width: 104,
    position: "absolute",

    flexDirection: "row",
    justifyContent: "center",
  },
  accountLayout: {
    width: 215,
    height: 21,
    position: "absolute",
  },
  passwordTypo2: {
    fontWeight: "700",
    fontFamily: FontFamily.trebuchetMS,
  },
  frameChild: {
    borderRadius: 27,
    shadowColor: "rgba(110, 75, 10, 0.11)",
    shadowRadius: 18,
    elevation: 18,
    top: -20,

    height: 50,
    position: "absolute",
    backgroundColor: "transparent",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  login1: {
    fontSize: 16,
    color: Color.colorWhite,
    top: 13,
    width: 310
  },
  rectangleParent: {
    top: 477,


    position: "absolute",
    marginHorizontal: "10%",
  },
  frameItem: {
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
  loginInner: {
    top: 194,
    left: 18,
    borderRadius: 130,
    width: 136,
    height: 34,
    position: "absolute",
  },
  login2: {
    top: 169,
    fontSize: 60,
    color: "#ff591d",
    width: wp('60%'),
    height: hp('60%'),
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  forgetPassword: {
    top: 410,
    left: "70%",
    color: "#ffa717",

    fontFamily: FontFamily.trebuchetMS,
    fontWeight: "700",
    position: "absolute",
  },
  RegisterHere: {
    left: 155,
    color: "#4d7ef9",

    fontFamily: FontFamily.trebuchetMS,
    fontWeight: "700",
    position: "absolute",
  },
  rememberPassword: {
    top: 2,
    left: 35,
    width: 156,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.trebuchetMS,
    fontWeight: "700",
    position: "absolute",
  },
  groupChild: {
    top: -1,
    left: -2,
    borderRadius: Border.br_11xs,
    width: 28,
    height: 25,
    position: "absolute",
  },
  rememberPasswordParent: {
    top: 408,


    left: "10%",
    position: "absolute",
  },
  loginChild: {
    top: 1,
    left: 537,
    width: 414,
    height: 895,
    position: "absolute",
  },
  loginWitTouch: {
    top: 568,
    width: 125,
    left: 149,
    color: "Color.colorDimgray_100",
    fontFamily: FontFamily.trebuchetMS,
    fontWeight: "700",
    position: "absolute",
  },
  frameInner: {
    borderRadius: 49,
    shadowColor: "rgba(0, 0, 0, 0.21)",
  },
  nameAddress: {
    textAlign: "center",

  },
  mailIcon: {
    left: 110,
    top: 25,
  },
  rectangleGroup: {
    top: 270,
  },
  rectangleView: {
    borderRadius: 44,
    shadowColor: "rgba(0, 0, 0, 0.3)",
  },
  password: {
    textAlign: "center",
  },
  lockIcon: {
    left: 110,
    top: 25,
  },
  rectangleContainer: {
    top: 339,
  },

  orConnectWith: {
    fontFamily: FontFamily.codaRegular,
    color: "#747070",
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
    fontWeight: "bold",
  },
  orConnectWithWrapper: {
    top: 600,
    height: 20,

    marginHorizontal: "50%",

  },
  sport11983141Icon: {
    top: 85,
    left: 234,
    width: 125,
    height: 110,
    position: "absolute",
  },
  noAccount1: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.trebuchetMS,
  },
  noAccount: {
    color: Color.colorDimgray_100,
  },
  registerHere1: {
    fontSize: FontSize.size_sm,
    color: "#ffa717",
  },
  registerHere: {
    fontFamily: FontFamily.trebuchetMS,
  },
  noAccountContainer: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
  },
  noAccountRegisterHereWrapper: {
    top: 534,
    marginHorizontal: "20%",
    flexDirection: "column",
  },
  login: {
    elevation: 23,
    bottom: 50,
    flex: 1,
    width: "100%",
    height: 896,
    backgroundColor: "transparent",
  },
});

export default Login;
