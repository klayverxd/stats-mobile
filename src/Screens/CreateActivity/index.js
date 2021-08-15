import React, { useState } from 'react'

import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import { Picker } from '@react-native-picker/picker'
import RadioGroup from 'react-native-radio-buttons-group'

import CiclistIcon from '../../assets/ciclist-icon.png'
import NoteIcon from '../../assets/note-icon.png'
import RoadIcon from '../../assets/road-icon.png'
import ClockIcon from '../../assets/clock-icon.png'
import ClockHourIcon from '../../assets/clock-hour-icon.png'
import SneakersIcon from '../../assets/sneakers-icon.png'

import { styles } from './styles'

const radioButtonsData = [
  {
    id: '1',
    label: 'Prova',
    value: '10',
    borderColor: '#fff',
    color: '#fff',

    labelStyle: {
      marginRight: 35,
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  },
  {
    id: '2',
    label: 'Treino',
    value: '12',
    borderColor: '#fff',
    color: '#fff',
    selected: true,
    labelStyle: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  },
]

export function CreateActivity() {
  const [radioButtons, setRadioButtons] = useState(radioButtonsData)

  const [duration, setDuration] = useState({
    hours: '01',
    minutes: '15',
    seconds: '30',
  })

  const [dataActivity, setDataActivity] = useState({
    title: 'Atividade criada no Stats',
    description:
      'Descrição da atividade fica escrita aqui, este é um exemplo criado pelo Stats.',
    type: 'Ride',
    distance: 20,
    workout_type: 12,
  })

  function onPressRadioButton(radioButtonsArray) {
    const selected = radioButtonsArray.filter(function (obj) {
      return obj.selected
    })

    setRadioButtons(radioButtonsArray)
    handleDataActivity('workout_type', selected[0].value)
  }

  const handleDataActivity = (prop, value) => {
    setDataActivity({ ...dataActivity, [prop]: value })
  }

  const handleDuration = prop => event => {
    setDuration({ ...duration, [prop]: event })
  }

  return (
    <ScrollView style={styles.containerCards}>
      <View style={styles.container}>
        <View style={styles.containerInput}>
          <Image source={CiclistIcon} style={styles.iconInput} />
          <View style={styles.contentInput}>
            <Text style={styles.labelInput}>Título da atividade: </Text>
            <TextInput
              style={styles.inputText}
              onChangeText={value => handleDataActivity('title', value)}
              defaultValue={dataActivity.title}
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
            <Text style={styles.labelInput}>Distância (km): </Text>
            <TextInput
              style={styles.inputNumber}
              onChangeText={value => handleDataActivity('distance', value)}
              defaultValue={String(dataActivity.distance)}
              keyboardType="numeric"
            />
            <Text style={styles.unitOfMeasure}>km</Text>
          </View>
        </View>

        <View style={styles.containerInput}>
          <Image source={ClockIcon} style={styles.iconInput} />
          <View style={styles.contentInputRow}>
            <Text style={styles.labelInput}>Duração: </Text>
            <TextInput
              style={styles.inputNumber}
              onChangeText={value => handleDuration('hours', value)}
              defaultValue={String(duration.hours)}
              keyboardType="numeric"
            />
            <Text style={styles.unitOfMeasure}>h </Text>
            <TextInput
              style={styles.inputNumber}
              onChangeText={value => handleDuration('minutes', value)}
              defaultValue={String(duration.minutes)}
              keyboardType="numeric"
            />
            <Text style={styles.unitOfMeasure}>min </Text>
            <TextInput
              style={styles.inputNumber}
              onChangeText={value => handleDuration('seconds', value)}
              defaultValue={String(duration.seconds)}
              keyboardType="numeric"
            />
            <Text style={styles.unitOfMeasure}>s</Text>
          </View>
        </View>

        <View style={styles.containerInput}>
          <Image source={ClockHourIcon} style={styles.iconInput} />
          <View style={styles.contentInputRow}>
            <Text style={styles.labelInput}>Hora: </Text>
            <TextInput
              style={styles.inputNumber}
              onChangeText={value => handleDuration('hours', value)}
              defaultValue={String(duration.hours)}
              keyboardType="numeric"
            />
            <Text style={styles.unitOfMeasure}>h </Text>
            <TextInput
              style={styles.inputNumber}
              onChangeText={value => handleDuration('minutes', value)}
              defaultValue={String(duration.minutes)}
              keyboardType="numeric"
            />
            <Text style={styles.unitOfMeasure}>min </Text>
            <TextInput
              style={styles.inputNumber}
              onChangeText={value => handleDuration('seconds', value)}
              defaultValue={String(duration.seconds)}
              keyboardType="numeric"
            />
            <Text style={styles.unitOfMeasure}>s</Text>
          </View>
        </View>

        <View style={styles.containerInput}>
          <Image source={SneakersIcon} style={styles.iconInput} />
          <View style={styles.contentInputRow}>
            <Text style={styles.labelInput}>Tipo: </Text>
            <Picker
              selectedValue={dataActivity.type}
              onValueChange={value => handleDataActivity('type', value)}
              style={styles.contentSelect}
            >
              <Picker.Item
                label="Pedalada"
                value="Ride"
                style={styles.itemSelect}
              />
              <Picker.Item label="Corrida" value="Run" />
            </Picker>
          </View>
        </View>

        <View style={styles.containerRadioInput}>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={onPressRadioButton}
            layout="row"
          />
        </View>

        <TouchableOpacity
          style={styles.containerInputButtom}
          activeOpacity={0.7}
          // onPress={handleSignIn}
        >
          <Text style={styles.textButton}>CRIAR ATIVIDADE</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
