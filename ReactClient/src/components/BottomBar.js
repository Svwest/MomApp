import React, { useState } from "react";
import { Text } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/ProfileScreen";
import MainScreen from "../screens/MainScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ChatScreen from "../screens/ChatScreen";
import FindFriendsScreen from "../screens/FindFriendsScreen";
import EventsScreen from "../screens/EventsScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const BottomBar = ({navigation}) => {
  const [index, setIndex] = useState(2);
  const BarStack = createBottomTabNavigator();

  const routes = [
    {
      key: "profile",
      title: "Profile",
      focusedIcon: "account",
      unfocusedIcon: "account-outline"
    },
    {
      key: "events",
      title: "Events",
      focusedIcon: "view-list",
      unfocusedIcon: "view-list-outline"
    },
    {
      key: "main",
      title: "Main",
      focusedIcon: "home",
      unfocusedIcon: "home-outline"
    },
    {
      key: "findfriend",
      title: "Find Friend",
      focusedIcon: "map",
      unfocusedIcon: "map-outline"
    },
    {
      key: "chat",
      title: "Chat",
      focusedIcon: "chat",
      unfocusedIcon: "chat-outline"
    }
  ];

  return (
    <BarStack.Navigator
      screenOptions={{
        tabBarInactiveTintColor: "grey",
        activeTintColor: "#66F2ED",
      }}
      initialRouteName="main"
    >
      {routes.map((route) => (
        <BarStack.Screen
          name={route.key}
          component={getComponentForRoute(route.key)} // Получаем компонент для каждой вкладки
          key={route.key}
          options={{
            tabBarLabel: route.title,
            tabBarIcon: ({ color }) => (
              <Icon
                name={index === route.key ? route.focusedIcon : route.unfocusedIcon}
                size={34}
                color={color}
              />
            ),
          }}
        />
      ))}
    </BarStack.Navigator>
  );
};

// Функция, которая возвращает соответствующий компонент для каждой вкладки
const getComponentForRoute = (routeKey) => {
  switch (routeKey) {
    case "profile":
      return ProfileScreen;
    case "events":
      return EventsScreen;
    case "main":
      return MainScreen;
    case "findfriend":
      return FindFriendsScreen;
    case "chat":
      return ChatScreen;
    default:
      return <Text>NONE</Text>; // Здесь можно задать любой компонент или текст по умолчанию
  }
};

export default BottomBar;
