import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {NavigationContainer}   from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddCard from './screens/AddCard';
import Slideshow from './screens/Slideshow';
export default function App() {

const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='AddCard' component={AddCard}/>
          <Stack.Screen name='Slideshow' component={Slideshow}/>
      </Stack.Navigator>
      <StatusBar style='dark' hidden={false} />
      </NavigationContainer>

  );
}
