import React, { useState } from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { TextInput, View, TouchableOpacity } from 'react-native';

import styles from './styles';
import { colors } from '../../utils/theme';

interface Props {
  setter: (text: string) => void;
}

const SearchBox = ({ setter }: Props) => {
  const [input, setInput] = useState<string>('');

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={() => setter(input)}>
        <MaterialIcon name="search" size={23} color={colors.brown} style={styles.searchIcon} />
      </TouchableOpacity>
      <TextInput
        allowFontScaling={false}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search..."
        value={input}
        onChangeText={(text) => setInput(text)}
        style={styles.textInput}
      />
    </View>
  );
};

export default SearchBox;
