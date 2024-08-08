import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

const CrowdScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crowd Screen</Text>
      <MapView
        style={{width:"100%",height:"100%"}}
        initialRegion={{
          latitude: 33.72939,
          longitude: 73.09315,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
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