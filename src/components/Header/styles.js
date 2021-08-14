import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    height: 86,
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.9,
    elevation: 16,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgUser: {
    width: 60,
    height: 60,
    marginRight: 16,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: theme.colors.white,
  },
  userName: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  userLocation: {
    color: theme.colors.white,
    // marginLeft: 4,
    fontSize: 16,
  },
})
