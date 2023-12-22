import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeBaner = () => {
    return (
        <View>
            <Image
          style={{ alignSelf: "center", height: 200, width: 360 }}
          source={require('../assets/baner.jpg')} />
        </View>)
}
export default HomeBaner