// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Spinner from "react-native-loading-spinner-overlay";
import { Avatar } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProfileScreen from "../screens/ProfileScreen";

const CustomSidebarMenu = (props) => {
  const { userInfo, isLoading, logout } = useContext(AuthContext);
  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <Spinner visible={isLoading} />

      <View style={stylesSidebar.profileHeader}>
        <TouchableOpacity>
          <Avatar.Image size={100} source={{ uri: userInfo.user.avatar }} />
          <Text style={stylesSidebar.profileHeaderText}>
            {userInfo.user.fullname}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={stylesSidebar.profileHeaderLine} />

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={({ color }) => <Text style={{ color: "#fff" }}>Logout</Text>}
          onPress={logout}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomSidebarMenu;

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#66F2ED",
    paddingTop: 40,
    color: "white",
  },
  profileHeader: {
    flexDirection: "row",
    backgroundColor: "#307ecc",
    padding: 15,
    textAlign: "center",
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: "white",
    backgroundColor: "#66F2ED",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  profileHeaderText: {
    color: "white",
    fontSize: 34,
    alignSelf: "center",
    paddingHorizontal: 10,
    fontWeight: "bold",
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    marginTop: 15,
  },
});
