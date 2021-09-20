import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.grey,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 70,
    width: '100%',
  },
  subContainer: {
    backgroundColor: colors.grey,
    paddingHorizontal: 20,
  },
  wholeScreenCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
});

export default styles;
