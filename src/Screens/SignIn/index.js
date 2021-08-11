import React from 'react'
import {
  Text,
  View,
  Image,
  StatusBar,
  ImageBackground,
  SafeAreaView,
} from 'react-native'

import IllustrationImg from '../../assets/illustration.png'
import StatsImg from '../../assets/stats-white.png'
import { ButtonIcon } from '../../components/ButtonIcon'

import { styles } from './styles'

export function SignIn() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <View style={styles.content}>
        <ImageBackground
          source={IllustrationImg}
          style={styles.imageBackground}
          // resizeMode="stretch"
        >
          <View style={styles.textContent}>
            <Image
              source={StatsImg}
              style={styles.statsImg}
              resizeMode="stretch"
            />
            <Text style={styles.title}>
              Olá, ciclista!{`\n`}
              Bem-vindo ao Stats.
            </Text>

            <Text style={styles.subtitle}>
              Somos um aplicativo voltado para praticantes{`\n`}
              de ciclismo, e vamos te ajudar a visualizar{`\n`}
              alguns dos seus dados presentes na sua{`\n`}
              conta do Strava.
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.footer}>
          <ButtonIcon title="Entrar com o Strava" activeOpacity={0.7} />
        </View>
      </View>
    </View>
  )
}
