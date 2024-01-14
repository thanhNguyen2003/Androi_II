//menu dưới
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import ChatScreen from "./Home/ChatScreen";
import HomeMainScreen from "./Home/HomeMainScreen";
import NotificationsScreen from "./Home/NotificationsScreen";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeMainScreen" // Đặt trang mặc định là "Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Trang chủ") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Tin nhắn") {
            iconName = focused
              ? "chatbubble-ellipses"
              : "chatbubble-ellipses-outline";
          } else if (route.name === "Thông báo") {
            iconName = focused ? "notifications" : "notifications-outline";
          } else if (route.name === "Tôi") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Trang chủ" component={HomeMainScreen}options={{
          headerShown: false, }}/>
      <Tab.Screen name="Tin nhắn" component={ChatScreen} options={{
          headerShown: false, }}/>
      <Tab.Screen name="Thông báo" component={NotificationsScreen}  options={{
          headerShown: false, }}/>
      <Tab.Screen name="Tôi" component={Profile} options={{
          headerShown: false, }}/>
    </Tab.Navigator>
  );
};

export default TabNavigator;
