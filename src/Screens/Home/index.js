import React from 'react'
import { StatusBar, Text, View } from 'react-native'

import { Header } from '../../components/Header'

import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        // translucent
      />
      <Header />
    </View>
  )
}
