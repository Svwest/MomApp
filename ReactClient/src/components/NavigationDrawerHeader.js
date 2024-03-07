// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useContext} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import { AuthContext } from '../context/AuthContext';
import {Avatar} from 'react-native-paper'

const NavigationDrawerHeader = (props) => {
  const { userInfo, isLoading, logout } = useContext(AuthContext);
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
    
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
      <Avatar.Image
        size={50}
      
        source={{ uri: userInfo.user.avatar }}
              />
      </TouchableOpacity>
    </View>
  );
};
 export default NavigationDrawerHeader;