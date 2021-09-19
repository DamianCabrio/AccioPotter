import React from 'react';

import { Image, View } from 'react-native';
import { Typography } from '..';
import styles from './styles';

interface Props {
  cover: string;
  description: string;
}

const InfoBox = ({ cover, description }: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Image source={{ uri: cover }} style={styles.imageView} />
      <Typography variant="bold">Author: </Typography>
      <Typography variant="regular">{description}</Typography>
    </View>
  );
};
InfoBox.defaultProps = {
  textSize: 12,
};
export default InfoBox;
