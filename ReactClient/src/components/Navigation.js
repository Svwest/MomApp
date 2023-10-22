import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import homeScreen from "../screens/HomeScreen";
import loginScreen from "../screens/LoginScreen";
import splashScreen from "../screens/SplashScreen";
import registerScreen from "../screens/RegisterScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MainScreen from "../screens/MainScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ChatScreen from "../screens/ChatScreen";
import FindFriendsScreen from "../screens/FindFriendsScreen";
import EventsScreen from "../screens/EventsScreen";
import BottomBar from "./BottomBar";
import { AuthContext } from "../context/AuthContext";

const Stack = createStackNavigator();

const Navigation = () => {
  const { userInfo, isLoading } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {isLoading ? (
          <Stack.Screen name="SplashScreen" component={splashScreen} />
        ) : userInfo.token ? (
          <>
            <Stack.Screen
              name="BottomBar"
              component={BottomBar}
              options={{ headerShown: false }}
            />

            <Stack.Screen name="SettingsScreen" component={SettingsScreen} />

            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />

            {/* Добавляем кнопку для перехода на другой скрин */}
            <Stack.Screen
              name="MainScreen"
              component={MainScreen}
              options={({ navigation }) => ({
                title: "Main Screen",
                headerRight: () => (
                  <Button
                    title="Go to Chat"
                    onPress={() => navigation.navigate("ChatScreen")}
                  />
                ),
              })}
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

export default Navigation;
