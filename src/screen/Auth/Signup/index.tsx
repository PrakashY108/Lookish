import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import Images from '../../../assets';
import styles from './style';
import Strings from '../../../constants/Strings';
import Globalstyles from '../../../theme/GlobalStyles';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../../component/CustomInput';
import CustomButton from '../../../component/CustomButton';
import Colors from '../../../theme/Colors';
import CustomHeader from '../../../component/CustomHeader';

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={[Globalstyles.container, styles.container]}>
      <CustomHeader title={Strings.signup} />
      <Text style={styles.heading}>{Strings.createacc}</Text>
      <View style={styles.detailcontainer}>
        <CustomInput
          title={Strings.firstname}
          placeholder={Strings.firstnamem}
        />
        <CustomInput title={Strings.lastname} placeholder={Strings.lastnamem} />
        <CustomInput title={Strings.username} placeholder={Strings.usernamem} />
        <CustomInput title={Strings.password} placeholder={Strings.passwordm} />
        <CustomInput title={Strings.email} placeholder={Strings.emailm} />
        <CustomInput title={Strings.phoneno} placeholder={Strings.phonem} />
        <CustomInput title={Strings.location} placeholder={Strings.locationm} />
        <CustomButton
          title={Strings.signup}
          border
          bgcolor={Colors.btncolor}
          color={Colors.white}
        />
      </View>
    </ScrollView>
  );
};

export default SignUp;
