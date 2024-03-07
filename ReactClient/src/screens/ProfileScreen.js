import React, { useState, useContext, useEffect } from "react";

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import SplashScreen from "./SplashScreen";
import { Button } from "react-native-paper";
import { getUserBy } from "../context/userContext"; // Подключите функцию getUserByMail из вашего контекста
import { AuthContext } from "../context/AuthContext";

export default ProfileScreen = ({ navigation }) => {
  const { userInfo, isLoading, logout } = useContext(AuthContext);
  const { user, token } = userInfo;

  const [loadedUser, setLoadedUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (user) {
          const userData = await getUserBy("email", user, token);
          setLoadedUser(userData);
          console.log("Succccesss");
        }
      } catch (error) {
        console.error("Ошибка:", error);
      }
    };

    if (userInfo && userInfo.user) {
      fetchUser();
    }
  }, [userInfo]);

  if (!userInfo || isLoading || !loadedUser) {
    return <SplashScreen />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <Text style={styles.name}>{loadedUser.fullname}</Text>
        <Image style={styles.avatar} source={{ uri: loadedUser.avatar }} />
      </View>
      <Button
        onPress={() => navigation.navigate("EditProfile", { loadedUser })}
        fontSize={80}
      >
        Edit Profile
      </Button>

      <ScrollView>
        <FlatList
          style={styles.flatList}
          data={loadedUser.children}
          keyExtractor={(item) => item.name}
          horizontal={true}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.flatList}
              onPress={() => navigation.navigate("EditChild", { item })}
            >
              <View style={styles.box}>
                <Image style={styles.image} source={{ uri: item.photo }} />
                <Text style={styles.username}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        
        <Button icon="camera" mode="outlined" onPress={() => console.log('Pressed')}>
  LOG OUT
  </Button>
        <Button onPress={logout} fontSize={80}>
          LogOut
        </Button>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D2E9E9",
    flex: 1,
    alignItems: "center",
  },
  flatList: {
    marginBottom: 10, // Устанавливаем отступ снизу
  },

  headerContent: {
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    width: 380,
    height: 300,
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 2,
    margin: 10,
    shadowColor: "black",
    shadowOpacity: 4,
    shadowOffset: {
      height: 2,
      width: -2,
    },
  },
  name: {
    fontSize: 20,
    marginTop: 10,
  },
  body: {
    alignItems: "center",
  },
  box: {
    margin: 10,
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 45,
    borderColor: "white",
    borderWidth: 2,
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 4,
    shadowOffset: {
      height: 6,
      width: -6,
    },
  },
  username: {
    fontSize: 20,
  },

  buttonContainer: {
    flexDirection: "row",
  },
});
