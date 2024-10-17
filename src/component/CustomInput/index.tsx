import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Strings from '../../constants/Strings'
import styles from './style'
import Colors from '../../theme/Colors'

interface CustomInputType{
  placeholder:string
  title:string
}
const CustomInput = ({placeholder,title}:CustomInputType) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <TextInput placeholderTextColor={Colors.placeholdercolour} style={styles.input} placeholder={placeholder}/>
    </View>
  )
}

export default CustomInput