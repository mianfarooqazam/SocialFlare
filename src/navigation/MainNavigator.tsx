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
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconName;
          let color;

          if (route.name === 'Crowd') {
            iconName = focused ? 'account-group' : 'account-group-outline';
            color = '#FF6B6B'; // Red
          } else if (route.name === 'Social') {
            iconName = focused ? 'chat' : 'chat-outline';
            color = '#4ECDC4'; // Teal
          } else if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            color = '#FFD93D'; // Yellow
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'bell' : 'bell-outline';
            color = '#6E44FF'; // Purple
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account' : 'account-outline';
            color = '#FF8C42'; // Orange
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#F5F5F5' },
      })}
    >
      <Tab.Screen name="Crowd" component={CrowdScreen} />
      <Tab.Screen name="Social" component={SocialScreen} />
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <View style={{
              backgroundColor: '#FFD93D',
              borderRadius: size,
              padding: 5,
              marginBottom: 25, // Adjust this value to position the icon
            }}>
              <Icon 
                name={focused ? 'home' : 'home-outline'} 
                size={size * 1.5} 
                color="#FFFFFF"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigation;