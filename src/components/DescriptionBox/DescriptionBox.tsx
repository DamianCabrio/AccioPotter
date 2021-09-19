import React from 'react';

import { View } from 'react-native';
import { Typography } from '..';
import styles from './styles';

interface Props {
  description: string;
}

const DescriptionBox = ({ description }: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Typography variant="regular">{description}</Typography>
    </View>
  );
};
DescriptionBox.defaultProps = {
  textSize: 12,
};
export default DescriptionBox;
