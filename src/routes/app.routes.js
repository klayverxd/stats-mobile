import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Image, StatusBar } from 'react-native'

import { Header } from '../components/Header'

import { Stats } from '../screens/Stats'
import { CreateActivity } from '../screens/CreateActivity'
import { Equipment } from '../screens/Equipment'

import BarChart from '../assets/bar-chart.png'
import Road from '../assets/road.png'
import Wheel from '../assets/wheel.png'

import { theme } from '../global/styles/theme'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Header />
      <Tab.Navigator
        initialRouteName="Stats"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#252525',
          },
          tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.5)',
          tabBarActiveTintColor: theme.colors.primary,
        }}
      >
        <Tab.Screen
          name="Stats"
          component={Stats}
          options={{
            title: 'Estatísticas',
            tabBarIcon: () => (
              <Image source={BarChart} style={{ width: 20, height: 20 }} />
            ),
          }}
        />
        <Tab.Screen
          name="CreateActivity"
          component={CreateActivity}
          options={{
            title: 'Criar atividade',
            tabBarIcon: () => (
              <Image source={Road} style={{ width: 20, height: 20 }} />
            ),
          }}
        />
        <Tab.Screen
          name="Equipment"
          component={Equipment}
          options={{
            title: 'Equipamentos',
            tabBarIcon: () => (
              <Image source={Wheel} style={{ width: 20, height: 20 }} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  )
}
