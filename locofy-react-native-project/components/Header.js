import * as React from "react";
import { StyleSheet, View, Text, Image, TextInput } from "react-native";
import {
  Color,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const Header = ({ navigation }) => {
  return (
      <View style={styles.container}>
      <View style={styles.TopNav}>
        <Image
          style={[styles.TopNavChild, styles.TopLayout]}
          source={require("../assets/icons/MenuNav.png")}
        />
        <Text style={[styles.delivery, styles.homelayout, styles.popularTypo1]}>
          Gym Clothes
        </Text>
      </View>

      <Image
        style={styles.homeChild}
        source={require("../assets/icons/ellipse-1.png")}
      />

      <Image
        style={styles.menu1Icon}
        source={require("../assets/icons/menu-1.png")}
      />

      <TextInput
        placeholder="Tìm Kiếm..."
        clearButtonMode="always"
        style={styles.searchBox}
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homelayout: {
    top: 45,
    left: 130,
    position: "absolute",
    zIndex: 1,
  },
  delivery: {
    fontSize: 26,
    color: "#ff591d",
  },
  popularTypo1: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  TopLayout: {
    height: 90,
    width: 490,
    left: -40,
    position: "absolute",
    zIndex: 1,
    top: 0,
  },
  homeChild: {
    top: 35,
    width: 40,
    height: 40,
    left: 20,
    position: "absolute",
    zIndex: 1,
  },
  menu1Icon: {
    top: 45,
    left: 331,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
    zIndex: 1,
  },
  searchBox: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
  },
});

export default Header;
