import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import StravaImg from '../../assets/strava-white.png'

import { styles } from './styles'

export function ButtonIcon({ title, activeOpacity }) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={activeOpacity}>
      <View style={styles.iconWrapper}>
        <Image source={StravaImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}
