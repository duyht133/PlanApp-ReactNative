import React, {useState, useEffect} from 'react';
import Home from './src/Home'
import Store from './src/Store';
import Services from './src/Services';
import Plan from './src/Plan'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="Store" component={Store} />
        <Stack.Screen name="Plan" component={Plan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
