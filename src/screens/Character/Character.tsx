import React, { useCallback, useState } from 'react';
import { ActivityIndicator, FlatList, TouchableOpacity, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

import { DefaultButton, Header, Separator, Typography } from '../../components';
import styles from './styles';

import { goToScreen } from '../../navigation/controls';
import { colors } from '../../utils/theme';
import useCharactersData from './hooks/useCharactersData';

const ListItem = ({ id, title }: { id: number; title: string }) => (
  <TouchableOpacity
    onPress={() => goToScreen('CharacterDetails', { id, title })}
    style={styles.listItemContainerShadow}
  >
    <View style={styles.listItemContainer}>
      <Typography numberOfLines={2} align="center">
        {title}
      </Typography>
    </View>
  </TouchableOpacity>
);

const flatlistKeyExtractor = (item: Book) => `${item.id}`;

const renderFlatlistItem = ({ item }: { item: Book }) => (
  <ListItem id={item.id} title={item.title} />
);

const CharacterScreen = () => {
  const [refreshFlag, setRefreshFlag] = useState<boolean>(false);
  const { books, loading, errorOccurred } = useCharactersData(refreshFlag);

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
        <Header showBackButton={false} title="Book Screen" />
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
        <FlatList
          keyExtractor={flatlistKeyExtractor}
          refreshing={loading}
          onRefresh={toggleRefreshFlag}
          data={books}
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
