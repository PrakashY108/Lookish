import {StyleSheet} from 'react-native';
import Colors from '../../../theme/Colors';

const styles = StyleSheet.create({
  container:{
    alignItems:"center",
  },
  logo:{
  marginTop:"20%",
  marginBottom:"15%"
  },
  logincontainer: {
    height: 500,
    width:"90%",
    backgroundColor: '#F0EFEDCC',
    borderRadius:10,
    padding:30,
    
  },
  bgimage: {
    height: '100%',
    width: '100%',
    resizeMode:"contain"
  },
  text:{
    color:Colors.textcolor,
    fontWeight:"700",
    fontSize:14,
    lineHeight:17
  },
  forgottext:{
   alignSelf:"flex-end",
    color:Colors.borderblack
  },
  donthaveacc:{
    marginLeft:"30%"
  },
  errormessage:{
    color:Colors.error,
    fontSize:13,
    marginLeft:3
}
});
export default styles;
