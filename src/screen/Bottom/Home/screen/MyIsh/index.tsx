import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import CustomHeader from '../../../../../component/CustomHeader'
import Images from '../../../../../assets'
import Colors from '../../../../../theme/Colors'
import Searchbox from '../../components/SearchBox'
const MyIsh = () => {
  return (
    <View style={{backgroundColor:"white"}}>
      <CustomHeader title='MyIsh' righticon={(<Image style={{height:25,width:25,tintColor:Colors.btncolor}} source={Images.bell}/>)}/>
      <Searchbox/>
    </View>
  ) 
}

export default MyIsh