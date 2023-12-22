import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { myColors } from '../Utils/MyColors';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  // chuyển trang {
  const nav = useNavigation()
  useEffect(() => {
    setTimeout(() => {
      nav.replace('Login');
    }, 3500);//tốc độ ngừng màng hình
  }, []);
  //}
  return (
    <View style={{ backgroundColor: myColors.primary, flex: 1, justifyContent: 'center' }}>
      <StatusBar style='light' />
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 15 }}>
        <Image
          style={{ height: 250, width: 250 }}
          source={require('../assets/Logo.png')} />
      </View>
    </View>
  );
};

export default Splash;