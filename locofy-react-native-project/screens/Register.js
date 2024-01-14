import * as React from "react";
import { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Easing,
  TouchableOpacity,
  Animated,
  StatusBar,
  SafeAreaView,
  TextInput,
  TouchableHighlight

} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import { Dimensions } from "react-native";
import * as Animatable from "react-native-animatable";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
const Register = ({ navigation }) => {
  const screenHeight = Dimensions.get("window").height;
  const screenWidth = Dimensions.get("window").width;

  const { width, height } = Dimensions.get("window"); // Lấy chiều rộng màn hình
  const buttonSize = width * 0.06; // Đặt kích thước dựa trên chiều rộng màn hình
  const buttonMargin = width * 0.03; // Đặt khoảng cách dựa trên chiều rộng màn hình
  const buttonTop = height * 0.05; // Đặt top dựa trên chiều cao màn hình
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


  //api----
  const [username, setName] = React.useState('');
  const [useremail, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmpassword, setConfirmPassword] = React.useState('');

  const handleLogin = () => {
    // Xử lý đăng ký tại đây
    console.log('UserName:', username);
    console.log('Useremail:', useremail);
    console.log('Password:', password);
    console.log('ConfirmPassword:', confirmpassword);
    if (password !== confirmpassword) {
      alert('Mật khẩu và mật khẩu xác nhận không khớp. Vui lòng nhập lại.');
    }
    else{
    
      const data ={
        name:username,
        email:useremail,
        password:password
      }
          
      
      
      
      
      fetch('http://192.168.180.177:8080/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        
      
       
      })
        .then(response => {
       
          if (response.status >= 200 && response.status < 600) {
            return response.json();
          } else {
            throw new Error('Lỗi không mong muốn từ máy chủ. Mã trạng thái: ' + response.status);
          }
        })
        .then(data => {
          alert('Đăng ký thành công');
          navigation.navigate('Login');
      
        })
        .catch(error => {
          console.error('Lỗi cuộc gọi API:', error);
          alert('Đăng ký thất bại. Vui lòng thử lại.');
        });
      
          }
        };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFCC" }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <Animated.View
        style={[
          styles.register,
          styles.registerShadowBox,
          { height: screenHeight, width: screenWidth },
        ]}
        locations={[0, 1]}
        colors={["#fff", "#f2f0f0"]}
      >
        <View style={[styles.orConnectWithWrapper, styles.connectLayout]}>
          <Animatable.View
            animation="fadeIn"
            duration={800}
            delay={400 * 2 + 3 * 100}
          >
            
          </Animatable.View>
        </View>
        <TouchableHighlight onPress={handleLogin}>
        <Animatable.View
        animation="zoomIn"
        duration={1000}
        delay={400 * 2 + 3 * 200}
        style={styles.rectangleParent1}
      >
          <LinearGradient
            style={styles.groupChild}
            locations={[0, 1]}
            colors={["#e89f16", "#ffaf18"]}
          />

          <Text style={styles.getStarted}>Đăng Ký</Text>
        </Animatable.View>
        </TouchableHighlight>

        <Animatable.View
          animation="zoomIn"
          duration={1500}
          delay={400 * 2 + 3 * 100}
        >
          <Text style={[styles.register2, styles.registerTypo]}>{`Đăng Ký
`}</Text>
        </Animatable.View>
        <Animatable.View
          animation="fadeIn"
          duration={800}
          delay={400 * 2 + 3 * 100}
        >
          <View
            style={[
              styles.alreadyRegisteredLoginHerWrapper,
              styles.alreadyLayout,
            ]}
          >
            <Text
              style={[styles.alreadyRegisteredContainer, styles.alreadyLayout]}
            >
              <Text
                style={styles.loginWitTouchClr}
              >{`Already registered ? `}</Text>
            </Text>

            <Text
              style={[
                styles.alreadyRegisteredLoginHerWrapper1,
                styles.alreadyLayout,
              ]}
            >
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.registerHere1}>Đăng Nhập</Text>
                </TouchableOpacity>
            </Text>
          </View>
        </Animatable.View>

        <Animatable.View
          animation="fadeIn"
          duration={800}
          delay={1.5 * (400 * 2 + 3 * 100)}
        >
          <View style={[styles.rectangleParent, styles.rectangleLayout]}>
            <View style={styles.frameChild1ShadowBox} />
            <TextInput
    style={[styles.emailAddress, styles.userNameTypo]}
        placeholder="Email Address"
        value={useremail}
        onChangeText={text => setEmail(text)}
      />
            <Image
              style={[styles.mailIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icons/mail.png")}
            />
          </View>
        </Animatable.View>

        <Animatable.View
          animation="fadeIn"
          duration={800}
          delay={400 * 2 + 3 * 100}
        >
          <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
            <View style={styles.frameChild1ShadowBox} />
            <TextInput
       style={[styles.userName, styles.userNameTypo]}
        placeholder="Tên Tài Khoản "
        value={username}
        onChangeText={text => setName(text)}
      />
            <Image
              style={styles.groupIcon}
              contentFit="cover"
              source={require("../assets/icons/group-18.png")}
            />
          </View>
        </Animatable.View>
        <Animatable.View
          animation="fadeIn"
          duration={800}
          delay={2 * (400 * 2 + 3 * 100)}
        >
          <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
            <View style={styles.frameChild1ShadowBox} />
            <TextInput
      style={[styles.userName, styles.userNameTypo]}
        placeholder="Mật Khẩu "
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
            <Image
              style={[styles.lockIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icons/lock.png")}
            />
          </View>
        </Animatable.View>
        <Animatable.View
          animation="fadeIn"
          duration={800}
          delay={3 * (400 * 2 + 3 * 100)}
        >
          <View style={[styles.rectangleContainer2, styles.rectangleLayout]}>
            <View style={styles.frameChild1ShadowBox} />
            <TextInput
       style={[styles.userName, styles.userNameTypo]}
        placeholder="Lặp Lại Mật Khẩu"
        value={confirmpassword}
        secureTextEntry
        onChangeText={text => setConfirmPassword(text)}
      />
            <Image
              style={[styles.lockIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icons/lock.png")}
            />
          </View>
        </Animatable.View>
        <Animatable.View
          animation="fadeIn"
          duration={800}
          delay={400 * 2 + 3 * 100}
        >
          <View
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
            <TouchableOpacity style={styles.icon}>
              <Image
                source={require("../assets/icons/google.png")}
                style={styles.image1}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <Image
                source={require("../assets/icons/apple.png")}
                style={styles.image1}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <Image
                source={require("../assets/icons/facebook.png")}
                style={styles.image1}
              />
            </TouchableOpacity>
          </View>
        </Animatable.View>        
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rectangleParent1: {
    top: 520,
   
left:wp('45%'),
    position: "absolute",
    alignItems: 'center',
    justifyContent: 'center',
  },
  groupChild: {

    borderRadius: 27,
    shadowColor: "rgba(110, 75, 10, 0.11)",
    shadowRadius: 18,
    elevation: 18,
    height:hp('5%'),
    marginleft: wp('10'),
    width:  wp('80%'),
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
  image1: {
    width: 40,
    height: 40,
    top: 630,
  },
  icon: {

    borderRadius: 20,
    marginHorizontal: 12,
  },
  registerShadowBox: {
    backgroundColor: "transparent",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  
  orConnectWithTypo: {
    textAlign: "center",
    fontSize: FontSize.size_sm,

 
  },
  frameChildLayout: {
    height: 45,
    position: "absolute",
    
  },
  registerTypo: {

    fontFamily: FontFamily.trebuchetMS,
    fontWeight: "700",
    position: "absolute",
  },
  alreadyLayout: {
    height: 21,
    width: 215,
    position: "absolute",
  },
  loginWitTouchClr: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.trebuchetMS,
  },
  rectangleLayout: {
    height: 47,
    width: wp("55%"),
   marginHorizontal:"10%",
    position: "absolute",
    
  },
  userNameTypo: {
    color: Color.colorSilver,
    fontSize: FontSize.size_mini,
    top: 14,
    fontFamily: FontFamily.trebuchetMS,
    textAlign: "left",
    position: "absolute",

  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  orConnectWith: {
    fontFamily: FontFamily.codaRegular,
    color: "#747070",
left:10,
    top: 15,
    width: 104,
  },
  orConnectWithWrapper: {
    top: 590,
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
  },
  frameChild: {
    borderRadius: 27,
    shadowColor: "rgba(110, 75, 10, 0.11)",
    shadowRadius: 18,
    elevation: 18,
    width: wp("80%"),
    left:45,
    top: 0,
    backgroundColor: "transparent",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    height: 45,
  },
  registerInner: {
    top: 505,
   

  },
  register1: {
    top: 515,
    fontSize: 16,
    color: Color.colorWhite,
    height: 36,
    textAlign: "center",
    marginHorizontal: "45%",
   
  },
  frameItem: {
    width: 64,
    height: 90,
  },
  frameWrapper: {
    top: -11,
 
    width: 75,
    height: 42,
    flexDirection: "row",
    position: "absolute",
  },
  registerChild: {
    top: 194,
    left: 18,
    borderRadius: 130,
    width: 136,
    height: 34,
    position: "absolute",
    
  },
  registerHere1: {
    fontSize: FontSize.size_sm,
    color: "#ffa717",
  },
  register2: {
    textAlign: "center",
    top: 137,
    left: 65,
    fontSize: 55,
    color: "#ff591d",
    width: hp('30%'),
    height:wp('50%'),
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  loginHere: {
    color: "#ffa717",
    fontFamily: FontFamily.trebuchetMS,
    fontWeight: "700",
  },
  alreadyRegisteredContainer: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
  },
  alreadyRegisteredLoginHerWrapper: {
    top: 560,
    left: 100,
  },
  alreadyRegisteredLoginHerWrapper1: {
    top: 0,
    fontSize: FontSize.size_sm,
    left: 140,
    color: "#ffa717",
  },
  registerItem: {
    top: 1,
    left: 537,
    width: 414,
    height: 895,
    position: "absolute",
  },
  frameIcon: {
    top: 625,
    left: 171,
    borderRadius: 14,
    width: 60,
    height: 64,
    position: "absolute",
  },
  loginWitTouch: {
    top: 592,
    left: 155,
    width: 125,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  frameInner: {
    borderRadius: 49,

 
    backgroundColor: Color.colorWhite,
    height: 47,
    width: 312,
    left: 0,
    top: 0,
    position: "absolute",

  },
  emailAddress: {
    left: 37,
    zIndex: 100,
  },
  mailIcon: {
    top: 13,
    left: 276,
  },
  rectangleParent: {
    top: 315,
  },
  frameChild1ShadowBox: {
    borderRadius: 49,
   
    elevation: 21,
    shadowRadius: 21,
    backgroundColor: Color.colorWhite,
    height: 47,
    width: 312,
    left: 0,
    top: 0,
    position: "absolute",

  },
  userName: {
    left: 38,
  },
  groupIcon: {
    top: 12,
    left: 272,
    width: 23,
    height: 22,
    position: "absolute",
  },
  rectangleGroup: {
    top: 250,
  },
  lockIcon: {
    top: 11,
    left: 275,
  },
  rectangleContainer: {
    top: 377,
  },
  rectangleContainer2: {
    top: 445,
  },
  authIcon: {
    top: 620,
    left: 85,
    width: 254,
    height: 86,
    position: "absolute",
  },
  sport11983142Icon: {
top:70,
    left: 220,
    width: hp('20%'),
    height:wp(' 30%'),
    position: "absolute",
  },
  register: {
    elevation: 23,
    bottom: 30,
    flex: 1,

    backgroundColor: "transparent",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
});

export default Register;
