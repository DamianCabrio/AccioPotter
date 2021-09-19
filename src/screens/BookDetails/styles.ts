import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.grey,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 320,
    width: '100%',
  },
  wholeScreenCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
});

export default styles;
