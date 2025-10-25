import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="Meditations"
        options={{
          title: 'Meditations',
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Breathing"
        options={{
          title: 'Breathing',
          tabBarIcon: ({ color }) => <Ionicons name="paper-plane-outline" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Journal"
        options={{
          title: 'Journal',
          tabBarIcon: ({ color }) => <Ionicons name="book-outline" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
