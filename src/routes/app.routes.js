import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Image } from 'react-native'

import { Header } from '../components/Header'

import { Stats } from '../screens/Stats'
import { CreateActivity } from '../screens/CreateActivity'
import { Equipment } from '../screens/Equipment'

import StatsImg from '../assets/logo-strava.png'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <>
      <Header />
      <Tab.Navigator
        initialRouteName="Stats"
        screenOptions={{
          headerShown: false,
        }}
        // barStyle={{ backgroundColor: '#694fad' }}
      >
        <Tab.Screen
          name="Stats"
          component={Stats}
          options={{
            tabBarIcon: () => (
              <Image source={StatsImg} style={{ width: 20, height: 20 }} />
            ),
          }}
        />
        <Tab.Screen name="CreateActivity" component={CreateActivity} />
        <Tab.Screen name="Equipment" component={Equipment} />
      </Tab.Navigator>
    </>
  )
}
