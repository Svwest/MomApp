import React from 'react';
import {StatusBar, Text, View,StyleSheet} from 'react-native';
import Navigation from './src/components/Navigation';
import {AuthProvider} from './src/context/AuthContext';
import NavigationNew from './navigation/NavigationNew';
import { PaperProvider } from 'react-native-paper';



const App = () => {

  return (
    <PaperProvider >
    <AuthProvider>
    
      <StatusBar backgroundColor="black" />
    
      <NavigationNew  />
      
    </AuthProvider>
    </PaperProvider>
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