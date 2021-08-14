import React, { useState, useEffect, createContext, useContext } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'

import * as auth from '../services/auth'

import api from '../services/api'

const AuthContext = createContext({ signed: false, token: '' })

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStorageData() {
      // usar multiGet para pegar todos os dados
      const storageUser = await AsyncStorage.getItem('@RNAuth:user')
      const storageToken = await AsyncStorage.getItem('@RNAuth:token')

      if (storageUser && storageToken) {
        api.defaults.headers.Authorization = `Bearer ${storageToken}`

        setUser(JSON.parse(storageUser))
        setLoading(false)
      }
      setLoading(false)
    }

    loadStorageData()
  }, [])

  async function signIn() {
    const response = await auth.signIn()

    const { token, user } = response

    setUser(response.user)

    api.defaults.headers.Authorization = `Bearer ${response.token}`

    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user))
    await AsyncStorage.setItem('@RNAuth:token', response.token)
  }

  async function signOut() {
    // revoga o token aqui

    await AsyncStorage.clear()
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
