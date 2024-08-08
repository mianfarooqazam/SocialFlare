// import React, { useState, useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
// import SplashScreen from './src/splash/SplashScreen';
// import MainNavigation from './src/navigation/MainNavigator';

// export default function App() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 10000); 
//   }, []);

//   if (isLoading) {
//     return <SplashScreen />;
//   }

//   return (
//     <NavigationContainer>
//       <StatusBar style="auto" />
//       <MainNavigation />
//     </NavigationContainer>
//   );
// }

import React from 'react';
import { View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import SplashScreen from './src/splash/SplashScreen';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f3ee76' }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
          <SplashScreen />
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="dark" backgroundColor="#f3ee76" />
    </View>
  );
}