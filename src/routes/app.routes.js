import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { StatusBar } from 'react-native'

import { Header } from '../components/Header'

import { Stats } from '../screens/Stats'
import { CreateActivity } from '../screens/CreateActivity'
import { Equipment } from '../screens/Equipment'

import BarChart from '../assets/bar-chart.svg'
import Road from '../assets/road.svg'
import Wheel from '../assets/wheel.svg'

import { theme } from '../global/styles/theme'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <>
      <StatusBar />
      <Header />
      <Tab.Navigator
        initialRouteName="Stats"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.colors.secondary,
          },
          tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.5)',
          tabBarActiveTintColor: theme.colors.white,
        }}
      >
        <Tab.Screen
          name="Stats"
          component={Stats}
          options={{
            title: 'Estatísticas',
            tabBarIcon: () => <BarChart width={22} height={22} />,
          }}
        />
        <Tab.Screen
          name="CreateActivity"
          component={CreateActivity}
          options={{
            title: 'Criar atividade',
            tabBarIcon: () => <Road width={22} height={22} />,
          }}
        />
        <Tab.Screen
          name="Equipment"
          component={Equipment}
          options={{
            title: 'Equipamentos',
            tabBarIcon: () => <Wheel width={22} height={22} />,
          }}
        />
      </Tab.Navigator>
    </>
  )
}
