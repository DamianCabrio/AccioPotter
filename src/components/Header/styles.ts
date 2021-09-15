import { StyleSheet } from 'react-native';

import { IS_ANDROID } from '../../utils/constants';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: IS_ANDROID ? 84 : 40,
  },
  sideButtonContainer: {
    height: 40,
    width: 40,
  },
  titleContainer: {
    alignItems: 'center',
    flex: 1,
  },
  image: {
    justifyContent: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 30,
  },
});

export default styles;
