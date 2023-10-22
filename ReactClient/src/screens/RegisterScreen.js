import React, { useContext,useState} from 'react';

import {
  Button,
  Text,
  
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext } from '../context/AuthContext';



const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState(null); 
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [Confpassword, setConfPassword] = useState(null);
  const {isLoading, register, error} = useContext(AuthContext);
  
  
  return (
    <View style={styles.container}>
    <Spinner visible={isLoading} />
     <ImageBackground  resizeMode="cover" style={styles.image}>
      <Text style={styles.title}>Sing Up</Text>
      <View style={styles.wrapper}>
        <TextInput
        
          style={styles.input}
          mode="outlined"
          label="Full Name"
          value={name}
          placeholder=""
          right={<TextInput.Affix text="" />}
          onChangeText={text => setName(text)}
        />

<TextInput  style={styles.input}     
          mode="outlined"
        label="E-mail"
        placeholder=""
         right={<TextInput.Affix text="" />}
          value={email}
          onChangeText={text => setEmail(text)}
                            
        />


<TextInput style={styles.input}
          mode="outlined"
          value={password}
          onChangeText={text => setPassword(text)}
          label='Password'
          placeholder=""
          right={<TextInput.Affix text="" />}
          secureTextEntry
        
        />

        <TextInput
          style={styles.input}
          mode="outlined"
          value={Confpassword}
          label="Confirm password"
          placeholder=""
          right={<TextInput.Affix text="" />}
          onChangeText={text => setConfPassword(text)}
          secureTextEntry
          
        />

        <Button
          title="Register"
          onPress={() => {
            register( name,email,password,Confpassword, navigation);
          }}
        />

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Already have an accou? </Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ImageBackground>
      
    </View>
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
    alignItems: 'center',
  },
  title:{
    fontSize:30,
    fontWeight:'bold',
    paddingBottom:40,
    fontFamily:'sans-serif-condensed'
  },
  wrapper: {
    width: '80%',
  },
  input: {
        marginBottom: 12,
  
  },
  link: {
    color: 'blue',
  },
  button:{
    marginLeft:10,
  }
});

export default RegisterScreen;