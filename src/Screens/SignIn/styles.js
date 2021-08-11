import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  imageBackground: {
    flex: 18,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  content: {
    paddingVertical: 30,
    height: '100%',
  },
  textContent: {
    paddingHorizontal: 30,
  },
  statsImg: {
    width: 160,
    height: 40,
    marginBottom: 30,
  },
  title: {
    color: theme.colors.white,
    textAlign: 'left',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  subtitle: {
    color: theme.colors.white,
    fontSize: 16,
    textAlign: 'left',
  },
  footer: {
    flex: 6,
    // height: 500,
    backgroundColor: 'red',
    padding: 40,
  },
})
