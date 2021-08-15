import React from 'react'

import { useAuth } from '../../contexts/auth'

import { Image, ScrollView, Text, View } from 'react-native'

import Cyclist from '../../assets/cycling.png'
import Cyclists from '../../assets/cyclists.png'

import { styles } from './styles'

export function Stats() {
  const { user } = useAuth()

  return (
    <ScrollView style={styles.containerCards}>
      <View style={styles.container}>
        <View style={styles.containerCard}>
          <View style={styles.cardSection1}>
            <Text style={styles.title}>Distância total</Text>
            <Text style={styles.subTitle}>9.607km</Text>
          </View>
          <View style={styles.cardSection2}>
            <Text style={styles.title}>Elevação total</Text>
            <Text style={styles.subTitle}>2.987m</Text>
          </View>
        </View>
        <View style={styles.containerCard}>
          <View style={styles.cardSection1}>
            <Text style={styles.title}>Maior pedal</Text>
            <Text style={styles.subTitle}>200km</Text>
          </View>
          <View style={styles.cardSection2}>
            <Text style={styles.title}>Maior elevação</Text>
            <Text style={styles.subTitle}>848m</Text>
          </View>
        </View>
        <View style={styles.containerCard}>
          <View style={styles.cardSection1}>
            <Image source={Cyclist} style={styles.iconCard} />
          </View>
          <View style={styles.cardSection2}>
            <Text style={styles.title}>Pedaladas</Text>
            <Text style={styles.subTitle}>270</Text>
          </View>
        </View>
        <View style={styles.containerCard}>
          <View style={styles.cardSection1}>
            <Image source={Cyclists} style={styles.iconCard} />
          </View>
          <View style={styles.cardSection2}>
            <Text style={styles.title}>Clubes</Text>
            <Text style={styles.subTitle}>19</Text>
          </View>
        </View>
        <View style={styles.containerCardLastActivity}>
          <Text style={styles.titleLastActivity}>Última atividade 🚲</Text>
          <View style={styles.line}>
            <Text style={styles.target}> Título:</Text>
            <Text style={styles.description}>Angicos ☁️</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.target}> Distância:</Text>
            <Text style={styles.description}>49,3 km</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.target}> Elevação:</Text>
            <Text style={styles.description}>441 m</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.target}> Kudos:</Text>
            <Text style={styles.description}>23</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.target}>Vel. média:</Text>
            <Text style={styles.description}>18,3 km/h</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.target}>Vel. máxima:</Text>
            <Text style={styles.description}>36,4 km/h</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
