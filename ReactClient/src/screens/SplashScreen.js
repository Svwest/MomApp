import React from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";

const SplashScreen = ({navigation}) => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 380,
    backgroundColor: "#D2E9E9",
  },
  horizontal: {
    flex: 1,
  },
});

export default SplashScreen;
