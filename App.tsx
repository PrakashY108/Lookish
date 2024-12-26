import {View, Text, Alert} from 'react-native';
import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import MainNavigation from './src/navigation/MainNavigation';

const App = () => {
  useEffect(() => {
    requestPermissionforMessage();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', remoteMessage);
      Alert.alert('Notification', remoteMessage?.notification?.title);
    });

    return unsubscribe;
  }, []);
  const requestPermissionforMessage = async () => {
    const status = await messaging().requestPermission();
    const enabled =
      status === messaging.AuthorizationStatus.AUTHORIZED ||
      status === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      getFCMToken();
      console.log('Permission granted');
    } else {
      console.log('permission denied');
    }
  };

  const getFCMToken = async () => {
    const token = await messaging().getToken();
    console.log('FCM :', token);
  };

  return (
    <>
      <MainNavigation />
    </>
  );
};

export default App;
