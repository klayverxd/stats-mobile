import React from 'react'
import { Image, Text, View } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

import { styles } from './styles'

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image
          style={styles.imgUser}
          source={{
            uri: 'https://github.com/klayverxd.png',
          }}
        />
        <View style={styles.contentUserInfo}>
          <Text style={styles.userName}>Klayver Ximenes</Text>
          <Text style={styles.userCity}>
            <Feather name="map-pin" size={16} color="white" />
            Coreaú
          </Text>
        </View>
      </View>
      <View style={styles.exitIcon}>
        <Ionicons name="exit-outline" size={28} color="white" />
      </View>
    </View>
  )
}
