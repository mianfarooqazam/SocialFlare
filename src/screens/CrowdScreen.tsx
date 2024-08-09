import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Region } from 'react-native-maps';
import { Provider as PaperProvider } from 'react-native-paper';
import Toast from 'react-native-toast-message';

const CrowdScreen = () => {
  const islamabadRegion: Region = {
    latitude: 33.72939,
    longitude: 73.09315,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const [region, setRegion] = useState(islamabadRegion);

  const onRegionChangeComplete = (newRegion: Region) => {
    // Define the boundaries of Islamabad
    const minLat = 33.5651;
    const maxLat = 33.7715;
    const minLong = 72.9289;
    const maxLong = 73.2932;

    if (
      newRegion.latitude < minLat ||
      newRegion.latitude > maxLat ||
      newRegion.longitude < minLong ||
      newRegion.longitude > maxLong
    ) {
      // If the new region is outside Islamabad, show toast and reset to initial region
      Toast.show({
        type: 'info',
        text1: 'This service is for Islamabad only',
        position: 'bottom',
        visibilityTime: 2000,
      });
      setRegion(islamabadRegion);
    } else {
      setRegion(newRegion);
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Crowd Screen</Text>
        <MapView
          style={{width:"100%", height:"100%"}}
          region={region}
          onRegionChangeComplete={onRegionChangeComplete}
        />
      </View>
      <Toast />
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.7,
  },
});

export default CrowdScreen;