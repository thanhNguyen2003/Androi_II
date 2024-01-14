//trang chủ
import Icon from "@expo/vector-icons/Ionicons";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import {
  Color,
  FontFamily,
  FontSize
} from "../../GlobalStyles";
import { GET_ALL, GET_IMG } from "../../api/apiService";
import Title from "../../components/Title";
import ListCategory from "./ListCategory";
import ProductItem from "./ProductItem";

const toggleTitleVisibility = () => {
  setTitleVisible(!isTitleVisible);
};
const HomeMainScreen = ({ navigation }) => {
  const [carData, setCarData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    GET_ALL("products")
      .then((response) => {
        const responseData = response.data;
        if (responseData && Array.isArray(responseData.content)) {
          setCarData(responseData.content); 
        } else {
          console.error(
            "Data received from the API is not in a supported format."
          );
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.TopNav}>
        <Image
          style={[styles.TopNavChild, styles.TopLayout]}
          contentFit="cover"
          source={require("../../assets/icons/MenuNav.png")}
        />
        <Text style={[styles.delivery, styles.homelayout, styles.popularTypo1]}>
          Home
        </Text>
      </View>

      <Image
        style={styles.homeChild}
        contentFit="cover"
        source={require("../../assets/images/logo.png")}
      />

      <SafeAreaView style={{ flex: 0.25, marginHorizontal: 20, top: 100 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",

            marginVertical: 30,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              elevation: 2,
              width: "85%",
              backgroundColor: "#FFF",
              paddingHorizontal: 20,
              marginLeft: 2,
              height: 45,
              borderRadius: 10,

              top: -30,
            }}
          >
            <Icon
              name="ios-search"
              size={22}
              color="#4f4a4a"
              style={{ marginRight: 10 }}
            />
            <TextInput placeholder="Tìm Kiếm..." />
          </View>

          <View
            style={{
              alignItems: "center",
              elevation: 2,
              width: "15%",
              backgroundColor: "#FFF",
              marginLeft: 5,
              height: 45,
              borderRadius: 10,
              marginLeft: 1,
              justifyContent: "center",
              top: -30,
            }}
          >
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                source={require("../../images/sort.png")}
                style={{
                  width: 18,
                  height: 25,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      {isLoading ? (
        <ActivityIndicator size="large" color="#ff591d" />
      ) : (
        <SafeAreaView style={{ flex: 1, zIndex: 1 }}>
          <ScrollView>
            <Title content="Thương Hiệu*"></Title>

            <ListCategory />

            <Title content="Sản Phẩm*"></Title>
            <FlatList
              scrollEnabled={false}
              data={carData} 
              keyExtractor={(item, index) => index.toString()} 
              numColumns={2}
              renderItem={({ item, index }) => (
                <View style={styles.content}>
                  {isLoading ? (
                    <ActivityIndicator size="large" color="#ff591d" />
                  ) : (
                    <TouchableOpacity
                      key={item.id}
                      style={{ marginBottom: 1, borderRadius: 15 }}
                      activeOpacity={0.0}
                      underlayColor="#FFF"
                      onPress={() => {
                        const updatedCoffee = { ...item, total: item.price };
                        navigation.navigate("Details", {
                          item: updatedCoffee,
                        });
                      }}
                    >
                      <ProductItem
                        key={index}
                        imageSource={GET_IMG("products", item.photo)}
                        textContent={item.title}
                        textPrice={item.price}
                      />
                    </TouchableOpacity>
                  )}
                </View>
              )}
            />
          </ScrollView>
        </SafeAreaView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContent: {
    paddingHorizontal: 16, 
  },
  container: {
    backgroundColor: "transparent",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },

  //home
  homelayout: {
    top: 45,
    marginHorizontal: 140,
    position: "absolute",
    zIndex: 1,
  },
  delivery: {
    fontSize: 28,
    color: "#ff591d",
  },

  popularTypo1: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "right",
    position: "absolute",
  },
//background đầu
  TopLayout: {
    height: 90,
    width: 490,
    left: -40,
    position: "absolute",
    zIndex: 1,
    top: 0,
  },
//logo góc trái
  homeChild: {
    top: 25,
    width: 80,
    height: 50,
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
    paddingVertical: 5,

    flexDirection: "row",
    alignIstems: "center",
    elevation: 2,
    width: "85%",
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    height: 45,
    borderRadius: 10,
    marginLeft: 1,
    top: -30,
  },
  sectionHeader: {
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 5,
    left: 5,
  },
  item: {
    marginHorizontal: 10,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: "black",
    marginTop: 5,
  },
  slidersIcon: {
    left: 340,
    position: "absolute",
  },
});
export default HomeMainScreen;
