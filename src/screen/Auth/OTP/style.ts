import {StyleSheet} from 'react-native';
import Colors from '../../../theme/Colors';

const styles = StyleSheet.create({
  otpcontainer: {
    backgroundColor: Colors.backgroundcontainer,
    marginHorizontal: 20,
    borderRadius: 10,
    marginVertical: 40,
  },
  inputcontainer: {
    width: 50,
    height: 50, 
    borderWidth: 2,
    borderColor: Colors.black, 
    
    borderRadius: 10,
    backgroundColor:"white",
  },
  otp:{
   alignItems:"center",
   justifyContent:"space-evenly",
    flexDirection:"row",
    marginVertical:10
  }
});
export default styles;
