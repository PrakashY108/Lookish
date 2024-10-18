import {View, Text} from 'react-native';
import React, { useState } from 'react';
import CustomHeader from '../../../component/CustomHeader';
import Strings from '../../../constants/Strings';
import Globalstyles from '../../../theme/GlobalStyles';
import styles from './style';
import OtpInputs from 'react-native-otp-inputs';
import CustomButton from '../../../component/CustomButton';
import Colors from '../../../theme/Colors';
import { useNavigation } from '@react-navigation/native';
import NavigationRoutes from '../../../constants/NavigationRoutes';

const OTP = () => {
  const [otp,setotp]=useState("")
  const navigation = useNavigation()
  return (
    <View style={Globalstyles.container}>
      <CustomHeader title="Forgot Password" />
      <Text style={Globalstyles.heading}>{Strings.enter6digits}</Text>
      <View style={styles.otpcontainer}>
          <OtpInputs
          autofillFromClipboard
          style={styles.otp}
          handleChange={(text)=>setotp(text)}
          numberOfInputs={6} 
          inputContainerStyles={styles.inputcontainer}
          />
          <CustomButton onpress={()=>navigation.navigate(NavigationRoutes.changepassword)} title={Strings.submit} bgcolor={Colors.btncolor} border color={Colors.white}/>
      </View>
    </View>
  );
};

export default OTP;
