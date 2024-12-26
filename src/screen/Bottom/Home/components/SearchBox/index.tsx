import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import styles from './styles'
import Images from '../../../../../assets'
import CustomInput from '../../../../../component/CustomInput'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Searchbox = () => {
  return (
    <View style={styles.container}>
        <View>
        <Image style={styles.icon} source={Images.filter}/>
        <Text style={{color:Colors.backgroundColor,fontSize:10}}>Filters</Text>
        </View>
        <TextInput placeholder='Search' style={styles.searchbar}/>
        <Image style={[styles.icon,{position:"relative",right:40}]} source={Images.Search_icon}/>
        <View>
        <Image style={styles.icon} source={Images.menu}/>
        <Text style={{color:Colors.backgroundColor,fontSize:10}}>Filters</Text>
        </View>
    </View>
  )
}

export default Searchbox