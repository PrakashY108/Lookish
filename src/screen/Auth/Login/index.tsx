import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import Globalstyles from '../../../theme/GlobalStyles';
import Images from '../../../assets';
import Strings from '../../../constants/Strings';
import CustomInput from '../../../component/CustomInput';
import CustomButton from '../../../component/CustomButton';
import Colors from '../../../theme/Colors';
import {useNavigation} from '@react-navigation/native';
import NavigationRoutes from '../../../constants/NavigationRoutes';
import ErrorMessage from '../../../constants/ErrorMessages';

const Login = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [usernameError, setusernameError] = useState('');
  const [passwordError, setpasswordError] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    setusernameError('');
    setpasswordError('');

    let valid = true;
    if (!username) {
      setusernameError(ErrorMessage.username);
      valid = false;
    }

    if (!password) {
      setpasswordError(ErrorMessage.password);
      valid = false;
    }

    if (valid) {
      navigation.replace(NavigationRoutes.home)
    } else {
      console.log('error', valid);
    }
  };
  return (
    <ImageBackground style={styles.bgimage} source={Images.loginBackground}>
      <View style={[Globalstyles.container, styles.container]}>
        <Image style={styles.logo} source={Images.logo} />
        <View style={styles.logincontainer}>
          <CustomInput
            value={username}
            onchangetext={text => {
              setusername(text);
              setusernameError('');
            }}
            title={Strings.username}
            placeholder={Strings.usernamelaceholder}
          />
          {usernameError ? (
            <Text style={styles.errormessage}>{usernameError}</Text>
          ) : null}
          <CustomInput
           secure={true}
            value={password}
            onchangetext={text => {
              setpassword(text);
              setpasswordError('');
            }}
            title={Strings.password}
            placeholder={Strings.passwordplaceholder}
          />
          {passwordError ? (
            <Text style={styles.errormessage}>{passwordError}</Text>
          ) : null}
          <TouchableOpacity onPress={()=>navigation.navigate(NavigationRoutes.forgotpassword)}>
            <Text style={styles.forgottext}>{Strings.forgotpassword}</Text>
          </TouchableOpacity>
          <CustomButton
            border
            onpress={() => handleLogin()}
            bgcolor={Colors.btncolor}
            color={Colors.white}
            title={Strings.login}
          />
          <TouchableOpacity>
            <Text style={[Globalstyles.marginTop_40, styles.donthaveacc]}>
              {Strings.donthaveaccount}
            </Text>
          </TouchableOpacity>
          <CustomButton
            onpress={() => navigation.navigate(NavigationRoutes.signup)}
            border
            color={Colors.textcolor}
            bgcolor={Colors.white}
            title={Strings.signup}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;
