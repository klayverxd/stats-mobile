import React from 'react'
import { StyleSheet, Image, View } from 'react-native'

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        style={styles.imgUser}
        source={{
          uri: 'https://github.com/klayverxd.png',
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 86,
    marginTop: 28,
    backgroundColor: 'coral',
  },
  imgUser: {
    width: 70,
    height: 70,
    borderRadius: 30,
  },
})
