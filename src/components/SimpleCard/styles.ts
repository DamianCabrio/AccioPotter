import { StyleSheet } from 'react-native';

import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  primary: {
    backgroundColor: colors.white,
    color: colors.black,
  },
  secondary: {
    backgroundColor: colors.grey,
    color: colors.black,
  },
  imageView: {
    width: '100%',
    height: 160,
    marginBottom: 10,
    marginTop: 0,
    paddingTop: 0,
    borderRadius: 30,
  },
  listItemContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: 'transparent',
    borderRadius: 30,
    height: 232,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginTop: 20,
    width: 160,
  },
});

export default styles;
