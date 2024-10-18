import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Strings from '../../constants/Strings'
import styles from './style'
import Colors from '../../theme/Colors'

interface CustomInputType{
  placeholder:string
  title:string,
  value:string,
  onchangetext:any,
  secure?:boolean
}
const CustomInput = ({placeholder,title,value,onchangetext,secure}:CustomInputType) => {
  
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <TextInput value={value} secureTextEntry={secure} onChangeText={onchangetext} placeholderTextColor={Colors.placeholdercolour} style={styles.input} placeholder={placeholder}/>
    </View>
  )
}

export default CustomInput