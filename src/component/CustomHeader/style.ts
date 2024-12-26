import {StyleSheet} from 'react-native';
import Colors from '../../theme/Colors';



const styles = StyleSheet.create({
   
    headertext:{
        flexDirection:"row",
        marginTop:30,
        alignItems:"center"
    },
    title:{
        color:Colors.textcolor,
        fontSize:20,
        marginLeft:10
    },
    container:{
        height:70,
        flexDirection:"row",
        alignItems:"center",
        paddingTop:10,
        paddingHorizontal:10,
        justifyContent:"space-between",
        marginTop:10
      
    },
    icon:{
        height: 25,
        width: 25,
        resizeMode: 'contain',
        marginLeft: 10,
   
        tintColor:Colors.borderblack
      },
      logoimg:{
        height:60,
        width:120,
        
      },
      tempcontainer:{
        flexDirection:"row",
        alignItems:"center",
        gap:15
      },
      righticon:{
        
      }
    
});
export default styles;
