import React, { useContext } from "react";
import { Button, StyleSheet, Text,  View } from "react-native";
import { AuthContext } from "../context/AuthContext";

const ChatScreen = ({ navigation }) => {
  const {logout} = AuthContext
  // Функция для перехода на экран профиля
  const goToProfile = () => {
    navigation.navigate("ProfileStack"); // Здесь "ProfileStackScreen" должен совпадать с именем вашего стека профиля
  };

  return (
    <View style={styles.container}>
      <Text>Chat SCREEN</Text>
      <Button title="Go to Profile" onPress={goToProfile} />
      <Button title="LogOut" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D2E9E9",
    
  },
  
  welcome: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default ChatScreen;
