import React from 'react';

import { ScrollView, View } from 'react-native';
import { Typography } from '..';
import styles from './styles';

interface Props {
  description: string;
}

const DescriptionBox = ({ description }: Props) => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <Typography variant="regular">{description}</Typography>
      </ScrollView>
    </View>
  );
};
DescriptionBox.defaultProps = {
  textSize: 12,
};
export default DescriptionBox;
