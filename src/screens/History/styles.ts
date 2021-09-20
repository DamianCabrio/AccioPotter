import { StyleSheet } from 'react-native';
import { colors } from './../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.grey,

    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    width: '100%',
  },
  wholeScreenCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  flatlistContent: {
    paddingVertical: 10,
    paddingHorizontal: 6,
  },
  flatList: {
    flex: 1,
    width: 374,
    backgroundColor: colors.softGrey,
    borderRadius: 30,
    marginBottom: 20,
  },
  item: {
    alignItems: 'center',
    backgroundColor: colors.yellow,
    borderRadius: 48,
    paddingVertical: 14,
    width: '100%',
  },
});

export default styles;
