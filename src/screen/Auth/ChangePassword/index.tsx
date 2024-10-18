import { View, Text } from 'react-native'
import React from 'react'
import CustomHeader from '../../../component/CustomHeader'
import Strings from '../../../constants/Strings'
import styles from './style'
import Globalstyles from '../../../theme/GlobalStyles'
import CustomInput from '../../../component/CustomInput'
import CustomButton from '../../../component/CustomButton'
import Colors from '../../../theme/Colors'


const ChangePassword = () => {
  return (
    <View>
      <CustomHeader title='Change Password'/>
      <Text style={Globalstyles.heading}>{Strings.enternewpassword}</Text>
      <View style={styles.passwordcontainer}>
        <CustomInput  placeholder={Strings.passwordnewm} title={Strings.password}/>
        <CustomButton  border bgcolor={Colors.btncolor} color={Colors.white} title={Strings.submit}/>
        
      </View>
    </View>
  )
}

export default ChangePassword