// giỏ hàng
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { v4 as uuidv4 } from "uuid";
import { GET_IMG } from '../../api/apiService';

function OrderScreen({ route, navigation }) {
  const { item, quantity } = route.params;
  const [carData, setCarData] = useState([]);
  useEffect(() => {
    if (route.params && route.params.item) {
      handleAddCoffee(route.params.item, route.params.quantity);
    }
  }, [route.params]);

  const handleAddCoffee = (item, quantity) => {
    if (item) {
      const newItem = { ...item, key: uuidv4(), quantity: quantity || 1 };
      setCarData((prevData) => [...prevData, newItem]);
    }
  };

  const handleDeleteCoffee = (data, rowMap) => {
    rowMap[data.item.key].closeRow();
    setCarData((prevData) => prevData.filter((item) => item.key !== data.item.key));
  };

  const handleNext = () => {
    navigation.navigate("PayAndOrder", { carData });
  };

  const totalSum = carData.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const formattedPrice = (price) => {
    return new Number(price).toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="keyboard-return" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.title}>Giỏ Hàng</Text>
      </View>
      <View style={styles.content}>
        <SwipeListView
          data={carData}
          renderItem={(data, rowMap) => (
            <View key={data.item.key}>
              <View style={styles.imageContainer}>
                <Image
                  source={{
                    uri: GET_IMG("products", data.item.photo),
                  }}
                  style={styles.image}
                  resizeMode="contain"
                />
                <View style={{ flexDirection: "column", marginLeft: "1%", marginTop: "5%" }}>
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>{data.item.title}</Text>

                  <Text style={{ marginLeft: "20%", marginTop: "5%", fontWeight: "bold", fontSize: 18 }}>
                    {data.item.price}
                  </Text>
                  <Text style={{ marginTop: "-3%", fontSize: 14, fontWeight: "bold" }}>X{data.item.quantity}</Text>
                </View>
              </View>
            </View>
          )}
          renderHiddenItem={(data, rowMap) => (
            <TouchableOpacity
              style={styles.rightAction}
              onPress={() => {
                handleDeleteCoffee(data, rowMap);
              }}
            >
              <View style={styles.BTNrightAction}>
                <AntDesign style={{ marginTop: 35 }} name="delete" size={50} color="#fff" />
              </View>
            </TouchableOpacity>
          )}
          rightOpenValue={-75}
          keyExtractor={(item) => item.key}
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.price}>
          <Text style={styles.totalPrice}>
            Tổng Tiền</Text>
          <Text style={styles.byn900}>{formattedPrice(totalSum)}</Text>
        </View>
        <TouchableOpacity style={{ flex: 1 }} onPress={handleNext}>
          <View style={styles.button}>
            <Ionicons name="cart-outline" size={25} color="#FFF" />
            <Text style={styles.next}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default OrderScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "10%",
  },
  title: {
    marginTop: "1%",
    fontWeight: "bold",
    fontSize: 32,
    marginLeft: "30%",
  },
  BTNrightAction: {
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#FF9999",
    overflow: "hidden",
    height: "77%",
    marginLeft: "81%",
    width: "19%",
    marginTop: "7.7%",
  },
  next: {
    fontSize: 14,
    lineHeight: 23,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
  },
  button: {
    borderRadius: 30,
    backgroundColor: "#324a59",
    height: "60%",
    width: "70%",
    marginHorizontal: 15,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginRight: "10%",
    marginLeft: "25%"
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginTop: "auto",
    height: "12%",
  },
  price: {
    marginTop: "-5%",
    alignItems: "center",
    marginLeft: "10%",
  },
  totalPrice: {
    marginRight: "5%",
    fontSize: 17,
    fontWeight: "600",
    fontWeight: "bold",
  },
  byn900: {
    fontSize: 16,
    fontWeight: "bold",
  },
  rightAction: {
    marginLeft: -1,
  },
  imageContainer: {
    flexWrap: "wrap",
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#FFE4E1",
    overflow: "hidden",
    marginLeft: 1,
    height: 135,
    marginTop: 30
  },
  image: {
    width: 140,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    paddingHorizontal: 10,
    paddingTop: 10,
    marginLeft: -6,
    marginHorizontal: "auto",
    marginTop: -15
  },
});

