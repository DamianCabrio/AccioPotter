import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import Typography from '../Typography';
import styles from './styles';
import { goToScreen } from '../../navigation/controls';

interface Props {
  cover: string;
  id: number;
  title: string;
  textSize?: number;
  variant?: 'primary' | 'secondary';
}

const SimpleCard = ({ cover, id, title, textSize, variant = 'primary' }: Props) => {
  return (
    <TouchableOpacity onPress={() => goToScreen('BookDetails', { id, title })}>
      <View style={[styles.listItemContainer, styles[variant]]}>
        <Image source={{ uri: cover }} style={styles.imageView} />
        <Typography size={textSize} variant="medium">
          {title}
        </Typography>
      </View>
    </TouchableOpacity>
  );
};

SimpleCard.defaultProps = {
  textSize: 14,
  variant: 'primary',
};

export default SimpleCard;
