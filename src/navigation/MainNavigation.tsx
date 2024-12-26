import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screen/Splash';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import BottomNavigation from './BottomNavigation';
import MyIsh from '../screen/Bottom/Home/screen/MyIsh';

const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={AuthNavigation} />
        <Stack.Screen name='Home' component={BottomNavigation}/>
        <Stack.Screen name='MyIsh' component={MyIsh}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
