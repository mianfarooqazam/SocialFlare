import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/splash/Splash';
import SplashScreen from './src/splash/SplashScreen';
import MainNavigation from './src/navigation/MainNavigator';

const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleSplashFinish = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Splash onFinish={handleSplashFinish} />;
  }

  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#f3ee76" barStyle="dark-content" />
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Main" component={MainNavigation} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}