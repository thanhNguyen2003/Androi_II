import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import React, { useRef, useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import InputSpinner from "react-native-input-spinner";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { FontFamily } from "../../GlobalStyles";
import { GET_IMG } from "../../api/apiService";
import Title from "../../components/Title";

function Details({ route, navigation }) {
  const { item } = route.params;
  const [total, setTotalPrice] = useState(item.price);
  const [quantity, setQuantity] = useState(1);

  const [count, setCount] = useState(0);
  const animatedY = useSharedValue(0);
  const animateX = useSharedValue(0);
  const scale = useSharedValue(0);
  const scale2 = useSharedValue(1);
  const [btnClicked, setBtnclicked] = useState(false);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: animateX.value },
        { translateY: animatedY.value },
        { scale: scale.value },
      ],
    };
  });

  const animatedStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale2.value }],
    };
  });

  const animation = useRef(null);
  //định dạng tiền tệ
  const formattedPrice = (price) => {
    return new Number(price).toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };
  const onPressCompleted = () => {
    navigation.navigate("OrderCompleted");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentTop}>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="keyboard-return" size={24} color="black" />
        </TouchableOpacity>
        
        <Text style={styles.title}>Chi Tiết </Text>
        <TouchableOpacity
          key={item.id}
          style={{ marginBottom: 20, borderRadius: 15 }}
          activeOpacity={0.0}
          underlayColor="#FFF"
          onPress={() => {
            const updatedCoffee = { ...item, total: item.price };
            navigation.navigate("Bag", {
              item: updatedCoffee,
            });
          }}
        >
          <AntDesign
            name="shoppingcart"
            size={24}
            color="#001833"
            style={{ top: "30%" }}
          />
        </TouchableOpacity>

        <Animated.View
          style={[
            {
              width: 20,
              height: 20,
              backgroundColor: "red",
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: "1%",
              left: "97%",
            },
            animatedStyle2,
          ]}
        >
          <Text style={{ color: "white", fontSize: 16 }}>{count}</Text>
        </Animated.View>
        
      </View>
      <ScrollView>
        <View style={styles.image}>
          <Image
            source={{
              uri: GET_IMG("products", item.photo),
            }}
            style={{
              width: 452,
              height: 190,
              paddingHorizontal: 22,
              paddingTop: 20,
            }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.content1}>
          <Text style={styles.content}>{item.title}</Text>
          <InputSpinner
            max={10}
            min={1}
            step={1}
            skin={"round"}
            color={"#FFF"}
            value={quantity}
            height={40}
            width={100}
            shadow={false}
            background="#FFF"
            showBorder={false}
            onChange={(num) => {
              const newTotal = num * item.price;
              setTotalPrice(newTotal);
              setQuantity(num);
            }}
          />
        </View>
        <View style={styles.contentCenter}>
          <Title content="Giá Niêm Yết:"></Title>
          <Text style={styles.contentprice}>
            {formattedPrice(item.price)} VND
          </Text>
          <Title content="Thông Tin Chi Tiết:"></Title>

          <Text style={styles.contentprice}>{item.description}</Text>
          <View style={styles.image}>
            <Image
              source={{
                uri: GET_IMG("products", item.photo),
              }}
              style={{
                width: 200,
                height: 90,
                paddingHorizontal: 22,
                paddingTop: 20,
              }}
              resizeMode="contain"
            />
          </View>
          <Title content="Thông Số Kĩ Thuật:"></Title>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>Năm sản xuất:</Text>
            <Text style={styles.specValue}>2020</Text>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>Tình trạng:</Text>
            <Text style={styles.specValue}>Xe mới</Text>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>Số Km đã đi:</Text>
            <Text style={styles.specValue}>0 Km</Text>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>Xuất xứ:</Text>
            <Text style={styles.specValue}>Nhập khẩu</Text>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>Kiểu dáng:</Text>
            <Text style={styles.specValue}>Sportbike</Text>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>Loại thắng:</Text>
            <Text style={styles.specValue}>Thắng APS</Text>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>Động cơ:</Text>
            <Text style={styles.specValue}>Xăng 1.5 L</Text>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>Màu ngoại thất:</Text>
            <Text style={styles.specValue}>Trẻ trung</Text>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specLabel}>Dẫn động:</Text>
            <Text style={styles.specValue}>FWD - Dẫn động cầu sau</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.contentBottom}>
        <LottieView
          autoPlay
          loop={true}
          ref={animation}
          source={require("../../assets/phone.json")} // Replace with your animation source
          style={{
            right: "35%",
            top: "13%",
          }}
        />
        <View style={styles.totalAmount}>
          <Text style={styles.totalAmount2}>Số Lượng: {quantity}</Text>

          <Text style={styles.byn300}>Giá: {formattedPrice(total)}</Text>
        </View>
        <Animated.View
          style={[
            {
              width: 20,
              height: 20,
              borderRadius: 15,
              backgroundColor: "red",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
            },
            animatedStyle,
          ]}
        >
          <Text style={{ color: "white", fontSize: 16 }}>{"+1"}</Text>
        </Animated.View>
        <TouchableOpacity
          disabled={btnClicked}
          style={{ marginBottom: 10, borderRadius: 15 }}
          activeOpacity={0.0}
          underlayColor="#FFF"
          onPress={() => {
            if (animateX.value === 0) {
              setBtnclicked(true);
              scale.value = 1;
              animateX.value = withTiming(145, { duration: 1500 });
              animatedY.value = withTiming(-668, { duration: 1500 });
              setTimeout(() => {
                scale.value = 0;
                scale2.value = withSpring(1.5);
                setCount(count + 1);
                animateX.value = withTiming(0, { duration: 1500 });
                animatedY.value = withTiming(0, { duration: 1500 });
                setTimeout(() => {
                  scale2.value = withSpring(1);
                  setBtnclicked(false);
                }, 170);
              }, 1500);
            }
          }}
        >
          <View style={styles.rectangleView}>
            <Text style={styles.next}>Đặt Hàng</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    marginTop: 50,
  },
  contentTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
  },
  content1: {
    marginHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentBottom: {
    position: "absolute", // Position at the bottom
    bottom: 0, // Stick to the bottom of the screen,

    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2, // Adjust the opacity as needed
    shadowRadius: 2, // Adjust the radius as needed
    elevation: 2, // Android shadow
  },
  contentCenter: {
    marginTop: 10,
    marginHorizontal: "5%",
    width: "90%",
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.PoppinsRegular,
    color: "#001833",
    textAlign: "center",
  },
  content: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: "700",
    letterSpacing: 0,
    fontFamily: FontFamily.PoppinsRegular,
    color: "#001833",
    textAlign: "left",
  },
  contentprice: {
    marginHorizontal: 30,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "700",
    letterSpacing: 0,
    fontFamily: FontFamily.PoppinsRegular,
    color: "#001833",
    textAlign: "left",
  },

  contentdes: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "700",
    letterSpacing: 0,
    fontFamily: FontFamily.PoppinsRegular,
    color: "#001833",
    textAlign: "left",
  },

  rectangleView: {
    borderRadius: 30,
    backgroundColor: "#324a59",
    height: 46,
    marginHorizontal: "30%",
    marginBottom: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 225,
  },

  totalAmount: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 100,
  },
  totalAmount2: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: FontFamily.PoppinsRegular,
    color: "#001833",
    textAlign: "left",

    right: 40,
    bottom: -10,
    transform: [
      {
        rotate: "0.14deg",
      },
    ],
  },
  byn300: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: FontFamily.PoppinsBold,
    color: "#001833",
    textAlign: "right",

    height: 23,
    bottom: -10,
    transform: [
      {
        rotate: "0.14deg",
      },
    ],
  },
  next: {
    fontSize: 14,
    lineHeight: 23,
    fontWeight: "600",
    fontFamily: FontFamily.PoppinsBold,
    color: "#fff",
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  specRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  specLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  specValue: {
    fontSize: 16,
  },
});

export default Details;
