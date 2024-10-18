import { StyleSheet } from "react-native";
import Colors from "../../../theme/Colors";
import Globalstyles from "../../../theme/GlobalStyles";
import Fonts from "../../../theme/Fonts";

const styles= StyleSheet.create({
    container:{
        backgroundColor:Colors.background,
        
    },
    heading:{
        color:Colors.textcolor,
        fontSize:30,
       marginHorizontal:30,
        marginTop:20
    },
    forgotcontainer:{
        backgroundColor:Colors.white,
        marginVertical:20,
        borderRadius:10,
        marginHorizontal:30,
        padding:10
    },
    text:{
        fontSize:17,
        color:Colors.black,
        margin:10,
        fontFamily:Fonts.CormorantGaramond_SemiBoldItalic
    }
})
export default styles