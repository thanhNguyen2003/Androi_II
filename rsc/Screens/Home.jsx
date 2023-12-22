import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeSearch from '../Components/HomeSearch';
import HomeBaner from '../Components/HomeBaner';
import ProductTitle from '../Components/ProductsTitle';
import ProductCarousel from '../Components/ProductsCarousel';
import { ScrollView, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
const Home = () => {
    return (
        <SafeAreaView style={{
            backgroundColor: "#FFF5EE",
            flex: 1,
        }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    flex: 1,
                    paddingHorizontal: 2,
                    // paddingTop: 5,
                }}>
                <View style={{ gap: 20, paddingBottom: 20 }}>
                    <HomeSearch />
                    <HomeBaner />
                    <ProductTitle title="Ưu đãi độc quyền" />
                    <ProductCarousel />
                    <ProductTitle title="bhbj" />
                    <ProductCarousel />
                    <ProductTitle title="aaa" />
                    <ProductCarousel />

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default Home