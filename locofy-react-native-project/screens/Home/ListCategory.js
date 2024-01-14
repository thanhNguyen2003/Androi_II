import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList ,TouchableOpacity,ActivityIndicator} from 'react-native';
import { Color, FontSize,FontFamily } from "../../GlobalStyles";
import {GET_ALL,GET_IMG} from "../../api/apiService"

export default () => {
  const [categoriData, setCarData] = useState([]);
const [isLoading, setIsLoading] = useState(true);
useEffect (() => {
GET_ALL("brands")
.then((response) => {
const responseData = response.data;
if (responseData && Array.isArray(responseData.content)) {
  setCarData(responseData.content); 
} else {
console.error( "Data received from the API is not in a supported format." );
}
setIsLoading (false);
})
.catch((error) => {
console.error("Error fetching data: ", error);
setIsLoading (false);
});
}, []);


const renderItem = ({ item }) => (
  <TouchableOpacity
    onPress={() => alert(`press ${item.title}`)}
    style={{
      justifyContent: 'center',
      alignItems: 'center',
   
    }}>
    <Image
      style={{
        width: 100,
        height:60,
        resizeMode: 'stretch',
      margin:5,
        
      }}
      source={{
        uri: GET_IMG("brands", item.photo)
      }}
    />
    <Text style={{
      margin:10,
      fontFamily: FontFamily.PoppinsBold,
      color: Color.colorBlack,
      fontSize: FontSize.size_base,
    }}>{item.title}</Text>
  </TouchableOpacity>
);

return (
  <View style={styles.container}>
    <SafeAreaView>
      {isLoading ? (
   <ActivityIndicator size="large" color="#ff591d" />
      ) : (
        <FlatList
      
          horizontal
          data={categoriData}
          keyExtractor={item => item.title}
          renderItem={renderItem}
        />
      )}
    </SafeAreaView>
  </View>
);
};
  

const styles = StyleSheet.create({
  container: {
  
    flex: 1,
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5, 
    shadowRadius: 20,
    elevation: 2, 
  },
  sectionHeader: {
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 10,
    zIndex: 0,
    left:5,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {

   
  },
  itemText: {
    color: "black",
    marginTop: 5,
    textAlign: "center",
  },
});
