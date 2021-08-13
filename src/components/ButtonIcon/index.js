import React from 'react'
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native'

import StravaImg from '../../assets/strava-white.png'

import { styles } from './styles'

export function ButtonIcon({ title, activeOpacity }) {
  function submit() {
    Alert.alert(
      'CALMA MÁ!',
      `Fiz essa parte ainda não 😥${`\n`}Bixo aperreado 🙄`,
      [{ text: 'Tá tá' }]
    )
  }

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={activeOpacity}
      onPress={submit}
    >
      <View style={styles.iconWrapper}>
        <Image source={StravaImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}
