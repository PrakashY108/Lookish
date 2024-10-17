import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import styles from './style';
import Globalstyles from '../../theme/GlobalStyles';
import {useNavigation} from '@react-navigation/native';
import NavigationRoutes from '../../constants/NavigationRoutes';
import Images from '../../assets';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(NavigationRoutes.login);
    }, 2000);
  }, []);
  return (
    <View style={[Globalstyles.container, styles.logocontainer]}>
      <Image style={styles.logo} source={Images.splash_logo} />
    </View>
  );
};

export default Splash;
