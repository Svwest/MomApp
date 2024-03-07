import React, { useState, useContext } from "react";
import {
  Image,
  Button,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { TextInput } from "react-native-paper";
import { AuthContext } from "../context/AuthContext";

import Spinner from "react-native-loading-spinner-overlay";
import AsyncStorage from "@react-native-async-storage/async-storage";
// const login= async(email, password)=>{
// try {
//   const {data} =  await client.post(
//     '/sign-in',
//     {
//       email,
//       password,
//     },
//     {
//         headers: {
//         'Content-Type': "application/json",
//         'Accept': "application/json",
//         }
//     }
//  );
// console.log(data);
//   if (data.success) {
//     alert("7chineh")
//   }else{
//     alert(data.message)
//   }

//   console.log(res.data);
// } catch (e) {
//   console.log(e);

// }
// }

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { isLoading, login, error } = useContext(AuthContext);

  //   const { setIsLoggedIn, setProfile } = useLogin();
  // const [userInfo, setUserInfo] = useState({
  //   email: '',
  //   password: '',
  // });

  // const [error, setError] = useState('');

  // const { email, password } = userInfo;

  // const handleOnChangeText = (value, fieldName) => {
  //   setUserInfo({ ...userInfo, [fieldName]: value });
  // };

  // const isValidForm = () => {
  //   if (!isValidObjField(userInfo))
  //     return updateError('Required all fields!', setError);

  //   if (!isValidEmail(email)) return updateError('Invalid email!', setError);

  //   if (!password.trim() || password.length < 8)
  //     return updateError('Password is too short!', setError);

  //   return true;
  // };

  // const submitForm = async () => {
  //   if (isValidForm()) {
  //     try {
  //       const res = await client.post('/sign-in', { ...userInfo });

  //       if (res.data.success) {
  //         setUserInfo({ email: '', password: '' });
  //         setProfile(res.data.user);
  //         setIsLoggedIn(true);
  //       }

  //       console.log(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Spinner visible={isLoading} />

      <ImageBackground resizeMode="cover" style={styles.image}>
        <View style={styles.wrapper}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../pics/MOMapp.png")} />
          </View>

          <TextInput
            style={styles.input}
            mode="outlined"
            label="E-mail"
            placeholder=""
            right={<TextInput.Affix text="" />}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <TextInput
            style={styles.input}
            mode="outlined"
            value={password}
            onChangeText={(text) => setPassword(text)}
            label="Password"
            placeholder=""
            secureTextEntry
          />
          {error ? (
            <Text
              style={{
                color: "red",
                fontSize: 18,
                textAlign: "center",
                marginBottom: 40,
              }}
            >
              {error}
            </Text>
          ) : null}

          <Button
            title="Login"
            onPress={() => {
              login(email, password);
            }}
          />

          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={styles.link}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D2E9E9",
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 360,
    width: 360,
  },

  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  wrapper: {
    width: "80%",
  },
  avatar: {
    marginBottom: 37,
    backgroundColor: "white",
  },
  input: {
    marginBottom: 12,
  },
  link: {
    color: "blue",
  },
  button: {
    marginLeft: 10,
  },
});

export default LoginScreen;
