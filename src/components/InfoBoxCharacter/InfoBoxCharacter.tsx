import React from 'react';

import { Image, View } from 'react-native';
import { Typography } from '..';
import styles from './styles';

interface Props {
  name: string;
  birth: string;
  species: string;
  gender?: string;
  hair_color?: string;
  eye_color?: string;
  house?: string;
}

const InfoBoxCharacter = ({
  name,
  birth,
  species,
  gender,
  hair_color,
  eye_color,
  house,
}: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={{ uri: 'https://orbiz.in/wp-content/uploads/2020/02/harry-potter.jpg' }}
        style={styles.imageView}
      />
      <View style={styles.infoBlock}>
        <View style={styles.infoData}>
          <Typography variant="bold">Name:</Typography>
          <Typography variant="regular">{name}</Typography>
        </View>
        <View style={styles.infoData}>
          <Typography variant="bold">Birthdate: </Typography>
          <Typography variant="regular">{birth}</Typography>
        </View>
        <View style={styles.infoData}>
          <Typography variant="bold">Species: </Typography>
          <Typography variant="regular">{species}</Typography>
        </View>
        <View style={styles.infoData}>
          <Typography variant="bold">Gender: </Typography>
          <Typography variant="regular">{gender}</Typography>
        </View>
        <View style={styles.infoData}>
          <Typography variant="bold">Eye Color: </Typography>
          <Typography variant="regular">{eye_color}</Typography>
        </View>
        <View style={styles.infoData}>
          <Typography variant="bold">Hair Color: </Typography>
          <Typography variant="regular">{hair_color}</Typography>
        </View>
        <View style={styles.infoData}>
          <Typography variant="bold">House: </Typography>
          <Typography variant="regular">{house}</Typography>
        </View>
      </View>
    </View>
  );
};
InfoBoxCharacter.defaultProps = {
  textSize: 10,
};
export default InfoBoxCharacter;
