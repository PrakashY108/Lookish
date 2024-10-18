import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screen/Auth/Login';
import SignUp from '../screen/Auth/Signup';
import {Image, TouchableOpacity, View} from 'react-native';
import Images from '../assets';
import styles from '../screen/Splash/style';
import Colors from '../theme/Colors';
import ForgotPassword from '../screen/Auth/ForgotPassword';
import OTP from '../screen/Auth/OTP';
import ChangePassword from '../screen/Auth/ChangePassword';

const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={Login} />
      <Stack.Screen
        name="Signup"
        component={SignUp}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <Stack.Screen
        name="OTP"
        component={OTP}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
