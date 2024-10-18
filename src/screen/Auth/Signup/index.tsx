import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Images from '../../../assets';
import styles from './style';
import Strings from '../../../constants/Strings';
import Globalstyles from '../../../theme/GlobalStyles';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../../component/CustomInput';
import CustomButton from '../../../component/CustomButton';
import Colors from '../../../theme/Colors';
import CustomHeader from '../../../component/CustomHeader';
import ErrorMessage from '../../../constants/ErrorMessages';

interface signupType {
  text: string;
}
const SignUp = () => {
  const navigation = useNavigation();
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [password, setpassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const [firstnameError, setfirstnameError] = useState('');
  const [usernameError, setusernameError] = useState('');
  const [emailError, setemailError] = useState('');
  const [phonenumberError, setphonenumberError] = useState('');
  const [passwordError, setpasswordError] = useState('');
  const [confirmpasswordError, setconfirmpasswordError] = useState('');

  const handleSignup = () => {
    let valid = true;
    if (!username) {
      setusernameError(ErrorMessage.username);
      valid = false;
    }
    if (!firstname) {
      setfirstnameError(ErrorMessage.firstname);
      valid = false;
    }
    if (!password) {
      setpasswordError(ErrorMessage.password);
      valid = false;
    }
    if (!email) {
      setemailError(ErrorMessage.email);
      valid = false;
    }
    if (confirmpassword !== password) {
      setconfirmpasswordError(ErrorMessage.confirmpassword);
      valid = false;
    }
    if (phonenumber.length !== 10) {
      setphonenumberError(ErrorMessage.phoneno);
      valid = false;
    }
    if (valid) {
      console.log('Alright');
    } else {
      console.log('error', valid);
    }
  };
  return (
    <ScrollView style={[Globalstyles.container, styles.container]}>
      <CustomHeader title={Strings.signup} />
      <Text style={Globalstyles.heading}>{Strings.createacc}</Text>
      <View style={styles.detailcontainer}>
        <CustomInput 
          value={firstname}
          onchangetext={text => {
            setfirstname(text);
            setfirstnameError('');
          }}
          title={Strings.firstname}
          placeholder={Strings.firstnamem}
        />
        {firstnameError ? (
          <Text style={styles.errormessage}>{firstnameError}</Text>
        ) : null}
        <CustomInput
          value={lastname}
          onchangetext={text => setlastname(text)}
          title={Strings.lastname}
          placeholder={Strings.lastnamem}
        />

        <CustomInput
          value={username}
          onchangetext={text => {
            setusername(text);
            setusernameError('');
          }}
          title={Strings.username}
          placeholder={Strings.usernamem}
        />
        {usernameError ? (
          <Text style={styles.errormessage}>{usernameError}</Text>
        ) : null}
        <CustomInput
          value={phonenumber}
          onchangetext={text => {
            setphonenumber(text);
            setphonenumberError('');
          }}
          title={Strings.phoneno}
          placeholder={Strings.phonem}
        />
        {phonenumberError ? (
          <Text style={styles.errormessage}>{phonenumberError}</Text>
        ) : null}
        <CustomInput
          value={email}
          onchangetext={text => {
            setemail(text);
            setemailError('');
          }}
          title={Strings.email}
          placeholder={Strings.emailm}
        />
        {emailError ? (
          <Text style={styles.errormessage}>{emailError}</Text>
        ) : null}
        <CustomInput
          secure={true}
          value={password}
          onchangetext={text => {
            setpassword(text);
            setpasswordError('');
          }}
          title={Strings.password}
          placeholder={Strings.passwordm}
        />
        {passwordError ? (
          <Text style={styles.errormessage}>{passwordError}</Text>
        ) : null}

        <CustomInput
          value={confirmpassword}
          onchangetext={text => {
            setconfirmpassword(text);
            setconfirmpasswordError('');
          }}
          title={Strings.confirmpassword}
          placeholder={Strings.confirmpasswordm}
        />
        {confirmpasswordError ? (
          <Text style={styles.errormessage}>{confirmpasswordError}</Text>
        ) : null}
        <CustomButton
          onpress={() => handleSignup()}
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
