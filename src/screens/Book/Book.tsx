import React, { useCallback, useState } from 'react';
import { ActivityIndicator, FlatList, StatusBar, TouchableOpacity, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

import { DefaultButton, Header, SearchBox, Separator, Typography } from '../../components';
import styles from './styles';

import { goToScreen } from '../../navigation/controls';
import { colors } from '../../utils/theme';
import useBooksData from './hooks/useBooksData';

const ListItem = ({ id, title }: { id: number; title: string }) => (
  <TouchableOpacity onPress={() => goToScreen('BookDetails', { id, title })}>
    <View style={[styles.listItemContainer, styles.listItemContainerShadow]}>
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

const BookScreen = () => {
  const [refreshFlag, setRefreshFlag] = useState<boolean>(false);
  const { books, loading, errorOccurred } = useBooksData(refreshFlag);
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
      <StatusBar backgroundColor={colors.brown} barStyle="light-content" />
      <Header showBackButton={false} title="Book Screen" />

      <View style={styles.mainContainer}>
        <Separator size={20} />
        <SearchBox />
        <Separator size={10} />
        <Typography size={25} color={colors.brown} variant="bold">
          BOOKS
        </Typography>
        <Separator size={15} />
        <FlatList
          numColumns={2}
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

export default BookScreen;
