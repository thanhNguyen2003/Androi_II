import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { myColors } from '../Utils/MyColors';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const [isVisbile, setisVisbile] = useState(true);
  const nav = useNavigation()
  const [username, setUserName] = useState('');
  const [usernameError, setUserNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPassWordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFF99" }}>
      <StatusBar />
      <ScrollView style={{ flex: 1, paddingTop: 30 }}>
        <Image
          style={{ alignSelf: "center", height: 100, width: 100 }}
          source={require('../assets/Logo.png')} />

        <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
          {/* --------------------------------------------Đăng ký-------------------------------------------------- */}
          <Text style={{ color: myColors.third, fontSize: 24, fontWeight: "500" }}>
            Đăng ký
          </Text>
          <Text style={{ fontSize: 16, fontWeight: '400', color: 'grey', marginTop: 10 }}>
            Nhập thông tin xác thực của bạn để tiếp tục
          </Text>
          {/* --------------------------------------------Tên tài khoản-------------------------------------------- */}
          <Text style={{ fontSize: 16, fontWeight: '500', color: 'grey', marginTop: 40 }}>
            Tên tài khoản
          </Text>
          <TextInput
            maxLength={25}
            value={username}
            onChangeText={(text) => {
              setUserName(text);
              setUserNameError(''); // Xóa thông báo lỗi khi người dùng thay đổi nội dung name
            }}
            style={{
              borderColor: "#FFFFCC",
              backgroundColor: "#FFFFCC",
              borderBottomWidth: 2,
              fontSize: 16,
              marginTop: 15
            }} />
          {usernameError ? (
            <Text style={{ color: 'red', fontSize: 14 }}>{usernameError}</Text>
          ) : null}

          {/* --------------------------------------------Email---------------------------------------------------- */}
          <Text style={{ fontSize: 16, fontWeight: '500', color: 'grey', marginTop: 15 }}>
            Email
          </Text>
          <TextInput
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              setEmailError(''); // Xóa thông báo lỗi khi người dùng thay đổi nội dung email
            }}
            style={{
              borderColor: "#FFFFCC",
              backgroundColor: "#FFFFCC",
              borderBottomWidth: 2,
              fontSize: 16,
              marginTop: 15
            }} />
          {emailError ? (
            <Text style={{ color: 'red', fontSize: 14 }}>{emailError}</Text>
          ) : null}
          {/* --------------------------------------------Mật khẩu------------------------------------------------ */}
          <Text style={{ fontSize: 16, fontWeight: '500', color: 'grey', marginTop: 15 }}>
            Mật khẩu
          </Text>
          <View style={{
            backgroundColor: "#FFFFCC",
            borderColor: "#FFFFCC",
            borderBottomWidth: 2,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 15
          }}>
            <TextInput
              secureTextEntry={isVisbile}
              maxLength={25}
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setPassWordError(''); // Xóa thông báo lỗi khi người dùng thay đổi nội dung pass
              }}
              style={{
                fontSize: 17,
                flex: 0.9
              }} />
            <Ionicons onPress={() => {
              setisVisbile(!isVisbile)
            }} name={isVisbile == true ? "eye-off-outline" : "eye-outline"}
              size={24} color="black"
              style={{ marginRight: 10 }} />
          </View>
          {passwordError ? (
            <Text style={{ color: 'red', fontSize: 14 }}>{passwordError}</Text>
          ) : null}
          {/* --------------------------------------------Xác nhận lại mật khẩu--------------------------------------- */}
          <Text style={{ fontSize: 16, fontWeight: '500', color: 'grey', marginTop: 15 }}>
            Xác nhận lại mật khẩu
          </Text>
          <View style={{
            backgroundColor: "#FFFFCC",
            borderColor: "#FFFFCC",
            borderBottomWidth: 2,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 15
          }}>
            <TextInput
              secureTextEntry={isVisbile}
              maxLength={25}
              value={confirmPassword}
              onChangeText={(text) => {
                setConfirmPassword(text);
                setConfirmPasswordError(''); // Xóa thông báo lỗi khi người dùng thay đổi nội dung pass
              }}
              style={{
                fontSize: 17,
                flex: 0.9
              }} />
            <Ionicons onPress={() => {
              setisVisbile(!isVisbile)
            }} name={isVisbile == true ? "eye-off-outline" : "eye-outline"}
              size={24} color="black"
              style={{ marginRight: 10 }} />
          </View>
          {confirmPasswordError ? (
            <Text style={{ color: 'red', fontSize: 14 }}>{confirmPasswordError}</Text>
          ) : null}
          {/* --------------------------------------------nút đăng ký---------------------------------- */}
          <TouchableOpacity
            onPress={() => {
              // Kiểm tra đuôi username
              if (username == '') {
                setUserNameError('Tên không được bỏ trống');
                return;
              }
              // Kiểm tra đuôi email
              const emailPattern = /\b[A-Za-z0-9._%+-]+@gmail\.com\b/;
              if (!emailPattern.test(email)) {
                setEmailError('Email không hợp lệ');
                return;
              }
              // Kiểm tra đuôi passsword
              if (password == '') {
                setPassWordError('Mật khẩu không được bỏ trống');
                return;
              }
              // Kiểm tra xác nhận lại mật khẩu
              if (password !== confirmPassword) {
                setConfirmPasswordError('Mật khẩu xác nhận không đúng');
                return;
              }
              // Kiểm tra các điều kiện đăng ký khác
              if (username !== '' &&
                email !== '' &&
                password !== '' &&
                confirmPassword !== '')
                // Thực hiện các hành động khi xác nhận mật khẩu đúng
                nav.navigate('Login');
            }}
            style={{
              backgroundColor: "#00FF00",
              marginTop: 20,
              height: 50,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{
              fontSize: 19,
              color: myColors.secondary,
              fontWeight: "500"
            }}>
              Đăng ký
            </Text>
          </TouchableOpacity>
          {/* --------------------------------------------chính sách----------------------------------------------- */}
          <View style={{ alignItems: "center" }}>
            <Text numberOfLines={2}
              style={{
                fontSize: 12,
                fontWeight: "400",
                color: "black",
                marginTop: 15,
                letterSpacing: 0.7,
                lineHeight: 25,
                width: "95%",
                opacity: 0.9,
              }}>
              Điều khoản dịch vụ và Chính sách quyền riêng tư
            </Text>
            {/* --------------------------------------------đăng nhập------------------------------------------------ */}
            <View style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15,
              gap: 5,
            }}>
              <Text style={{ fontSize: 12 }}>
                Bạn có muốn đăng nhập tài khoản sẵn có không?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  nav.navigate('Login')
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: "#00FF00",
                    fontWeight: "600",
                  }}>
                  Đăng nhập
                </Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;