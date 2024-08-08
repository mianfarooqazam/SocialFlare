import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/splash/Splash';
import SplashScreen from './src/splash/SplashScreen';
import MainNavigation from './src/navigation/MainNavigator';

const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showSplashScreen, setShowSplashScreen] = useState(false);

  useEffect(() => {
    if (!isLoading && !showSplashScreen) {
      setShowSplashScreen(true);
    }
  }, [isLoading, showSplashScreen]);

  const handleSplashFinish = () => {
    setIsLoading(false);
  };

  const handleLogin = () => {
    setShowSplashScreen(false);
  };

  if (isLoading) {
    return <Splash onFinish={handleSplashFinish} />;
  }

  return (
    <NavigationContainer>
      <View style={{ flex: 1, backgroundColor: '#f3ee76' }}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
            <Stack.Navigator
              screenOptions={{
                headerShown: false
              }}
            >
              {showSplashScreen ? (
                <Stack.Screen name="SplashScreen">
                  {(props) => <SplashScreen {...props} onLogin={handleLogin} />}
                </Stack.Screen>
              ) : (
                <Stack.Screen name="Main" component={MainNavigation} />
              )}
            </Stack.Navigator>
          </View>
        </SafeAreaView>
        <ExpoStatusBar style="dark" backgroundColor="#f3ee76" />
      </View>
    </NavigationContainer>
  );
}