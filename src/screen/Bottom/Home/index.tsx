import {View, Text, Image} from 'react-native';
import React from 'react';
import CustomHeader from '../../../component/CustomHeader';
import MainCloset from './components/Maincloset';
import Images from '../../../assets';
import styles from './style';

const Home = () => {
 
  return (
    <View style={{marginHorizontal: 7}}>
      <CustomHeader menubtn title="Lookish" />
      <MainCloset />
      <View style={styles.bottomclosetcontainer}>
        <Image
          style={styles.img}
          source={require('../../../assets/images/DummyImages/dummy7.png')}
        />
        <Image
          style={styles.img}
          source={require('../../../assets/images/DummyImages/dummy8.png')}
        />
      </View>
    </View>
  );
};

export default Home;
