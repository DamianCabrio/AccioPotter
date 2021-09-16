import React, { useCallback, useState } from 'react';
import { ActivityIndicator, FlatList, TouchableOpacity, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

import { DefaultButton, Header, Separator, Typography, SearchBox } from '../../components';
import styles from './styles';

import { goToScreen } from '../../navigation/controls';
import { colors } from '../../utils/theme';
import useCharactersData from './hooks/useCharactersData';

const ListItem = ({ id, title }: { id: number; title: string }) => (
  <TouchableOpacity onPress={() => goToScreen('CharacterDetails', { id, title })}>
    <View style={[styles.listItemContainer, styles.listItemContainerShadow]}>
      <Typography numberOfLines={2} align="center">
        {title}
      </Typography>
    </View>
  </TouchableOpacity>
);

const flatlistKeyExtractor = (item: Character) => `${item.id}`;

const renderFlatlistItem = ({ item }: { item: Character }) => (
  <ListItem id={item.id} title={item.name} />
);

const CharacterScreen = () => {
  const [refreshFlag, setRefreshFlag] = useState<boolean>(false);
  const { characters, loading, errorOccurred } = useCharactersData(refreshFlag);

  const netInfo = useNetInfo();

  const toggleRefreshFlag = useCallback(() => {
    setRefreshFlag(!refreshFlag);
  }, [refreshFlag]);

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
        <SearchBox />
        <Separator size={10} />
        <Typography size={25} color={colors.brown} variant="bold">
          CHARACTERS
        </Typography>
        <Separator size={15} />
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
      </View>
    </>
  );
};

export default CharacterScreen;
