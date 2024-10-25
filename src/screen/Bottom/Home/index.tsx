import {View, Text, Image} from 'react-native';
import React from 'react';
import CustomHeader from '../../../component/CustomHeader';
import MainCloset from './components/Maincloset';
import Images from '../../../assets';

const Home = () => {
  return (
    <View>
      <CustomHeader title="Lookish" />
      <MainCloset />
      <View
        style={{
          width: '80%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          gap: 10,
          borderWidth: 0.5,
          borderColor: 'black',
          borderRadius: 10,
          marginHorizontal:40,
          padding:10,
          opacity:0.1,
          position:"relative",
          bottom:-120
        }}>
        <Image
          style={{
            height: 80,
            width: 120,
            resizeMode: 'cover',
            borderRadius: 11,
          }}
          source={require('../../../assets/images/DummyImages/dummy7.png')}
        />
        <Image
          style={{
            height: 80,
            width: 120,
            resizeMode: 'cover',
            borderRadius: 11,
          }}
          source={require('../../../assets/images/DummyImages/dummy8.png')}
        />
      </View>
    </View>
  );
};

export default Home;
