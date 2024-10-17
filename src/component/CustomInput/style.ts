import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';

const styles = StyleSheet.create({
  input:{
    width:"100%",
    height:50,
    borderColor:Colors.borderblack,
    borderWidth:1,
    borderRadius:10,
    backgroundColor:Colors.white,
    marginBottom:20,
    paddingHorizontal:15
    
  },
  text:{
    color:Colors.textcolor,
    fontWeight:"700",
    fontSize:14,
    lineHeight:17,
    marginLeft:7
  },
});
export default styles;
