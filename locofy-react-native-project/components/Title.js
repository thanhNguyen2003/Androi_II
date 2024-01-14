import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Title = (props) => {
  return (
    <View style={styles.LayoutTitle}>
      <View>
        <Text style={styles.Title1}>{props.content}</Text>
     
      </View>
     
    </View>
 
  );
};
export default Title;
const styles = StyleSheet.create({
  LayoutTiltle: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  Title1: { color: "#ff591d", fontWeight: "700",fontSize:16,paddingHorizontal:10,   marginTop: 10,  textDecorationLine: "underline", 

  marginBottom: 10,},

});
