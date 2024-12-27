import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/Bottom/Home';
import Favorites from '../screen/Bottom/Favorites';

import Calendar from '../screen/Bottom/Calendar';
import Profile from '../screen/Bottom/Profile';
import Images from '../assets';
import Cart from '../screen/Bottom/Cart';


const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Homee"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#DCD9D4',
          height: 65,
          margin: 10,
          borderRadius: 30,
        },
      
        tabBarActiveBackgroundColor: '#7D7467',
        tabBarItemStyle: {padding: 8},
      }}>
      <Tab.Screen
        name="Homee"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={[styles.icon, {tintColor: focused ? 'white' : '#7D7467'}]}
              source={Images.home}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorites}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={[styles.icon, {tintColor: focused ? 'white' : '#7D7467'}]}
              source={Images.favorites}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={[styles.icon, {tintColor: focused ? 'white' : '#7D7467'}]}
              source={Images.cart}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={[styles.icon, {tintColor: focused ? 'white' : '#7D7467'}]}
              source={Images.calendar}
            />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={[styles.icon, {tintColor: focused ? 'white' : '#7D7467'}]}
              source={Images.user}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  icon: {
    height: 28,
    width: 28,
    resizeMode: 'contain',
  },
});
