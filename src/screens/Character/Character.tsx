import React, { useCallback, useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

import {
  DefaultButton,
  Header,
  Separator,
  Typography,
  SearchBox,
  SimpleCard,
} from '../../components';
import styles from './styles';

import { colors } from '../../utils/theme';
import useCharactersData from './hooks/useCharactersData';

const flatlistKeyExtractor = (item: Character) => `${item.id}`;
const renderFlatlistItem = ({ item }: { item: Character }) => (
  <SimpleCard
    cover="https://orbiz.in/wp-content/uploads/2020/02/harry-potter.jpg"
    id={item.id}
    title={item.name}
    textSize={14}
    variant="primary"
  />
);

const CharacterScreen = () => {
  const [refreshFlag, setRefreshFlag] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { characters, loading, errorOccurred } = useCharactersData(refreshFlag, searchQuery);

  const netInfo = useNetInfo();

  const toggleRefreshFlag = useCallback(() => {
    setRefreshFlag(!refreshFlag);
  }, [refreshFlag]);

  useEffect(() => {
    setRefreshFlag(!refreshFlag);
  }, [searchQuery]);

  if (!netInfo.isConnected) {
    return (
      <View style={styles.wholeScreenCenter}>
        <Typography size={20}>You don't have internet :'(</Typography>
      </View>
    );
  }

  if (loading) {
    return (
      <>
        <Header showBackButton={false} title="Chracters Screen" />
        <View style={styles.wholeScreenCenter}>
          <ActivityIndicator size="large" color={colors.mainOrange} />
        </View>
      </>
    );
  }

  if (errorOccurred) {
    return (
      <View style={styles.wholeScreenCenter}>
        <Typography size={20}>An unknown error occurred :'(</Typography>
        <Separator size={15} />
        <DefaultButton text="Retry" onPress={toggleRefreshFlag} />
      </View>
    );
  }

  return (
    <>
      <Header showBackButton={false} title="Character Screen" />
      <View style={styles.mainContainer}>
        <Separator size={20} />
        <SearchBox setter={setSearchQuery} />
        <Separator size={10} />
        <Typography size={25} color={colors.brown} variant="bold">
          CHARACTERS
        </Typography>
        <Separator size={15} />
        {characters.length > 0 ? (
          <FlatList
            numColumns={2}
            keyExtractor={flatlistKeyExtractor}
            refreshing={loading}
            onRefresh={toggleRefreshFlag}
            data={characters}
            renderItem={renderFlatlistItem}
            ItemSeparatorComponent={Separator}
            contentContainerStyle={styles.flatlistContent}
            style={styles.flatList}
          />
        ) : (
          <Typography>No characters found with this parameters</Typography>
        )}
      </View>
    </>
  );
};

export default CharacterScreen;
