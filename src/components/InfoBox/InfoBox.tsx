import React from 'react';

import { Image, View } from 'react-native';
import { Typography } from '..';
import styles from './styles';

interface Props {
  cover: string;
  author: string;
  publishDate: string;
  plot: string;
}

const InfoBox = ({ cover, author, publishDate, plot }: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Image source={{ uri: cover }} style={styles.imageView} />
      <View style={styles.infoBlock}>
        <View style={styles.infoData}>
          <Typography variant="bold">Author: </Typography>
          <Typography variant="regular">{author}</Typography>
        </View>
        <View style={styles.infoData}>
          <Typography variant="bold">Publish Date: </Typography>
          <Typography variant="regular">{publishDate}</Typography>
        </View>
        <View style={styles.infoData}>
          <Typography variant="bold">Plot Take-place years: </Typography>
          <Typography variant="regular">{plot}</Typography>
        </View>
      </View>
    </View>
  );
};
InfoBox.defaultProps = {
  textSize: 10,
};
export default InfoBox;
