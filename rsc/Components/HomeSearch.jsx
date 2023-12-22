import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { Feather } from '@expo/vector-icons';
const HomeSearch = () => {
    return (
        <View style={{
            backgroundColor: "#DCDCDC",
            height: responsiveHeight(5.5),
            borderRadius: 30,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 15,
            gap:10,
            marginTop:15
        }}>
            <Feather name="search" size={24} color="black" />
            <TextInput style={{flex:1}} placeholder="Tìm Kiếm" />
        </View>
    );
};
export default HomeSearch;