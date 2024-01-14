import { Image } from "expo-image";
import * as React from "react";
import { Dimensions, SafeAreaView, StatusBar, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const statusBarHeight = StatusBar.currentHeight || 0;
const { width, height } = Dimensions.get('window');
const buttonSize = width * 0.06;
const buttonMargin = width * 0.03;
const buttonTop = height * 0.06;
const navigationBarHeight = Platform.OS === 'android' ? 56 : 44;
const paddingBottom = statusBarHeight + navigationBarHeight;
const PayAndOrder = ({ navigation }) => {
  const onPressCompleted = () => {
    navigation.navigate("OrderCompleted");
  };
  const onPressBack = () => {
    navigation.navigate("Bag");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={[styles.bag, styles.bagLayout]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              top: buttonTop,
              borderWidth: 1,
              padding: 5,
              borderRadius: buttonSize / 2,
              marginLeft: buttonMargin,
              position: 'absolute',
            }}
          >
            <Image
              source={require('../assets/icons/arrowleft.png')}
              style={{ width: buttonSize, height: buttonSize, tintColor: 'black' }}
            />
          </TouchableOpacity>
          {/* <Text style={styles.text}>1.203.000đ</Text> */}

          <Text style={[styles.checkout, styles.checkoutFlexBox]}>Thanh Toán</Text>

          {/* <Text style={[styles.amountPayable, styles.checkoutFlexBox]}>
            Số Tiền Phải Trả
          </Text> */}
          <View style={[styles.payAndOrderChild, styles.lineViewPosition]} />


          <TouchableHighlight onPress={onPressCompleted}>
            <Text style={[styles.payAndComplete, styles.raghuK44Typo1]}>
              Hoàn tất đơn hàng
            </Text>
          </TouchableHighlight>
          <Text style={[styles.paymentMethod, styles.raghuK44Typo1]}>
            Phương Thức Thanh Toán
          </Text>
          <Text style={[styles.deliveryAddress, styles.raghuK44Typo1]}>
            Địa chỉ giao hàng
          </Text>
          <View style={[styles.payAndOrderItem, styles.payLayout]} />
          <View style={[styles.payAndOrderInner, styles.payLayout]} />
          <Text style={[styles.raghuK44, styles.raghuK44Typo]}>{`12 Tăng Nhơn Phú,
Phường Tăng Nhơn Phú B,
Thành Phố Thủ Đức,
Thanh Trung - 0369864072`}</Text>
          <Image
            style={[styles.ellipseIcon, styles.payChildLayout1]}
            contentFit="cover"
            source={require("../assets/icons/ellipse-25.png")}
          />
          <Text style={[styles.debitCredit, styles.gpayTypo]}>
            Atm/ Thẻ Ghi Nợ
          </Text>
          <Text style={[styles.paypal, styles.gpayTypo]}>Paypal</Text>
          <Text style={[styles.bankTransfer, styles.gpayTypo]}>Ví Điện Tử</Text>
          <Text
            style={[styles.estimatedDelivery25Container, styles.selinaK213Position]}
          >
            <Text style={styles.raghuK44Typo}>{`giao hàng dự kiến: `}</Text>
            <Text style={styles.checkoutTypo}>25 March 2024</Text>
          </Text>
          <Text style={[styles.gpay, styles.gpayTypo]}>Thanh Toán Khi Nhận Hàng</Text>
          <View style={styles.addANewAddressParent}>
            <Text style={[styles.addANew, styles.text2Typo]}>
              Thêm địa chỉ mới
            </Text>
            <Text style={[styles.text2, styles.text2Typo]}>+</Text>
          </View>

          <Text style={[styles.selinaK213, styles.selinaK213Position]}>{`33/25/8 Đường 44,
Phường Phước Bình,
Thành Phố Thủ Đức,
Nguyên-0369864072`}</Text>

          <Image
            style={[styles.payAndOrderChild1, styles.payChildLayout1]}
            contentFit="cover"
            source={require("../assets/icons/ellipse-25.png")}
          />
          <Image
            style={[styles.payAndOrderChild2, styles.payChildLayout1]}
            contentFit="cover"
            source={require("../assets/icons/ellipse-23.png")}
          />
          <Image
            style={[styles.payAndOrderChild3, styles.payChildLayout1]}
            contentFit="cover"
            source={require("../assets/icons/ellipse-25.png")}
          />
          <Image
            style={[styles.payAndOrderChild4, styles.payChildLayout1]}
            contentFit="cover"
            source={require("../assets/icons/ellipse-25.png")}
          />
          <Image
            style={[styles.payAndOrderChild5, styles.payChildLayout1]}
            contentFit="cover"
            source={require("../assets/icons/ellipse-25.png")}
          />
          <Image
            style={[styles.payAndOrderChild6, styles.payChildLayout]}
            contentFit="cover"
            source={require("../assets/icons/ellipse-19.png")}
          />
          <Image
            style={[styles.payAndOrderChild7, styles.payChildLayout]}
            contentFit="cover"
            source={require("../assets/icons/ellipse-24.png")}
          />
          <View style={[styles.lineView, styles.lineViewPosition]} />
          <Image
            style={styles.deliveryShippingTimeIcon1}
            contentFit="cover"
            source={require("../assets/icons/4230551-delivery-shipping-time-icon-1.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  checkoutFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  groupChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lineViewPosition: {
    width: 321,
    left: 27,
    position: "absolute",
  },
  raghuK44Typo1: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  payLayout: {
    height: 118,
    width: 235,
    top: 421,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  raghuK44Typo: {
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
  },
  payChildLayout1: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  gpayTypo: {
    left: 75,
    fontFamily: FontFamily.quicksandMedium,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  selinaK213Position: {
    left: 85,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  text2Typo: {
    top: 0,
    fontFamily: FontFamily.quicksandMedium,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    textAlign: "left",
    color: '#00CC00',
    position: "absolute",
  },
  payChildLayout: {
    height: 16,
    width: 16,
    position: "absolute",
  },
  arrowLeftIcon: {
    top: 45,
    width: 24,
    height: 24,
    left: 27,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    top: 671,
    left: 250,
    fontSize: 30,
    textAlign: "right",
    color: "#27408B",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    position: "absolute",
  },
  checkout: {
    top: 50,
    left: 150,
    fontSize: 20,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
  },
  shoppingBagIcon: {
    height: "75%",
    width: "75%",
    top: "45%",
    right: "25%",
    bottom: "0%",
    left: "0%",
  },
  groupChild: {
    height: "62.5%",
    width: "62.5%",
    top: "10%",
    right: "0%",
    bottom: "37.5%",
    left: "37.5%",
  },
  text1: {
    top: "20%",
    left: "59.38%",
    fontSize: 10,
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorWhite,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  shoppingBagParent: {
    height: "3.94%",
    width: "8.53%",
    top: "3.33%",
    right: "7.2%",
    bottom: "92.73%",
    left: "84.27%",
    position: "absolute",
  },
  amountPayable: {
    top: 679,
    fontSize: 18,
    fontFamily: FontFamily.quicksandRegular,
    left: 27,
  },
  payAndOrderChild: {
    top: 680,
    backgroundColor: "#27408B",
    height: 50,
    borderRadius: Border.br_mini,
    width: 321,
  },
  payAndComplete: {
    top: 695,
    left: 122,
    color: Color.colorWhite,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
  },
  paymentMethod: {
    top: 111,
    color: Color.colorBlack,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    left: 27,
  },
  deliveryAddress: {
    top: 390,
    color: Color.colorBlack,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    left: 27,
  },
  payAndOrderItem: {
    backgroundColor: Color.colorBlack,
    left: 27,
  },
  payAndOrderInner: {
    left: 268,
    backgroundColor: "#e8e8e8",
  },
  raghuK44: {
    left: 326,
    top: 440,
    fontFamily: FontFamily.quicksandMedium,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
    color: Color.colorBlack,
  },
  ellipseIcon: {
    left: 282,
    top: 437,
    height: 30,
    width: 30,
  },
  debitCredit: {
    top: 199,
  },
  paypal: {
    top: 244,
  },
  bankTransfer: {
    top: 294,
  },
  checkoutTypo: {
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
  },
  estimatedDelivery25Container: {
    top: 623,
    color: Color.colorBlack,
  },
  gpay: {
    top: 153,
  },
  addANew: {
    left: 20,
    textDecoration: "underline",
  },
  text2: {
    left: 0,
  },
  addANewAddressParent: {
    top: 559,
    width: 167,
    height: 20,
    left: 27,
    position: "absolute",
  },
  selinaK213: {
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    top: 440,
    color: Color.colorWhite,
  },
  payAndOrderChild1: {
    top: 148,
    left: 27,
  },
  payAndOrderChild2: {
    left: 41,
    top: 437,
    height: 30,
    width: 30,
  },
  payAndOrderChild3: {
    top: 194,
    left: 27,
  },
  payAndOrderChild4: {
    top: 240,
    left: 27,
  },
  payAndOrderChild5: {
    top: 290,
    left: 27,
  },
  payAndOrderChild6: {
    top: 155,
    left: 34,
  },
  payAndOrderChild7: {
    top: 444,
    left: 48,
  },
  lineView: {
    top: 355,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.4)",
    borderTopWidth: 0.2,
    height: 0,
  },
  deliveryShippingTimeIcon1: {
    top: 609,
    width: 45,
    height: 45,
    left: 27,
    position: "absolute",
    overflow: "hidden",
  },
  payAndOrder: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default PayAndOrder;
