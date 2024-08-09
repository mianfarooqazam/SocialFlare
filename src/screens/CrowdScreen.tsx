import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import MapView, { Region, Circle } from 'react-native-maps';
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

  // 5 fixed heatmap points
  const heatmapData = [
    { latitude: 33.72939, longitude: 73.09315, weight: 1 },    // Center
    { latitude: 33.73939, longitude: 73.10315, weight: 0.8 },  // Northeast
    { latitude: 33.71939, longitude: 73.08315, weight: 0.6 },  // Southwest
    { latitude: 33.73439, longitude: 73.08815, weight: 0.4 },  // Northwest
    { latitude: 33.72439, longitude: 73.09815, weight: 0.2 },  // Southeast
  ];

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

  const getColor = (weight) => {
    const colors = ["#79BC6A", "#BBCF4C", "#EEC20B", "#F29305", "#E50000"];
    const index = Math.floor(weight * (colors.length - 1));
    return colors[index];
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <MapView
          style={styles.map}
          region={region}
          onRegionChangeComplete={onRegionChangeComplete}
        >
          {heatmapData.map((point, index) => (
            <Circle
              key={index}
              center={{
                latitude: point.latitude,
                longitude: point.longitude,
              }}
              radius={500 + point.weight * 1000}
              fillColor={`${getColor(point.weight)}70`} // 70 is for 44% opacity
              strokeColor="transparent"
            />
          ))}
        </MapView>
        <Toast />
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default CrowdScreen;