import React from 'react';
import { Image, View } from 'react-native';

import Typography from '../Typography';
import styles from './styles';

interface Props {
  cover: string;
  title: string;
  textSize?: number;
  variant?: 'primary' | 'secondary';
}

const SimpleCard = ({ cover, title, textSize, variant = 'primary' }: Props) => {
  return (
    <View style={[styles.mainContainer, styles[variant]]}>
      <Image source={{ uri: cover }} style={styles.imageView} />
      <Typography size={textSize} variant="medium">
        {title}
      </Typography>
    </View>
  );
};

SimpleCard.defaultProps = {
  textSize: 14,
  variant: 'primary',
};

export default SimpleCard;
