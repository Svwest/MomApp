import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";

import { NavigationNativeContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import SignupScreen from "./screens/SignupScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import LoadingScreen from "./screens/LoadingScreen.js";
import HomeScreen from "./screens/HomeScreen.js";

const Stack = createNativeStackNavigator();

const App=() =>{



  const [isLoggedin, setLoggedin] = useState(false)


  const detectLogin = async () => {
    
    const token = await AsyncStorage.getItem("token")
    if (token) {
            setLoggedin(true);
    } else {
      setLoggedin(false);
    }
  };


  useEffect(() => {
    detectLogin();
  }, []);
  console.log(isLoggedin);

  return (
    <NavigationNativeContainer style={styles.container}>
      <Stack.Navigator headerMode="none">
      <Stack.Screen name="loading" component={LoadingScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signUp" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  )

  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#81D8D0",
    alignItems: "center",
    justifyContent: "center",
  }
})

export default App;