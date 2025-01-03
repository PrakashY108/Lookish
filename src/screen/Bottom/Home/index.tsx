import {View, Text, Image, FlatList, ScrollView} from 'react-native';
import React from 'react';
import CustomHeader from '../../../component/CustomHeader';
import MainCloset from './components/Maincloset';
import Images from '../../../assets';
import styles from './style';

const Home = () => {
  const data = [
    {
      title: 'Jeans',
      image: Images.dummyImage.dummy10,
      description: 'Stylish and comfortable jeans, perfect for casual wear.',
      price: '$49.99',
      category: 'Clothing',
      availability: 'In Stock',
    },
    {
      title: 'Caps',
      image: Images.dummyImage.dummy12,
      description: 'Trendy caps to complete your casual look.',
      price: '$19.99',
      category: 'Accessories',
      availability: 'Limited Stock',
    },
    {
      title: 'Watches',
      image: Images.dummyImage.dummy14,
      description: 'Sleek and elegant watches for every occasion.',
      price: '$129.99',
      category: 'Accessories',
      availability: 'In Stock',
    },
    {
      title: 'Jewellery',
      image: Images.dummyImage.dummy13,
      description: 'Exquisite jewellery for special moments.',
      price: '$199.99',
      category: 'Accessories',
      availability: 'Out of Stock',
    },
    {
      title: 'Caps',
      image: Images.dummyImage.dummy12,
      description: 'Trendy caps to complete your casual look.',
      price: '$19.99',
      category: 'Accessories',
      availability: 'Limited Stock',
    },
  ];
  const renderHeader = () => (
    <View>
      <CustomHeader menubtn title="Lookish" />
      <MainCloset />
    </View>
  );
  const renderItem = ({item}: any) => {
    return (
      
      <View style={styles.card}>
        <Image style={styles.img} source={item.image} />
        <View style={styles.details}>
          <Text style={styles.title}>{item.title.substring(0, 40)}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.category}>{item.category}</Text>
          <Text style={[styles.price]}>{item.price}</Text>
          <Text
            style={[
              styles.availability,
              item?.availability === 'Out of Stock'
                ? {color: 'red'}
                : {color: 'green'},
            ]}>
            {item.availability}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex:1}}>
      <View style={{marginTop:30}}>
      <FlatList data={data}
      ListHeaderComponent={renderHeader} showsVerticalScrollIndicator={false} renderItem={renderItem}/>
      </View>
    </View>
  );
};

export default Home;
