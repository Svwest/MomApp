import * as React from "react";
import { BottomNavigation} from "react-native-paper";


import {
  SettingsStackScreen,
  ProfileStackScreen,
  MainStackScreen,
  FindFriendsStackScreen,
  EventsStackScreen,
  ChatStackScreen,
  DetailsScreen
} from "../../navigation/RoutesNavigation.js";

import EventsScreen from "../screens/EventsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import FindFriendsScreen from "../screens/FindFriendsScreen";
import MainScreen from "../screens/MainScreen";
import ChatScreen from "../screens/ChatScreen";

const ProfileRoute = ProfileStackScreen;

const EventsRoute = EventsStackScreen;

const FindFriendsRoute = FindFriendsStackScreen;

const MainRoute = MainStackScreen;

const ChatRoute = ChatStackScreen;

const Bottom = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "profile",
      title: "Profile",
      focusedIcon: "account",
      unfocusedIcon: "account-outline",
    },
    {
      key: "events",
      title: "Events",
      focusedIcon: "view-list",
      unfocusedIcon: "view-list-outline",
    },
    {
      key: "main",
      title: "Main",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    {
      key: "findfriend",
      title: "Find Friend",
      focusedIcon: "map",
      unfocusedIcon: "map-outline",
    },
    {
      key: "chat",
      title: "Chat",
      focusedIcon: "chat",
      unfocusedIcon: "chat-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    profile: ProfileRoute,
    events: EventsRoute,
    main: MainRoute,
    findfriend: FindFriendsRoute,
    chat: ChatRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Bottom;
