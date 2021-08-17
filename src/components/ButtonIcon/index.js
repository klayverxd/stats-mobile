import React from 'react'

import { useAuth } from '../../contexts/auth'

import { Text, TouchableOpacity, View } from 'react-native'

import StravaImg from '../../assets/strava-white.svg'

import { styles } from './styles'

export function ButtonIcon({ title, activeOpacity }) {
  const { signed, signIn } = useAuth()

  function handleSignIn() {
    signIn()
  }

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={activeOpacity}
      onPress={handleSignIn}
    >
      <View style={styles.iconWrapper}>
        <StravaImg width={32} hight={32} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}
