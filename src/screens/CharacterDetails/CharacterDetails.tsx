import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, View } from 'react-native';

import { DescriptionBox, Header, InfoBoxCharacter, Separator, TitleBox } from '../../components';
import { getCharacterById } from '../../services';

import styles from './styles';
import { colors } from '../../utils/theme';

// @ts-ignore
const CharacterDetailsScreen = ({ route }) => {
  const { id, title } = route.params;

  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getCharactersData = async () => {
    setLoading(true);
    try {
      const { success, data } = await getCharacterById(id);
      if (success) {
        setCharacter(data);
      } else {
        Alert.alert(`Error getting the details of the character: ${title}`);
      }
    } catch (error) {
      console.log(`Error getting character with id: ${id} in CharacterDetailsScreen`, error);
      Alert.alert(`Error getting the details of the character: ${title}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharactersData();
  }, []);

  if (loading) {
    return (
      <>
        <Header title={title} />
        <View style={styles.wholeScreenCenter}>
          <ActivityIndicator size="large" color={colors.mainOrange} />
        </View>
      </>
    );
  }

  return (
    <>
      <Header title={title} />
      <ScrollView>
        <View style={styles.mainContainer}>
          <TitleBox title={character[0].name} textSize={25} />
          <Separator size={20} />
          <InfoBoxCharacter
            name={character[0].name}
            birth={character[0].birth}
            species={character[0].species}
            gender={character[0].gender}
            hair_color={character[0].hair_color}
            eye_color={character[0].eye_color}
            house={character[0].house}
          />
          <Separator size={20} />
          <DescriptionBox description="Biography: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed libero enim sed faucibus turpis. Magna fringilla urna porttitor rhoncus dolor." />
          <Separator size={20} />
        </View>
      </ScrollView>
    </>
  );
};

export default CharacterDetailsScreen;
