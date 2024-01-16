import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <TextInput
        style={styles.input}
        placeholder="Change Password"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Change Email"
        keyboardType="email-address"
      />
      <Button title="Save" onPress={() => {/* Xử lý lưu thay đổi */ }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default SettingScreen;
