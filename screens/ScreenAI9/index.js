import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
  const location = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };
  return <View style={styles.container}>
      <MapView style={styles.map} initialRegion={location}>
        <Marker coordinate={{
        latitude: location.latitude,
        longitude: location.longitude
      }} />
      </MapView>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});
export default MapScreen;