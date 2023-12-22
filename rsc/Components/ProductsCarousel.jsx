import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, FlatList,TouchableOpacity} from 'react-native';
import { fruits } from '../Utils/Date';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { FontAwesome } from '@expo/vector-icons';

const ProductCarousel = () => {
    return (
        <View >
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={fruits}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                    onPress={()=>{
                        console.log("click");
                    }}
                    activeOpacity={0.7}
                        style={{
                            height: responsiveHeight(33),
                            borderWidth: 2,
                            borderColor: "#E3E3E3",
                            width: responsiveWidth(45),
                            marginRight: 15,
                            borderRadius: 15,
                        }}
                    >
                        <Image
                            style={{ height: 120, resizeMode: "contrain" }}
                            source={{ uri: item.img }}
                        />
                        <View style={{ paddingHorizontal: 10, gap: 3 }}>
                            <Text style={{ fontSize: 18, fontWeight: "600" }}>
                                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                            </Text>
                            <Text style={{ color: "grey" }}>{item.pieces}</Text>
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginTop: 10,
                            }}>
                                <Text style={{ fontSize: 23, fontWeight: "bold", color:"red" }}>{item.price}đ</Text>
                                <FontAwesome name="plus-square" size={30} color="#00CD00" />
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};
export default ProductCarousel;