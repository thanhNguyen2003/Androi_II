import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  FontFamily
} from "../../GlobalStyles";
const formattedPrice = (price) => {
  return new Number(price).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};

const ProductItem = ({ imageSource, textContent, textPrice }) => {
  return (
    <View style={styles.Product}>
      <Image
        source={{
          uri: imageSource,
        }}
        style={[styles.maskGroupIcon, styles.iconPosition]}
        contentFit="cover"
        resizeMode="contain" />
      <View style={styles.shoppingBagIconWrapper}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../../assets/icons/addbutton.png")}
        />

      </View>
      <Text style={[styles.minimalStand, styles.text1Position]}>
        {textContent}
      </Text>
      <Text style={[styles.text1, styles.text1Position]}>$ {textPrice}</Text>
    </View>
  )
}
export default ProductItem;

const styles = StyleSheet.create({
  Product: {
    width: 170,
    height: 170,
    borderRadius: 10,
    margin: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#F0FFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 2,
  },
  //tên sp
  minimalStand: {
    color: "#000000",
    top: 120,
    fontFamily: FontFamily.PoppinsMedium,
  },
  //giá
  text1Position: {
    left: 2,
    textAlign: "left",
    fontSize: 14,
    marginStart: 9,
    position: "absolute",
  },
  text1: {
    color: "#FF0000",
    fontFamily: FontFamily.quicksandBold,
    top: 140,
    fontWeight: "700",
  },
  maskGroupIcon: {
    height: 150,
  },
  //immage
  iconPosition: {
    width: 150,
    height: 100,
    top: 0,
    left: 0,
    marginStart: 0,
    margin: 15,
    resizeMode: "stretch",
  },

  shoppingBagIconWrapper: {
    top: 133,
    left: 130,
    borderRadius: 6,
    padding: 5,
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout: {
    height: 25,
    width: 25,
    overflow: "hidden",
  },
});
