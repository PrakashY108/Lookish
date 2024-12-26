import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import CustomHeader from '../../../component/CustomHeader';
import {createAnimatableComponent} from 'react-native-animatable';
import Colors from '../../../theme/Colors';
const Animatedtouchopacity = createAnimatableComponent(TouchableOpacity);
const Profile = () => {
  const width = useSharedValue(70);
  const height = useSharedValue(70);
  const imageWidth = useSharedValue(70);
  const imageHeight = useSharedValue(70);
  const radius = useSharedValue(25);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
      width: width.value,
      borderRadius: radius.value,
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  });

  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      height: imageHeight.value,
      width: imageWidth.value,
    };
  });

  const triggerAnimation = () => {
    const newSize = width.value === 70 ? 200 : 70;
    const newTranslationX = translateX.value === 0 ? 30 : 0;
    const newTranslationY = translateY.value === 0 ? 200 : 0;

    // Animate size and position
    width.value = withTiming(newSize, {duration: 300});
    height.value = withTiming(newSize, {duration: 300});
    imageWidth.value = withTiming(newSize * 1.5, {duration: 300});
    imageHeight.value = withTiming(newSize * 1.5, {duration: 300});
    radius.value = withTiming(newSize / 2, {duration: 300});
    translateX.value = withTiming(newTranslationX, {duration: 300});
    translateY.value = withTiming(newTranslationY, {duration: 300});
  };
  const DetailCard = ({title, value}: any) => (
    <View style={styles.detailcard}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.valuetext}>{value}</Text>
    </View>
  );
  return (
    <ScrollView>
      <CustomHeader nobackbtn title="Profile" />
      <View style={styles.profilecontainer}>
        <Animatedtouchopacity
          style={[styles.animatedBox, animatedStyle]}
          onPress={triggerAnimation}>
          <Animated.Image
            style={[styles.image, animatedImageStyle]}
            source={require('../../../assets/images/demoprofile.png')}
          />
        </Animatedtouchopacity>
        <Text
          style={[
            styles.text,
            {color: 'red', fontSize: 18, marginTop: 15, fontWeight: '600'},
          ]}>
          Hello User !
        </Text>
      </View>
      <View style={styles.detailContainer}>
        <DetailCard title={'Name'} value={'ABC'} />
        <DetailCard title={'Email'} value={'abc@gmail.com'} />
        <DetailCard title={'Phone No'} value={'9327864247'} />
        <DetailCard title={'DOB'} value={'2023-02-12'} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profilecontainer: {
    alignItems: 'center',
    backgroundColor: Colors.grey,
    padding: 15,
    marginHorizontal: 15,
    borderRadius: 20,
    elevation:10
  },
  animatedBox: {
    // marginBottom: 20,
  },
  image: {
    resizeMode: 'contain',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
  },
  valuetext: {
    fontSize: 17,
    fontWeight: '900',
    color: Colors.btncolor,
  },
  detailContainer: {
    backgroundColor: Colors.grey,
    marginHorizontal: 15,
    borderRadius: 20,
    marginTop: 20,
    elevation:10,
    shadowColor:"grey",
    
  },
  detailcard: {
    marginHorizontal: 15,
    marginVertical: 7,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
});

export default Profile;
