import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../../component/CustomHeader';
import MapView from 'react-native-maps';

const Calendar = () => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={{flex: 1}}>
      <CustomHeader nobackbtn title="Calendar" />
      <View style={{flex: 1}}>
        {loading && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={styles.loadingText}>Loading map...</Text>
          </View>
        )}
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 28.6139, 
            longitude: 77.2090, 
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onMapReady={() => setLoading(false)} 
        />
      </View>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  map: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },
});
