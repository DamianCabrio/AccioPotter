import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, View } from 'react-native';

import { DescriptionBox, Header, InfoBox, Separator, TitleBox, Typography } from '../../components';
import { getBookById } from '../../services';

import styles from './styles';
import { colors } from '../../utils/theme';

// @ts-ignore
const BookDetailsScreen = ({ route }) => {
  const { id, title } = route.params;

  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getBooksData = async () => {
    setLoading(true);
    try {
      const { success, data } = await getBookById(id);
      if (success) {
        setBook(data);
      } else {
        Alert.alert(`Error getting the details of the book: ${title}`);
      }
    } catch (error) {
      console.log(`Error getting book with id: ${id} in BookDetailsScreen`, error);
      Alert.alert(`Error getting the details of the book: ${title}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBooksData();
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
          <TitleBox title={book[0].title} textSize={25} />
          <Separator size={20} />
          <InfoBox
            cover={book[0].book_covers[0].URL}
            author={book[0].author}
            publishDate={book[0].publish_date[0].UK}
            plot={book[0].plot_take_place_years}
          />
          <Separator size={20} />
          <DescriptionBox description="Sinopsis: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed libero enim sed faucibus turpis. Magna fringilla urna porttitor rhoncus dolor." />
          <Separator size={20} />
        </View>
      </ScrollView>
    </>
  );
};

export default BookDetailsScreen;
