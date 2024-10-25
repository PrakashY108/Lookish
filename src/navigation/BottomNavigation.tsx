import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/Bottom/Home';
import Favorites from '../screen/Bottom/Favorites';
import Add from '../screen/Bottom/Add';
import Calendar from '../screen/Bottom/Calendar';
import Profile from '../screen/Bottom/Profile';
import Images from '../assets';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Homee"
      screenOptions={{
        tabBarStyle: { height: 70, backgroundColor: '#DCD9D4',alignItems:"center",justifyContent:"center" },
        tabBarActiveBackgroundColor: '#7D7467',
        tabBarActiveTintColor:"white",
        headerShown:false,
        tabBarItemStyle:{
          paddingBottom:7,
        },
        // tabBarInactiveTintColor:"#7D7467"
        
        
      }}>
      <Tab.Screen name="Homee" component={Home} options={{tabBarIcon:()=>(<Image style={styles.icon} source={Images.home} />)}} />
      <Tab.Screen name="Favorite" component={Favorites} options={{tabBarIcon:()=>(<Image style={styles.icon} source={Images.favorites} />)}}/>
      <Tab.Screen name="Add" component={Add} options={{tabBarIcon:()=>(<Image style={styles.icon} source={Images.add} />)}}/>
      <Tab.Screen name="Calendar" component={Calendar} options={{tabBarIcon:()=>(<Image style={styles.icon} source={Images.calendar} />)}} />
      <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon:()=>(<Image style={styles.icon} source={Images.user} />)}}/>
    </Tab.Navigator>
  );
};

export default BottomNavigation;
const styles = StyleSheet.create({
  icon: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
   
    borderWidth:2
  },
});
