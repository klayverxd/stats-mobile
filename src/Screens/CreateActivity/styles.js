import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,

    flex: 1,

    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  containerInput: {
    alignItems: 'center',

    borderWidth: 2,
    borderColor: theme.colors.white,
    borderRadius: 24,

    flexDirection: 'row',

    minHeight: 64,
    marginVertical: 12,

    padding: 10,
  },

  iconInput: {
    marginRight: 12,
  },

  contentInput: {
    flex: 1,
    borderLeftWidth: 1,
    borderColor: theme.colors.white,

    paddingLeft: 12,
    minHeight: 64,
  },

  contentInputRow: {
    alignItems: 'center',
    borderLeftWidth: 1,
    borderColor: theme.colors.white,

    flex: 1,
    flexDirection: 'row',

    paddingLeft: 12,
    minHeight: 64,
  },

  labelInput: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: 'bold',

    marginBottom: 4,
  },

  inputText: {
    color: theme.colors.white,

    width: '100%',
    fontSize: 16,
  },

  inputNumber: {
    // backgroundColor: 'blue',
    color: theme.colors.white,

    minWidth: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  unitOfMeasure: {
    color: theme.colors.white,

    fontSize: 16,
  },

  containerSelect: {
    borderWidth: 2,
    borderColor: theme.colors.white,
    borderRadius: 24,

    flexDirection: 'row',

    minHeight: 64,
    marginVertical: 12,

    padding: 10,
  },

  contentSelect: {
    color: theme.colors.white,

    borderLeftWidth: 1,
    borderColor: theme.colors.white,

    width: '80%',
  },

  itemSelect: {
    fontWeight: 'bold',
  },

  containerRadioInput: {
    alignItems: 'center',

    borderWidth: 2,
    borderColor: theme.colors.white,
    borderRadius: 24,

    minHeight: 64,
    marginVertical: 12,

    padding: 10,
  },
  contentRadioInput: {
    color: theme.colors.white,
  },
  containerInputButtom: {
    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 2,
    borderColor: theme.colors.white,
    borderRadius: 24,

    minHeight: 64,
    marginVertical: 12,

    padding: 10,
  },
  textButton: {
    color: theme.colors.white,
    fontSize: 18,
  },
})
