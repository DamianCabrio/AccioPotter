import { StyleSheet } from 'react-native';

import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.mainOrange,
    borderColor: colors.mainOrange,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    height: 50,
    marginBottom: 10,
    marginTop: 0,
    width: '100%',
  },
  primary: {
    backgroundColor: colors.black,
    color: colors.black,
  },
  secondary: {
    backgroundColor: colors.white,
    color: colors.black,
  },
  imageView: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    borderRadius: 30,
  },
});

export default styles;
