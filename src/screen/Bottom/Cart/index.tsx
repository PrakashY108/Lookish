import { View, Text } from 'react-native'
import React from 'react'
import CustomHeader from '../../../component/CustomHeader'

const Cart = () => {
  return (
    <View>
      <CustomHeader nobackbtn title='Cart' />
      <Text>Cart</Text>
    </View>
  )
}

export default Cart