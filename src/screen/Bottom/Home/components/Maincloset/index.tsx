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
import {useNavigation} from '@react-navigation/native';
import NavigationRoutes from '../../../../../constants/NavigationRoutes';
import styles from './style';
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
  {
    id: 5,
    title: 'Caps',
    image: require('../../../../../assets/images/DummyImages/dummy12.png'),
  },
];
const renderItem = ({item}) => (
  <TouchableOpacity
    style={{
      alignItems: 'center',
      marginHorizontal: '4%',
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 10,
      marginVertical: 5,
    }}>
    <Image
      style={{height: 90, width: 90, resizeMode: 'contain'}}
      source={item.image}
    />
    <Text style={{fontSize: 15, color: 'black', marginTop: 7}}>
      {item.title}
    </Text>
  </TouchableOpacity>
);
const MainCloset = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      {/* <View
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
      </View> */}
      <View
        style={{
          backgroundColor: '#efefed',
          borderRadius: 10,
          paddingVertical: 10,
          elevation: 5,
          justifyContent: 'space-around',
          borderColor: Colors.grey,
          borderWidth: 0.5,
        }}>
        <Text style={styles.text}>Categories</Text>
        <FlatList
          data={CategoryData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={3}
        />
      </View>
    </>
  );
};

export default MainCloset;
