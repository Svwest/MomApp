import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import loginScreen from "../src/screens/LoginScreen";
import splashScreen from "../src/screens/SplashScreen";
import registerScreen from "../src/screens/RegisterScreen";
import ProfileScreen from "../src/screens/ProfileScreen";
import MainScreen from "../src/screens/MainScreen";
import SettingsScreen from "../src/screens/SettingsScreen";
import FindFriendsScreen from "../src/screens/FindFriendsScreen";
import EventsScreen from "../src/screens/EventsScreen";
import ChatScreen from "../src/screens/ChatScreen";
import EditProfile from "../src/screens/EditProfile";
import EditChild from "../src/screens/EditChild";
import { AuthContext } from "../src/context/AuthContext";
import Ionicons from "react-native-vector-icons/Ionicons";


const DetailsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details!</Text>
    </View>
  );
};

const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Main" component={MainScreen} />
      <MainStack.Screen name="Details" component={DetailsScreen} />
    </MainStack.Navigator>
  );
};

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="Details" component={DetailsScreen} />
      <ProfileStack.Screen name="Settings" component={SettingsStackScreen} />
      <ProfileStack.Screen name="EditProfile" component={EditProfile} />
      <ProfileStack.Screen name="EditChild" component={EditChild} />
    </ProfileStack.Navigator>
  );
};

const EventsStack = createStackNavigator();

const EventsStackScreen = () => {
  return (
    <EventsStack.Navigator>
      <EventsStack.Screen name="Events" component={EventsScreen} />
      <EventsStack.Screen name="Details" component={DetailsScreen} />
      <EventsStack.Screen name="Chat" component={ChatStackScreen} />
    </EventsStack.Navigator>
  );
};

const FindFriendsStack = createStackNavigator();

const FindFriendsStackScreen = () => {
  return (
    <FindFriendsStack.Navigator>
      <FindFriendsStack.Screen
        name="Find Friends"
        component={FindFriendsScreen}
      />
      <FindFriendsStack.Screen name="Details" component={DetailsScreen} />
    </FindFriendsStack.Navigator>
  );
};

const ChatStack = createStackNavigator();

const ChatStackScreen = () => {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        name="Chat"
        component={ChatScreen}
        options={{ headerShown: false }}
      />

      <ChatStack.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{ headerShown: false }}
      />
      <ChatStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ headerShown: false }}
      />
    </ChatStack.Navigator>
  );
};

const SettingsStack = createStackNavigator();

const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const BottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName={{MainStack}}
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: "#59606D" },
        tabBarLabelStyle: { color: "white" },
        tabBarActiveTintColor: "white",
        headerTintColor: "red",

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === "ProfileStack") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          } else if (rn === "EventsStack") {
            iconName = focused ? "calendar" : "calendar-outline";
          } else if (rn === "MainStack") {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === "FindFriendsStack") {
            iconName = focused ? "hand-left" : "hand-left-outline";
          } else if (rn === "ChatStack") {
            iconName = focused
              ? "chatbubble-ellipses"
              : "chatbubble-ellipses-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={25} color="white" />;
        },
      })}
    >
     <Tab.Screen
        name="MainStack"
        component={MainStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Main",
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
        }}
      />
      <Tab.Screen
        name="FindFriendsStack"
        component={FindFriendsStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Find Friend",
        }}
      />
      
      <Tab.Screen
        name="EventsStack"
        component={EventsStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Events",
        }}
      />
      <Tab.Screen
        name="ChatStack"
        component={ChatStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Chat",
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const NavigationNew = () => {
  const { userInfo, isLoading } = useContext(AuthContext);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {isLoading ? (
          <Stack.Screen name="SplashScreen" component={splashScreen} />
        ) : userInfo.token ? (
          <>
            <Stack.Screen
              name="BottomNav"
              component={BottomNav}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="SettingsScreen"
              component={SettingsStackScreen}
            />

            
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={loginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={registerScreen}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationNew;
