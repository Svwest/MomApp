import React from 'react';
import {StatusBar, Text, View,StyleSheet} from 'react-native';
import {AuthProvider} from './src/context/AuthContext';
import NavigationNew from './navigation/NavigationNew';



const App = () => {

  return (
  
    <AuthProvider>
    
      <StatusBar backgroundColor="grey" />
    
      <NavigationNew  />
      
    </AuthProvider>

  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});