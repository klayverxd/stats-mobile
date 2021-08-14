import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Header } from '../components/Header'

import { Stats } from '../screens/Stats'
import { CreateActivity } from '../screens/CreateActivity'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <>
      <Header />
      <Tab.Navigator>
        <Tab.Screen name="Stats" component={Stats} />
        <Tab.Screen name="CreateActivity" component={CreateActivity} />
      </Tab.Navigator>
    </>
  )
}
