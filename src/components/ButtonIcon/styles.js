import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: '82%',
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
    fontSize: 17,
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
})
