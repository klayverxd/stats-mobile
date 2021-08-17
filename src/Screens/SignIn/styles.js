import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
  },
  imageBackground: {
    flex: 15,
  },
  textContent: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 30,
    justifyContent: 'space-evenly',
  },
  statsImg: {
    width: 160,
    height: 40,
  },
  title: {
    color: theme.colors.white,
    textAlign: 'left',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: theme.colors.white,
    fontSize: 16,
    textAlign: 'left',
  },
  footer: {
    flex: 8,
    backgroundColor: theme.colors.primary,
    // marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  icons: {
    width: '50%',
    height: 36,
  },
})
