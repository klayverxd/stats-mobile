import React, { useState } from 'react'
import { forwardRef } from 'react'

import { Image, Text, TextInput, View } from 'react-native'

import CiclistIcon from '../../assets/ciclist-icon.png'
import NoteIcon from '../../assets/note-icon.png'
import RoadIcon from '../../assets/road-icon.png'

import { styles } from './styles'

export function CreateActivity() {
  const [duration, setDuration] = useState({
    hours: '1',
    minutes: '15',
    seconds: '30',
  })

  const [dataActivity, setDataActivity] = useState({
    title: 'Atividade criada no Stats',
    description:
      'Descrição da atividade fica escrita aqui, este é um exemplo criado pelo Stats.',
    type: 'Ride',
    distance: 20000,
    workout_type: 12,
  })

  const handleDataActivity = prop => event => {
    setDataActivity({ ...dataActivity, [prop]: event.target.value })
  }

  const handleDuration = prop => event => {
    setDuration({ ...duration, [prop]: event })
  }

  console.log(dataActivity.title)

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <Image source={CiclistIcon} style={styles.iconInput} />
        <View style={styles.contentInput}>
          <Text style={styles.labelInput}>Título da atividade: </Text>
          <TextInput
            style={styles.inputText}
            onChange={handleDataActivity('title')}
            value={dataActivity.title}
            placeholder="digite o título da sua atividade..."
          />
        </View>
      </View>

      <View style={styles.containerInput}>
        <Image source={NoteIcon} style={styles.iconInput} />
        <View style={styles.contentInput}>
          <Text style={styles.labelInput}>Descrição: </Text>
          <TextInput
            style={styles.inputText}
            onChangeText={value => handleDataActivity('description', value)}
            defaultValue={dataActivity.description}
            placeholder="digite a descrição da sua atividade..."
            multiline
            numberOfLines={5}
          />
        </View>
      </View>

      <View style={styles.containerInput}>
        <Image source={RoadIcon} style={styles.iconInput} />
        <View style={styles.contentInputRow}>
          <Text style={styles.labelInput}>Distância: </Text>
          <TextInput
            style={styles.inputText}
            onChange={value => handleDataActivity(value)}
            value={dataActivity.distance}
            keyboardType="numeric"
            // placeholder="digite a distância da sua atividade..."
          />
        </View>
      </View>
    </View>
  )
}
