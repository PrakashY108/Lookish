import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Images from '../../assets';
import styles from './style';

interface CustomHeaderType {
  title: string;
  menubtn?: boolean;
}
const CustomHeader = ({title, menubtn}: CustomHeaderType) => {
  const navigation = useNavigation();
  return (
    <>
    <TouchableOpacity
      style={styles.headertext}
      onPress={() => navigation.goBack()}>
      {!menubtn ? (
        <Image
          style={{
            height: 15,
            width: 15,
            resizeMode: 'contain',
            marginHorizontal: 10,
            marginLeft: 20,
          }}
          source={Images.left_arrow}
        />
      ) : null}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      
    </TouchableOpacity>
    </>
  );
};

export default CustomHeader;
