import React, { useContext } from 'react'
import AuthContext from '../../contexts/auth'

import { Image, Text, TouchableOpacity, View } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

import { styles } from './styles'

export function Header() {
  const { signOut } = useContext(AuthContext)

  function handleSignOut() {
    signOut()
  }

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
          <Text style={styles.userLocation}>
            <Feather name="map-pin" size={16} color="white" /> Coreaú, Ceará
          </Text>
        </View>
      </View>
      <View style={styles.exitIcon}>
        <TouchableOpacity onPress={handleSignOut}>
          <Ionicons name="exit-outline" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  )
}
