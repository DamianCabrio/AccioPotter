import React, { useCallback, useState } from 'react';
import { ActivityIndicator, FlatList, View, TouchableOpacity } from 'react-native';
import { Header, Separator, Typography } from '../../components';
import DefaultButton from './../../components/DefaultButton/index';
import { colors } from './../../utils/theme';
import useHistoryData from './hooks/useHistoryData';
import styles from './styles';
import { goToScreen } from '../../navigation/controls';

const flatlistKeyExtractor = (item: HistoryItem) => `${item.id}`;

const onPressHistoryItem = (searchParam: string, type: string) => {
  const screen = type === 'book' ? 'BookTab' : 'CharacterTab';
  goToScreen(screen, { searchParam: searchParam });
};

const renderFlatlistItem = ({ item }: { item: HistoryItem }) => (
  <TouchableOpacity
    style={[styles.mainContainer]}
    onPress={() => onPressHistoryItem(item.query, item.type)}
  >
    <Typography size={14}>{`${item.query} - ${item.type}`}</Typography>
  </TouchableOpacity>
);

const HistoryScreen = () => {
  const [refreshFlag, setRefreshFlag] = useState<boolean>(false);
  const { history, loading, errorOccurred } = useHistoryData(refreshFlag);

  const toggleRefreshFlag = useCallback(() => {
    setRefreshFlag(!refreshFlag);
  }, [refreshFlag]);

  if (loading) {
    return (
      <>
        <Header showBackButton={false} title="Chracters Screen" />
        <View style={styles.wholeScreenCenter}>
          <ActivityIndicator size="large" color={colors.mainOrange} />
          <DefaultButton text="Reload" onPress={toggleRefreshFlag} />
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
      <Header showBackButton={false} title="History" />
      <View style={styles.mainContainer}>
        <Typography size={18}>History Screen</Typography>
        <Typography size={11}>15 last searches</Typography>
        <Separator size={10} />
        {history && history.length > 0 ? (
          <FlatList
            keyExtractor={flatlistKeyExtractor}
            refreshing={loading}
            onRefresh={toggleRefreshFlag}
            data={history}
            renderItem={renderFlatlistItem}
            ItemSeparatorComponent={Separator}
            contentContainerStyle={styles.flatlistContent}
            style={styles.flatList}
          />
        ) : (
          <>
            <Typography>No searcheas found</Typography>
            <DefaultButton text="Reload" onPress={toggleRefreshFlag} />
          </>
        )}
      </View>
    </>
  );
};

export default HistoryScreen;
