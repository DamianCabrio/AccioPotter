import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    height: 278,
    width: 374,
    flexDirection: 'row',
    borderRadius: 48,
  },
  infoBlock: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    width: '50%',
  },
  infoData: {
    flexDirection: 'row',
    paddingBottom: 10,
    width: '50%',
  },
  imageView: {
    width: '50%',
    height: 278,
    marginBottom: 10,
    marginTop: 0,
    paddingTop: 0,
    borderRadius: 30,
  },
});

export default styles;
