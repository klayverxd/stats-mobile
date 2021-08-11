import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: theme.colors.white,
  },
  title: {
    flex: 1,
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 2,
    borderColor: theme.colors.white,
  },
  icon: {
    width: 24,
    height: 18,
  },
})
