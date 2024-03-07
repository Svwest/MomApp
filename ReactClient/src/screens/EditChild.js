import React, { useContext, useState } from "react";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import {
  Text,
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import { DateInput } from "../components/DateInput.js";
import {
  TextInput,
  SegmentedButtons,
  Portal,
  Modal,
  Button,
} from "react-native-paper";

import HobList from "../components/HobbiesGenerator";
import Spinner from "react-native-loading-spinner-overlay";
import { AuthContext } from "../context/AuthContext";

const EditChild = ({ route }) => {
  const { isLoading } = AuthContext;
  const child = route.params.item;
  console.log(child.birthdate);
  const [name, setName] = useState(route.params ? child.name : null);
  const [birthdate, setBirthdate] = useState(
    route.params ? child.birthdate : null
  );
  const [gender, setGender] = useState(route.params ? child.gender : null);
  const [hobbie, setHobbie] = useState(route.params ? child.hobbie : null);

  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  console.log("child is:", name, birthdate, gender, hobbie);

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />

      <KeyboardAvoidingView
       behavior="padding"
                keyboardVerticalOffset={20}
        style={styles.image}
      >
        <Image style={styles.avatar} source={{ uri: child.photo }} />

        <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Name"
            value={name}
            placeholder=""
            right={<TextInput.Affix text="" />}
            onChangeText={(text) => setName(text)}
          />

          <DateInput propdate={birthdate} />

          <SegmentedButtons
            style={styles.input}
            value={gender}
            onValueChange={setGender}
            buttons={[
              {
                value: "male",
                label: "Boy",
              },
              {
                value: "female",
                label: "Girl",
              },
            ]}
          />

          <View>
            <Button
              style={{ marginBottom: 12 }}
              icon="soccer"
              mode="outlined"
              onPress={showModal}
            >
              Hobbies
            </Button>

            <Portal style={{ alignItems: "center", width: "70%" }}>
              <Modal visible={visible} onDismiss={hideModal}>
                <HobList />
              </Modal>
            </Portal>
          </View>

          <TextInput
            style={styles.input}
            mode="outlined"
            label="About"
            maxLength={300}
            placeholder=""
            right={<TextInput.Affix text="" />}
            onChangeText={(text) => setName(text)}
          />

        
                   <Button icon="safe" mode="outlined" onPress={() => console.log('Pressed')}>
    SAVE CHANGES
  </Button>
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

export default EditChild;
