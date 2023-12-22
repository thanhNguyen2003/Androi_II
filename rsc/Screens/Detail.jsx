import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const Detail = () => {
    const nav = useNavigation()
    return (
        <SafeAreaView style={{ flex: 1, gap: 20 }}>
            <StatusBar backgroundColor='white' />
            <View>
                <Image
                    style={{ height: 300, width: 370, marginTop: 30, borderBottomLeftRadius: 15 }}
                    source={{
                        uri: "https://img.freepik.com/free-vector/hand-drawn-international-day-coffee_52683-45413.jpg?size=626&ext=jpg&uid=R118777427&ga=GA1.1.1929970544.1696121547&semt=sph"
                    }} />
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    position: "absolute",
                    width: "100%",
                    paddingHorizontal: 15,
                    alignItems: "center"
                }}>
                    <Ionicons
                        onPress={() => {
                            nav.goBack
                        }}
                        name="chevron-back" size={28} color="black" />
                    <Feather name="share" size={28} color="black" />
                </View>
            </View>
            <View style={{ paddingHorizontal: 15 }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <Text style={{ fontSize: 35, color: "black" }}>
                        cafe
                    </Text>
                    <MaterialIcons name="favorite-border" size={24} color="black" />
                </View>
                {/* ----------------------------------------------- */}
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <Text style={{ fontSize: 18, color: "black" }}>
                        fhvhvbnb
                    </Text>
                </View>
            </View>

        </SafeAreaView>
    );
};

export default Detail;