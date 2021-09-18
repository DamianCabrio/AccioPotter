import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  flatList: {
    //flex: 1,
    width: 374,
    backgroundColor: colors.white,
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
  },
  listItemContainer: {
    alignItems: 'center',
    backgroundColor: colors.grey,
    borderColor: 'transparent',
    borderRadius: 30,
    height: 220,
    justifyContent: 'center',
    paddingHorizontal: 5,
    marginHorizontal: 10,
    marginTop: 20,
    width: 160,
  },

  wholeScreenCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  imageView: {
    width: '100%',
    height: 100,
    margin: 7,
    borderRadius: 7,
  },
});

export default styles;
