import React, { useState } from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { TextInput, View } from 'react-native';

import styles from './styles';
import { colors } from '../../utils/theme';

const SearchBox = () => {
  const [inputText, setInputText] = useState('');
  return (
    <View style={styles.mainContainer}>
      <MaterialIcon name="search" size={23} color={colors.brown} style={styles.searchIcon} />
      <TextInput
        allowFontScaling={false}
        autoCapitalize="none"
        autoCorrect={false}
        // editable={false}
        // keyboardType="numeric"
        placeholder="Search a book"
        value={inputText}
        onChangeText={(text) => setInputText(text)}
        //onChangeText={setInputText}
        style={styles.textInput}
      />
    </View>
  );
};

export default SearchBox;
