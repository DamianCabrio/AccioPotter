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
    borderRadius: 30,
    paddingHorizontal: 15,
  },
});

export default styles;
