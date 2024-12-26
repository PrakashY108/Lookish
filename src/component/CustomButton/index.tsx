import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import Colors from '../../theme/Colors';


interface CustomButtonType{
    title:string,
    color:string,
    bgcolor:string,
    border?:boolean|null,
    onpress:any,
    height?:number,
    width?:number
}
const CustomButton = ({title,color,bgcolor,border,onpress,height,width}:CustomButtonType) => {
  return (
    <View>
      <TouchableOpacity onPress={onpress} style={[styles.container,{backgroundColor:bgcolor},border?{borderColor:Colors.borderblack,borderWidth:1}:{}]}>
        <Text style={[styles.title,{color:color}]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
