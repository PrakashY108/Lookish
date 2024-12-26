import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import CustomButton from '../../../../../component/CustomButton';
import Colors from '../../../../../theme/Colors';
import {Dropdown} from 'react-native-element-dropdown';
import Header from '../Header';
import { useNavigation } from '@react-navigation/native';
import NavigationRoutes from '../../../../../constants/NavigationRoutes';
const Dropdata = [
  {label: 'Title 1', value: 'title1'},
  {label: 'Title 2', value: 'title2'},
  {label: 'Title 3', value: 'title3'},
  {label: 'Title 4', value: 'title4'},
];
const CategoryData = [
  {
    id: 1,
    title: 'Tops',
    image: require('../../../../../assets/images/DummyImages/dummy21.png'),
  },
  {
    id: 2,
    title: 'Bottoms',
    image: require('../../../../../assets/images/DummyImages/dummy22.png'),
  },
  {
    id: 3,
    title: 'Outerwear',
    image: require('../../../../../assets/images/DummyImages/dummy23.png'),
  },
  {
    id: 4,
    title: 'Shoes',
    image: require('../../../../../assets/images/DummyImages/dummy24.png'),
  },
  {
    id: 5,
    title: 'Accessories',
    image: require('../../../../../assets/images/DummyImages/dummy25.png'),
  },
];
const renderItem = ({item}) => (
  <TouchableOpacity
    style={{
      alignItems: 'center',
      marginHorizontal: 10,
      justifyContent: 'center',
      alignSelf: 'center',
    }}>
    <Image
      style={{height: 130, width: 95, resizeMode: 'contain'}}
      source={item.image}
    />
    <Text style={{fontSize: 15, color: 'black'}}>{item.title}</Text>
  </TouchableOpacity>
);
const MainCloset = () => {
  const navigation= useNavigation()
  return (
    <>
    <Header/>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
          height:70,
        }}>
        <Dropdown
          placeholderStyle={{color: 'black', fontWeight: '500', fontSize: 20}}
          data={Dropdata}
          valueField={'value'}
          labelField={'label'}
          placeholder="Main Closet"
          style={{width: 150, borderRadius: 30}}
        />
        <CustomButton
          border
          bgcolor={Colors.btncolor}
          color={Colors.white}
          title="All My Ish"
          height={40}
          width={150}
          onpress={()=>navigation.navigate(NavigationRoutes.myish)}
        />
      </View>
      <FlatList
        data={CategoryData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={3}
      />
    </>
  );
};

export default MainCloset;
