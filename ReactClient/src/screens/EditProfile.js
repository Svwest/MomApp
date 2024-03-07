

import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  Button,
} from "react-native";
import { AuthContext } from "../context/AuthContext";
import { TextInput } from "react-native-paper";
import Spinner from "react-native-loading-spinner-overlay";
import { Picker } from "@react-native-picker/picker";
import fetchData from '../components/cities'

const EditProfile = ({ route }) => {
  const { userInfo, isLoading, logout } = useContext(AuthContext);
  const user = route.params.loadedUser;
  const profile = {
    name: user.fullname,
    email: user.email,
    bio: "Software engineer and cat lover",
    avatar: user.avatar,
    city: user.city
  };
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [bio, setBio] = useState(profile.bio);
  const [avatar, setAvatar] = useState(profile.avatar);
  const [city, setCity] = useState(profile.city);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const records = await fetchData();
        setData(records);
      } catch (error) {
        // Handle the error
      }
    };

    fetchDataAsync();
  }, []);

  const renderPickerItems = () => {
    return data.map((cityItem) => (
      <Picker.Item
        key={cityItem.symbol_number}
        label={cityItem.name_in_english}
        value={cityItem.name_in_english}
      />
    ));
  };

  const handleSubmit = (name, email, bio, avatar) => {
    Alert.alert("Done", () => {
      navigation.goBack();
    });
  };

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <KeyboardAvoidingView
       behavior="padding"
        resizeMode="cover"
        keyboardVerticalOffset={20}
        style={styles.image}
      >
        <Image style={styles.avatar} source={{ uri: avatar }} />
        <TouchableOpacity
          style={styles.changeAvatarButton}
          onPress={() => {
            /* open image picker */
          }}
        >
          <Text style={styles.changeAvatarButtonText}>Change Avatar</Text>
        </TouchableOpacity>

        <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Full Name"
            value={name}
            onChangeText={setName}
            right={<TextInput.Affix text="" />}
          />

          <TextInput
            style={styles.input}
            mode="outlined"
            label="Email"
            value={email}   
            editable={false}          
            right={<TextInput.Affix text="" />}
          />
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={city}
              onValueChange={(itemValue) => setCity(itemValue)} // Обновляем выбранный город
              style={styles.picker}
            >
            <Picker.Item
            
            label={profile.city ? profile.city : "Выберите город"}
            value=""
          />
              {renderPickerItems()}
            </Picker>
          </View>

          <TextInput
            style={styles.input}
            mode="outlined"
            placeholder="Enter Bio"
            label="Bio"
            value={bio}
            onChangeText={setBio}
            right={<TextInput.Affix text="" />}
          />
          <TextInput
            style={styles.input}
            mode="outlined"
            placeholder="Enter Bio"
            value={bio}
            onChangeText={setBio}
            right={<TextInput.Affix text="" />}
          />
                  <Button
            title="Save changes"
            style={styles.buttonText}
            onPress={() => handleSubmit({ name, email, bio, avatar })}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerContent: {
    flexDirection: "column",
    alignItems: "center",
  },

  image: {
    flex: 1,

    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 40,
    fontFamily: "sans-serif-condensed",
  },
  wrapper: {
    width: "70%",
  },
  input: {
    marginBottom: 12,
  },

  avatar: {
    width: 300,
    height: 200,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "white",
    margin: 30,
    shadowColor: "black",
    shadowOpacity: 4,
    shadowOffset: {
      height: 2,
      width: -2,
    },
  },
  pickerContainer: {
    
    borderWidth: 1,
    borderColor: "#000", // Цвет границы
    borderRadius: 5, // Радиус границы
    marginBottom: 12,
    
  },
  picker: {
    height: 47,
    width: "100%",
  },

  link: {
    color: "blue",
  },

  button: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 100,
    borderColor: "#59606D",
  },
});

export default EditProfile;

