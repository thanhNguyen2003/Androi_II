//giao diện đặt hàng thành công
import React, { useRef } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import LottieView from "lottie-react-native";
import Animatable from "react-native-animatable";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

function OrderCompleted({ navigation }) {
  const animation = useRef(null);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View style={styles.container}>
        <LottieView
          autoPlay
          loop={false}
          ref={animation}
          source={require("../assets/ordersucces.json")} 
          style={{ flex: 1 }}
        />
        <Text
          style={{
            marginTop: 250,
            color: "#0000CD",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Cảm Ơn Bạn Đã Đặt Hàng!
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate("Overview")}>
          <Text style={[styles.continueShopping, styles.continueShoppingTypo]}>
            Tiếp tục mua sắm
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#DDC488",
    alignItems: "center",
    justifyContent: "center",
  },
  continueShoppingTypo: {
    textAlign: "center",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    position: "absolute",
    paddingVertical:15,
  },
  continueShopping: {
    top: 23,
    marginHorizontal:-110,
    color: Color.colorWhite,
    height: 50,
    width: 222,
    borderRadius: 10,
    backgroundColor: "#0000CD",
  },
});

export default OrderCompleted;
