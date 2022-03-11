import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Navigation from './src/Navigation/Navigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/Screen/Home';
import About from './src/Screen/About';
import ContactUs from './src/Screen/ContactUs';
import Profile from './src/Screen/Profile';
import Notification from './src/Screen/Notification';
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Navigation /> */}
      <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
      
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
      

    </NavigationContainer>
  );  
}



const styles = StyleSheet.create({})