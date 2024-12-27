import { StyleSheet } from "react-native";
import Colors from "../../../theme/Colors";

const styles= StyleSheet.create({

  card:{
    // width:"95%",
    backgroundColor:"#efefed",
    // height:150,
    // marginHorizontal:15,
    borderRadius:10,
    // padding:10,
    elevation:4,
   
    flexDirection:"row",
    gap:10,
    // marginVertical:8,
},
img:{
    height:120,
    width:120,
    resizeMode:"contain",
    borderRadius:10
},
title:{
    fontSize:16,
    fontWeight:"800",
    color:Colors.borderblack
},
details:{
    width:"65%",
    
},
description:{
    fontSize:15,
    paddingHorizontal:3,
    color:Colors.borderblack,
    fontWeight:"400",
},
category:{
    fontSize:15,
    color:Colors.black,
    fontWeight:"300"
},
availability:{
    fontSize:13,
    color:Colors.black,
    fontWeight:"500"
},
price:{
    color:"green",
    fontSize:24
}

})
export default styles