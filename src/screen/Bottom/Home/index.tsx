import { View, Text } from 'react-native'
import React from 'react'
import CustomHeader from '../../../component/CustomHeader'
import MainCloset from './components/Maincloset'

const Home = () => {
  return (
    <View>
      <CustomHeader title='Lookish'/>
      <MainCloset/>
    </View>
  )
}

export default Home