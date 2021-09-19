import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, View } from 'react-native';

import { DescriptionBox, Header, Separator, TitleBox, Typography } from '../../components';
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
      <View style={styles.mainContainer}>
        <TitleBox title="Harry Potter and the Philosopher’s Stone" textSize={25} />
        <Separator size={20} />
        <DescriptionBox description="Harry Potter and the  Stone Philosopher’ser’s  Stone Psopher’s  Stone Philosopher’s StonePhilosopher’s Philosopher’s Stone Philosopher’s StonePhilosopher’s StonePhilosopher’s Stone Philosopher’s StonePhilosopher’s  Stone Philosopher’s StonePhilosopher’s  Stone Philosopher’s StonePhilosopher’s  StonePhilosopher’s Stone" />
        <Separator size={20} />
        <Typography>{JSON.stringify(book, null, 2)}</Typography>
      </View>
    </>
  );
};

export default BookDetailsScreen;
