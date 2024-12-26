import { StyleSheet } from "react-native";
import Colors from "../../../../../theme/Colors";


const styles= StyleSheet.create({
    container:{
        backgroundColor:Colors.textcolor,
        flexDirection:"row",alignItems:"center",
        justifyContent:"space-between",
        height:50,
     paddingHorizontal:20,
     marginTop:10
        
    },
    icon:{
        height:25,width:25
    },
    searchbar:{
        height:20,
        width:200,
        backgroundColor:"white",
        borderRadius:10,
        borderColor:Colors.borderblack,
        padding:20,
        borderWidth:0.5,
        marginLeft:20

    }
})
export default styles