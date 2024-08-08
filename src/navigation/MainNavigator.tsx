import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import CrowdScreen from '../screens/CrowdScreen';
import SocialScreen from '../screens/SocialScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationsScreen from '../screens/NotificationsScreen';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, size }) => {
            let iconName;
            let color;

            if (route.name === 'Crowd') {
              iconName = focused ? 'account-group' : 'account-group-outline';
              color = '#7C00FE';
            } else if (route.name === 'Social') {
              iconName = focused ? 'chat' : 'chat-outline';
              color = '#4ECDC4'; 
            } else if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
              color = '#FFD93D'; 
            } else if (route.name === 'Notifications') {
              iconName = focused ? 'bell' : 'bell-outline';
              color = '#6E44FF'; 
            } else if (route.name === 'Profile') {
              iconName = focused ? 'account' : 'account-outline';
              color = '#FF8C42'; 
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: 'white' },
          headerStyle: { backgroundColor: 'white' },
          headerTintColor: 'black',
          headerTitleStyle: { fontWeight: 'bold' },
        })}
      >
        <Tab.Screen name="Crowd" component={CrowdScreen} />
        <Tab.Screen name="Social" component={SocialScreen} />
        <Tab.Screen name="Home" component={HomeScreen}  />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </View>
  );
};

export default MainNavigation;