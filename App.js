import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from "./main.js";
import Settings from './Settings.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="Settings" component ={Settings}/>
        <Stack.Screen name="Main Screen" component ={MainScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

