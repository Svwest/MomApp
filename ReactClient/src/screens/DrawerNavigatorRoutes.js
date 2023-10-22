// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';
import CustomSidebarMenu from '../components/CustomSidebarMenu';
import NavigationDrawerHeader from '../components/NavigationDrawerHeader'


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();





const HomeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};




const ProfileScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'Profile', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const SettingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Settings', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = () => {
  return (
    <Drawer.Navigator
    
      screenOptions={{
        
        headerShown: false,
        activeTintColor: '66F2ED2',
        color: '66F2ED',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '66F2ED',
        },}}

      drawerContent={CustomSidebarMenu}>
      
      <Drawer.Screen
        name="profileScreenStack"
        options={{drawerLabel: 'Edit profile'}}
        component={ProfileScreenStack}
      />

      <Drawer.Screen
        name="homeScreenStack"
        options={{drawerLabel: 'Home'}}
        component={HomeScreenStack}
      />
      <Drawer.Screen
        name="settingScreenStack"
        options={{drawerLabel: 'Setting'}}
        component={SettingScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;