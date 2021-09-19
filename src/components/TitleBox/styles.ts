import { StyleSheet } from 'react-native';

import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    height: 109,
    width: 374,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.yellow,
    borderRadius: 48,
    paddingHorizontal: 15,
  },
  primary: {
    backgroundColor: colors.mainOrange,
    borderColor: colors.mainOrange,
  },
  secondary: {
    backgroundColor: colors.white,
    borderColor: colors.mainOrange,
  },
  textInput: {
    backgroundColor: colors.yellow,
    color: colors.brown,
    borderRadius: 48,
    height: 43,
    paddingHorizontal: 5,
    width: '90%',
  },
  searchIcon: {
    padding: 10,
  },
});

export const buttonTextColors = {
  primary: colors.white,
  secondary: colors.mainOrange,
};

export default styles;
