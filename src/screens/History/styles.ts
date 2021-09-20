import { StyleSheet } from 'react-native';
import { colors } from './../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  wholeScreenCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  flatlistContent: {
    paddingHorizontal: 6,
  },
  flatList: {
    flex: 1,
    width: 374,
    backgroundColor: colors.white,
    borderRadius: 30,
    marginBottom: 20,
  },
});

export default styles;
