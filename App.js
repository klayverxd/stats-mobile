import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AuthProvider } from './src/contexts/auth'

import Routes from './src/routes'

import { AppearanceProvider } from 'react-native-appearance'

export default function App() {
  return (
    <AppearanceProvider>
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </AppearanceProvider>
  )
}
