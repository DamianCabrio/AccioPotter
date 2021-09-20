import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    width: 374,
    backgroundColor: colors.softGrey,
    borderRadius: 30,
    marginBottom: 20,
  },
  flatlistContent: {
    paddingHorizontal: 6,
  },
  mainContainer: {
    backgroundColor: colors.grey,
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  listItemContainer: {
    alignItems: 'center',
    backgroundColor: colors.grey,
    borderColor: 'transparent',
    borderRadius: 30,
    borderWidth: 1,
    height: 220,
    justifyContent: 'center',
    paddingHorizontal: 5,
    marginHorizontal: 10,
    marginTop: 20,
    width: 160,
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
