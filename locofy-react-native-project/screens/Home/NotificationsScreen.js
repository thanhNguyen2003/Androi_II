//thông báo
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, SafeAreaView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0; 
function NotificationScreen() {
  const notifications = [
    {
      id: 1,
      text: 'Bạn có một tin nhắn mới',
    },
    {
      id: 2,
      text: 'Một thông báo khác',
    },
    {
      id: 3,
      text: 'Thông báo quan trọng',
    },
  ];

  const fontSize = Math.min(width, height) * 0.04; 
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
      <View style={styles.titleContainer}>
        <Text style={[styles.title, { fontSize: fontSize * 1.5 }]}>Thông báo</Text>
      </View>
      <View style={styles.notificationList}>
        {notifications.map((notification) => (
          <TouchableOpacity key={notification.id} style={styles.notificationItem}>
            <Ionicons name="notifications" size={width * 0.1} color="tomato" />
            <Text style={[styles.notificationText, { fontSize }]}>{notification.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: statusBarHeight,
  },
  titleContainer: {
    padding: width * 0.05,
  },
  title: {
    fontWeight: 'bold',
    
  },
  notificationList: {

    padding: width * 0.05,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.02,
    backgroundColor: 'white',
    padding: width * 0.05,
    borderRadius: width * 0.02,
    elevation: 3,
  },
  notificationText: {
    marginLeft: width * 0.05,
  },
});

export default NotificationScreen;
