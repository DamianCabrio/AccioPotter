import React from 'react';

import { View } from 'react-native';
import { Typography } from '../../components';
import styles from './styles';
import { colors } from '../../utils/theme';

interface Props {
  title: string;
  textSize?: number;
}

const TitleBox = ({ title, textSize }: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Typography color={colors.brown} size={textSize} variant="bold">
        {title}
      </Typography>
    </View>
  );
};
TitleBox.defaultProps = {
  textSize: 14,
};
export default TitleBox;
