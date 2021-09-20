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
  <TouchableOpacity onPress={() => onPressHistoryItem(item.query, item.type)}>
    <View style={styles.item}>
      <Typography color={colors.brown} size={14} variant="bold">
        {`${item.query} - ${item.type}`}{' '}
      </Typography>
    </View>
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
        <Typography>No searches found</Typography>
        <DefaultButton text="Reload" onPress={toggleRefreshFlag} />
      </View>
    );
  }

  return (
    <>
      <Header showBackButton={false} title="History" />
      <View style={styles.mainContainer}>
        <Typography size={25} color={colors.brown} variant="bold">
          HISTORY
        </Typography>
        <Separator size={10} />
        <Typography size={12}>15 last searches</Typography>
        <Separator size={20} />
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
            <Typography>No searches found</Typography>
            <DefaultButton text="Reload" onPress={toggleRefreshFlag} />
          </>
        )}
      </View>
    </>
  );
};

export default HistoryScreen;
