import React from 'react'
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'

import styles from './styles'

export default function TelaPadrao({ children }) {
  return (
    <>
      <SafeAreaView style={styles.ajusteTela}>
        <StatusBar backgroundColor={'#red'} />
        {children}
      </SafeAreaView>
      <SafeAreaView style={styles.ajusteTelaBaixo} />
    </>
  )
}

const styles = StyleSheet.create({
  ajusteTela: {
    flex: 1,
    backgroundColor: cores.roxo,
  },
  ajusteTelaBaixo: {
    flex: 0,
    backgroundColor: cores.laranja,
  },
})
