import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { AuthContext } from "../context/AuthContext";



const FindFriendsScreen = () => {
 
  return (
  <Text>find friend SCREEN from</Text>
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

export default FindFriendsScreen;
