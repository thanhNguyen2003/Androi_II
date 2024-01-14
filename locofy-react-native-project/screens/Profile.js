  import { Image } from "expo-image";
import * as React from "react";
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
  const { width, height } = Dimensions.get("window"); // Lấy chiều rộng màn hình
  const buttonSize = width * 0.06; // Đặt kích thước dựa trên chiều rộng màn hình
  const buttonMargin = width * 0.05; // Đặt khoảng cách dựa trên chiều rộng màn hình
  const buttonTop = height*0.001; // Đặt top dựa trên chiều cao màn hình
  const navigationBarHeight = Platform.OS === "android" ? 56 : 44; // Thay 56 bằng giá trị thích hợp cho thanh điều hướng Android
  const Profile = ({ navigation }) => {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent={true}
        />
    <View style={styles.profile}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          top: buttonTop,
          borderWidth: 1,
          padding: 3,
          borderRadius: buttonSize / 2,
          marginLeft: buttonMargin,
          position: "absolute",
          zIndex: 1,
        }}
      >
        <Image
          source={require("../assets/icons/arrowleft.png")}
          style={{
            width: buttonSize,
            height: buttonSize,
            tintColor: "black",
          }}
        />
      </TouchableOpacity>

    <View style={[styles.header, styles.bgLayout]}>
      <View style={[styles.bg, styles.bgBg]} />
      <Text style={[styles.anggaRisky, styles.anggaRiskyFlexBox]}>
        User account 
      </Text>
      <Image
        style={styles.picIcon}
        contentFit="cover"
        source={require("../assets/images/login.png")}
      />
      <Text style={[styles.wepandagmailcom, styles.foodmarketClr]}>
        nguyen@gmail.com
      </Text>
    </View>
    <View style={[styles.tabs, styles.bg1Layout]}>
      <View style={[styles.bg1, styles.bg1Layout]} />
      <View style={styles.nav}>
        <Text style={styles.account}>Account</Text>

        <View style={[styles.navChild, styles.navPosition]} />
        <View style={[styles.navItem, styles.navPosition]} />
      </View>
      <View style={[styles.item, styles.itemLayout]}>
        <Text style={[styles.editProfile, styles.textTypo]}>
          Edit Profile
        </Text>
        <Image
          style={[styles.chevronRight24pxIcon, styles.itemLayout]}
          contentFit="cover"
          source={require("../assets/icons/chevron-right-24px.png")}
        />
      </View>
      <View style={[styles.item1, styles.itemLayout]}>
        <Text style={[styles.editProfile, styles.textTypo]}>
          Home Address
        </Text>
        <Image
          style={[styles.chevronRight24pxIcon, styles.itemLayout]}
          contentFit="cover"
          source={require("../assets/icons/chevron-right-24px.png")}
        />
      </View>
      <View style={[styles.item2, styles.itemLayout]}>
        <Text style={[styles.editProfile, styles.textTypo]}>Security</Text>
        <Image
          style={[styles.chevronRight24pxIcon, styles.itemLayout]}
          contentFit="cover"
          source={require("../assets/icons/chevron-right-24px.png")}
        />
      </View>

      <View style={[styles.item3, styles.itemLayout]}>
        <Text style={[styles.editProfile, styles.textTypo]}>Logout</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Image
            style={[styles.logout, styles.itemLayout]}
            contentFit="cover"
            source={require("../assets/icons/logout.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  </View>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    arrowLeftIcon: {
      top: 35,
      width: 24,
      height: 24,
      left: 27,
      position: "absolute",
      overflow: "hidden",
    },
    bgLayout: {
      height: 232,
      width: 360,
      left: 0,
      position: "absolute",
    },
    bgBg: {
      backgroundColor: Color.colorWhite,
      top: 0,
    },
    anggaRiskyFlexBox: {
      textAlign: "center",
      position: "absolute",
    },
    foodmarketClr: {
      color: Color.colorLightslategray,
      fontSize: FontSize.size_sm,
    },
    bg1Layout: {
      height: 208,
      width: 360,
      left: 0,
      position: "absolute",
    },
    textTypo: {
      fontFamily: FontFamily.poppinsRegular,
      textAlign: "left",
      position: "absolute",
    },
    navPosition: {
      borderStyle: "solid",
      top: 33,
      position: "absolute",
    },
    itemLayout: {
      height: 24,
      position: "absolute",
    },
    bg2Layout: {
      height: 60,
      width: 360,
      left: 0,
      position: "absolute",
    },
    iconLayout: {
      height: 55,
      width: 90,
      position: "absolute",
    },
    homeLayout: {
      height: 32,
      position: "absolute",
    },
    bg: {
      height: 232,
      width: 360,
      left: 0,
      position: "absolute",
    },
    anggaRisky: {
      top: 152,
      color: Color.colorGray_100,
      fontFamily: FontFamily.poppinsMedium,
      fontWeight: "500",
      textAlign: "center",
      fontSize: FontSize.size_lg,
      left: 125,
    },
    picIcon: {
      top: 26,
      width: 110,
      height: 110,
      left: 125,
      position: "absolute",
    },
    wepandagmailcom: {
      top: 185,
      left: 125,
      fontWeight: "300",
      fontFamily: FontFamily.poppinsLight,
      textAlign: "center",
      position: "absolute",
    },
    header: {
      top: 0,
    },
    bg1: {
      backgroundColor: Color.colorWhite,
      top: 0,
    },
    account: {
      textAlign: "left",
      left: 24,
      fontSize: FontSize.size_sm,
      color: Color.colorGray_100,
      fontFamily: FontFamily.poppinsMedium,
      fontWeight: "500",
      top: 0,
      position: "absolute",
    },
    foodmarket: {
      left: 108,
      color: Color.colorLightslategray,
      fontSize: FontSize.size_sm,
      top: 0,
    },
    navChild: {
      borderColor: "#f2f2f2",
      borderTopWidth: 1,
      width: 361,
      height: 1,
      left: 0,
    },
    navItem: {
      left: 32,
      borderColor: Color.colorGray_100,
      borderTopWidth: 3,
      width: 43,
      height: 3,
    },
    nav: {
      top: 16,
      height: 34,
      width: 360,
      position: "absolute",
      left: 0,
    },
    editProfile: {
      top: 1,
      fontSize: FontSize.size_sm,
      fontFamily: FontFamily.poppinsRegular,
      color: Color.colorGray_100,
      left: 0,
    },
    chevronRight24pxIcon: {
      left: 288,
      width: 24,
      top: 0,
    },
    logout: {
      left: 70,
      width: 24,
      top: 0,
    },
    item: {
      top: 66,
      width: 312,
      height: 24,
      left: 24,
    },
    item1: {
      top: 100,
      width: 312,
      height: 24,
      left: 24,
    },
    item2: {
      top: 134,
      width: 312,
      height: 24,
      left: 24,
    },
    item3: {
      top: 168,
      width: 312,
      height: 24,
      left: 24,
    },
    tabs: {
      top: 256,
    },
    bg2: {
      backgroundColor: Color.colorWhite,
      top: 0,
    },
    place: {
      left: 0,
      top: 0,
    },
    icHomeNormalChild: {
      left: 2,
      width: 28,
      top: 0,
    },
    text: {
      top: 6,
      left: 11,
      color: Color.colorGainsboro,
      fontSize: FontSize.size_lg,
      fontFamily: FontFamily.poppinsRegular,
    },
    icHomeNormal: {
      top: 12,
      left: 29,
      width: 32,
      overflow: "hidden",
    },
    icon: {
      left: 20,
      top: 3,
      height: 55,
      width: 90,
    },
    icon1: {
      left: 250,
      top: 3,
      height: 55,
      width: 90,
    },
    icon2: {
      left: 135,
      top: 3,
      height: 55,
      width: 90,
    },
    bottomNav: {
      top: 580,
    },
    profile: {
      backgroundColor: "#fafafc",
      flex: 1,
      width: "100%",
      height: 640,
      overflow: "hidden",
      top: 70,
    },
  });

  export default Profile;
