import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    width: '100%',
  },
  flatlistContent: {
    paddingHorizontal: 20,
  },
  mainContainer: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  listItemContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 20,
    width: '100%',
  },
  listItemContainerShadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  wholeScreenCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
});

export default styles;
