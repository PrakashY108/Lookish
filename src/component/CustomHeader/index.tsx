import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Images from '../../assets';
import styles from './style';

import Fonts from '../../theme/Fonts';
import Colors from '../../theme/Colors';

interface CustomHeaderType {
  title: string;
  menubtn?: boolean;
  righticon?: any;
  nobackbtn?: boolean;
}
const CustomHeader = ({
  title,
  menubtn,
  righticon,
  nobackbtn,
}: CustomHeaderType) => {
  const navigation = useNavigation();
  return (
    <>
      {!menubtn ? (
        <View style={styles.container}>
          {nobackbtn ? null : (
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={() => navigation.goBack()}>
              <Image style={styles.icon} source={Images.left_arrow} />
            </TouchableOpacity>
          )}
          <Text
            style={[
              styles.title,
              nobackbtn ? {color: Colors.borderblack,fontSize:30,fontWeight:"700"} : null,
              
            ]}>
            {title}
          </Text>
          <TouchableOpacity style={styles.righticon}>
            <Image
              style={{height: 25, width: 25, tintColor: Colors.btncolor}}
              source={Images.bell}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={[
            styles.container,
            {justifyContent: 'space-between', marginTop: 20},
          ]}>
          <View style={styles.tempcontainer}>
            <Image style={styles.icon} source={Images.drawer_menu} />
            <Image style={styles.logoimg} source={Images.Logo1} />
          </View>
          <View style={styles.tempcontainer}>
            <Image
              style={[styles.icon, {tintColor: 'orange'}]}
              source={Images.sun}
            />
            <Text
              style={{
                color: 'Black',
                fontSize: 15,
                fontWeight: '900',
                fontFamily: Fonts.CormorantGaramond_Italic,
              }}>
              82°/60°
            </Text>
          </View>
        </View>
      )}
    </>
  );
};

export default CustomHeader;
