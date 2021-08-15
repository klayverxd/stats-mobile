import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: theme.colors.primary,

    paddingVertical: 12,
    paddingHorizontal: 16,
  },

  containerCards: {
    flex: 1,
  },

  containerCard: {
    flexDirection: 'row',
    alignItems: 'center',

    marginVertical: 12,
    paddingVertical: 24,

    borderWidth: 2,
    borderColor: theme.colors.white,
    borderRadius: 24,
  },
  title: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitle: {
    color: theme.colors.white,
    fontSize: 28,
    fontWeight: 'bold',
  },
  cardSection1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 2,
    borderColor: theme.colors.white,
  },
  cardSection2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerCardLastActivity: {
    marginVertical: 12,
    paddingHorizontal: 20,
    paddingVertical: 14,

    borderWidth: 2,
    borderColor: theme.colors.white,
    borderRadius: 24,
  },
  titleLastActivity: {
    color: theme.colors.white,

    fontSize: 20,
    fontWeight: 'bold',

    marginBottom: 4,
  },
  line: {
    flexDirection: 'row',

    marginVertical: 4,
    borderBottomWidth: 1,
    borderColor: theme.colors.white,
  },
  target: {
    color: theme.colors.white,
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: theme.colors.white,
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'flex-end',
  },
})
