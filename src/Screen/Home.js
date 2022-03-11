import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import Notification from './Notification';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    
    <Tab.Navigator 
    initialRouteName="HomeScreen"
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#e0e0e0',
        },
        labelStyle: {
          textAlign: 'center',
          fontSize: 16,
        },
      }}>
    <Tab.Screen name="Profile" component={Profile} />
    <Tab.Screen name="Notification" component={Notification} />
 </Tab.Navigator>
 
  )
}

// const HomeScreenStack = () => {
//     return (
//       <Stack.Navigator initialRouteName="HomeScreen">
//         <Stack.Screen
//           name="BottomTabStack"
//           component={BottomTabStack}
//           options={({route}) => ({
//             headerTitle: getHeaderTitle(route),
//             headerLeft: () => (
//               <NavigationDrawerStructure
//                 navigationProps={navigation}
//               />
//             ),
//             headerStyle: {
//               backgroundColor: '#f4511e', //Set Header color
//             },
//             headerTintColor: '#fff', //Set Header text color
//             headerTitleStyle: {
//               fontWeight: 'bold', //Set Header text style
//             },
//           })}
//         />
//       </Stack.Navigator>
//     );
//   };

export default Home

const styles = StyleSheet.create({})