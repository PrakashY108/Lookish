import {View, Text, Image, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import Globalstyles from '../../../theme/GlobalStyles';
import Images from '../../../assets';
import Strings from '../../../constants/Strings';
import CustomInput from '../../../component/CustomInput';
import CustomButton from '../../../component/CustomButton';
import Colors from '../../../theme/Colors';
import { useNavigation } from '@react-navigation/native';
import NavigationRoutes from '../../../constants/NavigationRoutes';

const Login = () => {
  const navigation= useNavigation();
  return (
    <ImageBackground style={styles.bgimage} source={Images.loginBackground}>
      <View style={[Globalstyles.container, styles.container]}>
        <Image style={styles.logo} source={Images.logo} />
        <View style={styles.logincontainer}>
     
          <CustomInput title={Strings.email} placeholder={Strings.emailplaceholder} />
    
          <CustomInput title={Strings.password} placeholder={Strings.passwordplaceholder} />
          <TouchableOpacity><Text style={styles.forgottext}>{Strings.forgotpassword}</Text></TouchableOpacity>
          <CustomButton border bgcolor={Colors.btncolor} color={Colors.white} title={Strings.login} />
          <TouchableOpacity><Text style={[Globalstyles.marginTop_40,styles.donthaveacc]}>{Strings.donthaveaccount}</Text>
            </TouchableOpacity>
          <CustomButton onpress={()=>navigation.navigate(NavigationRoutes.signup)}  border color={Colors.textcolor} bgcolor={Colors.white} title={Strings.signup} />

        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;
