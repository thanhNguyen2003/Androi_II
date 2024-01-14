import React from 'react';
import { View,Image, Text, StyleSheet } from 'react-native';
import { FontFamily, FontSize, Color, Border } from "../../GlobalStyles";
const ItemOrder = ({  imageSource, textContent, textPrice }) => {
  return (
    <View style={styles.container}>
   <Image 
            source={require("../../assets/images/aobalo1.jpg")} 
        style={[styles.bagChild3, styles.bagChild3Layout]}
        contentFit="cover"
    
      />

      <Text style={[styles.cottonQueenT, styles.NameTypo]}>
      {textContent}
      </Text>
      

      <Text style={[styles.text9, styles.priceTypo]}>${textPrice}</Text>
      <View style={styles.content1}>
      <Text style={[styles.text9, styles.text9Typo]}>Số Lượng :</Text>

      
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:200,
    height:95,
 
    marginBottom:20,
    paddingHorizontal: 10,
  },
  text9Typo: {
    left: 200,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.montserratRegular,
    fontWeight: "500",
    textAlign: "left",
    color: "#F3A932",
    position: "absolute",
  },
  priceTypo: {
    left: 200,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "500",
    textAlign: "left",
    color: "#F3A932",
    position: "absolute",
  },
  NameTypo: {
    left: 200,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  content1: {
    top:"45%",
       
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        
      },
      cottonQueenT: {
        top: 117,
      }, 
       bagChild3: {
        top: 117,
      },
  bagChild3Layout: {
    height: 90,
    width: 150,
    left: "10%",
    borderRadius: Border.br_mini,
    position: "absolute",
  },
});

export default ItemOrder;
