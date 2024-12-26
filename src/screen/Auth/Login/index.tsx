import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import Globalstyles from '../../../theme/GlobalStyles';
import Images from '../../../assets';
import Strings from '../../../constants/Strings';
import CustomInput from '../../../component/CustomInput';
import CustomButton from '../../../component/CustomButton';
import Colors from '../../../theme/Colors';
import NavigationRoutes from '../../../constants/NavigationRoutes';
import ErrorMessage from '../../../constants/ErrorMessages';
import axios from 'axios';
import {baseUrl, login} from '../../../api';
import * as Animatable from 'react-native-animatable';
import {Notification} from 'react-native-notifications';

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [issecure, setissecure] = useState(false);
  const [errors, setErrors] = useState({email: '', password: ''});

  const navigation = useNavigation();

  // const setupNotification = async () => {
  //   messaging().onMessage((notification):any => {
  //     Alert.alert("Notification", notification?.notification?.title);
  //   })
  //   messaging().setBackgroundMessageHandler((Noti):any=>{
  //     Alert.alert("Background Notification",Noti?.notification?.title);
  //   })
  // }
  const validateInputs = () => {
    let valid = true;
    let newErrors = {email: '', password: ''};

    if (!emailRegex.test(email)) {
      valid = true;
      newErrors.email = ErrorMessage.email.enter_valid_email;
    } else {
      (newErrors.email = ''), (valid = false);
    }

    if (!password) {
      newErrors.password = ErrorMessage.password.cannotempty;
      valid = false;
    } else {
      newErrors.password = '';
      valid = true;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleLogin = () => {
    if (validateInputs()) {
      navigation.replace(NavigationRoutes.home);
      // LoginApi();
    } else {
      console.log('Validation failed');
    }
  };

  const LoginApi = async () => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    axios
      .post('https://app.lookishstyle.com/api/user/login', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => {
        console.log(res.data.status);
        navigation.navigate(NavigationRoutes.home);
        if (res?.data?.status) {
          console.log('Please verify your email');
        }
      })
      .catch(error => console.log(error.message));
  };
  const fadeIn = {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  };
  return (
    <KeyboardAvoidingView>
      <ImageBackground style={styles.bgimage} source={Images.loginBackground}>
        <View style={[Globalstyles.container, styles.container]}>
          <Image style={styles.logo} source={Images.logo} />
          <Animatable.View
            animation={'zoomIn'}
            duration={1500}
            style={styles.logincontainer}>
            <CustomInput
              value={email}
              onchangetext={text => {
                setEmail(text);
                setErrors(prev => ({...prev, email: ''}));
              }}
              title={Strings.email}
              placeholder={Strings.emailplaceholder}
            />
            {errors.email ? (
              <Text style={styles.errormessage}>{errors.email}</Text>
            ) : null}

            <CustomInput
              secure={true}
              value={password}
              onchangetext={text => {
                setPassword(text);
                setErrors(prev => ({...prev, password: ''}));
              }}
              title={Strings.password}
              placeholder={Strings.passwordplaceholder}
            />
            {errors.password ? (
              <Text style={styles.errormessage}>{errors.password}</Text>
            ) : null}

            <TouchableOpacity
              onPress={() =>
                navigation.navigate(NavigationRoutes.forgotpassword)
              }>
              <Text style={styles.forgottext}>{Strings.forgotpassword}</Text>
            </TouchableOpacity>

            <CustomButton
              border
              onpress={handleLogin}
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
          </Animatable.View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Login;
