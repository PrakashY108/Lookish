import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../../../../theme/Colors'
import Images from '../../../../../assets'

const Header = () => {
  return (
    <View style={{justifyContent:"space-between",flexDirection:"row",marginHorizontal:17,marginBottom:10,marginTop:10}}>
      <Text style={{color:Colors.btncolor,fontSize:25}}>Home</Text>
      <Image style={{height:25,width:25}} source={Images.bell}/> 
    </View>
  )
}

export default Header