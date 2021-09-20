import React, { useCallback, useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, StatusBar, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

import {
  DefaultButton,
  Header,
  SearchBox,
  Separator,
  SimpleCard,
  Typography,
} from '../../components';
import styles from './styles';

import { colors } from '../../utils/theme';
import useBooksData from './hooks/useBooksData';

const flatlistKeyExtractor = (item: Book) => `${item.id}`;

const renderFlatlistItem = ({ item }: { item: Book }) => (
  <SimpleCard
    cover={item.book_covers[0].URL}
    id={item.id}
    screenDetail="BookDetails"
    title={item.title}
    textSize={14}
    variant="primary"
  />
);

const BookScreen = () => {
  const [refreshFlag, setRefreshFlag] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { books, loading, errorOccurred } = useBooksData(refreshFlag, searchQuery);
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
        <SearchBox setter={setSearchQuery} />
        <Separator size={10} />
        <Typography size={25} color={colors.brown} variant="bold">
          BOOKS
        </Typography>
        <Separator size={15} />
        {books.length > 0 ? (
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
        ) : (
          <Typography>No books found with this parameters</Typography>
        )}
      </View>
    </>
  );
};

export default BookScreen;
