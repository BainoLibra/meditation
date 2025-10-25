import { Tabs } from 'expo-router';
import React from 'react';

import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  
  return (
    <Tabs
      screenOptions={{
        headerShown: false
      }}>
      <Tabs.Screen
        name="Meditations"
        options={{
          title: 'Meditations',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Breathing"
        options={{
          title: 'Breathing',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="paper-plane" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Journal"
        options={{
          title: 'Journal',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="book" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="person" color={color} />,
        }}
      />
    </Tabs>
  );
}
