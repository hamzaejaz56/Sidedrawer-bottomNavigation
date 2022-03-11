import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screen/Home';
import About from '../Screen/About';
import ContactUs from '../Screen/ContactUs';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../Screen/Profile';
import Notification from '../Screen/Notification';
// import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const Navigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
      
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
    
  )
}

const bottom = () => {
    return (
    <Tab.Navigator>
       <Tab.Screen name="Profile" component={Profile} />
       {/* <Tab.Screen name="Notification" component={Notification} /> */}
    </Tab.Navigator>

    )
}

export default {Navigation, bottom}

const styles = StyleSheet.create({})