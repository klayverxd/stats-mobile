import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  title: {
    color: theme.colors.white,
    fontSize: 18,
    textAlign: 'center',
  },
})
