import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  flatList: {
    //flex: 1,
    width: 374,
    backgroundColor: colors.softGrey,
    borderRadius: 30,
    marginBottom: 20,
  },
  flatlistContent: {
    paddingHorizontal: 6.75,
  },
  mainContainer: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
    backgroundColor: colors.grey,
  },
  wholeScreenCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
});

export default styles;
