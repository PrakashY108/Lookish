import {View, Text} from 'react-native';
import React from 'react';
import Globalstyles from '../../../theme/GlobalStyles';
import CustomHeader from '../../../component/CustomHeader';
import Strings from '../../../constants/Strings';
import styles from './style';
import CustomInput from '../../../component/CustomInput';
import CustomButton from '../../../component/CustomButton';
import Colors from '../../../theme/Colors';
import NavigationRoutes from '../../../constants/NavigationRoutes';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
  const navigation= useNavigation()
  return (
    <View style={[Globalstyles.container, styles.container]}>
      <CustomHeader title={Strings.forgotpassword} />
      <Text style={[Globalstyles.heading]}>{Strings.forgotscreentitle}</Text>
      <View style={styles.forgotcontainer}>
    <Text style={styles.text}>{Strings.forgotheading}</Text>
    <CustomInput  title='Phone' placeholder={Strings.phonem}/> 
    <CustomButton onpress={()=>navigation.navigate(NavigationRoutes.otp)} bgcolor={Colors.btncolor} color={Colors.white} border title={Strings.sendverification}/>
      </View>
    </View>
  );
};

export default ForgotPassword;
