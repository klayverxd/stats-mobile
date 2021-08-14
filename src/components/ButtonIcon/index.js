import React, { useContext } from 'react'
import AuthContext from '../../contexts/auth'

import { Image, Text, TouchableOpacity, View } from 'react-native'

import StravaImg from '../../assets/strava-white.png'

import { styles } from './styles'

export function ButtonIcon({ title, activeOpacity }) {
  const { signed, signIn } = useContext(AuthContext)

  console.log(signed)

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
        <Image source={StravaImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}
