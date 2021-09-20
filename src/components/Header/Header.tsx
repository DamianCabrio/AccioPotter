import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

import Separator from '../Separator';
import Logo from '../../assets/images/Logo/Logo';
import styles from './styles';
import { colors } from '../../utils/theme';

import { goBack } from '../../navigation/controls';

interface Props {
  onPressBackButton?: () => void;
  onPressRightButton?: () => void;
  RightSideComponent?: React.FC;
  showBackButton?: boolean;
  title: string;
}

const Header = ({
  onPressBackButton,
  onPressRightButton,
  RightSideComponent,
  showBackButton,
}: Props) => {
  return (
    <ImageBackground
      source={require('../../assets/images/banner.png')}
      resizeMode="cover"
      style={styles.image}
    >
      <SafeAreaView edges={['top']} />
      <View style={styles.mainContainer}>
        {showBackButton ? (
          <TouchableOpacity onPress={onPressBackButton} style={styles.sideButtonContainer}>
            <MaterialIcon name="navigate-before" size={35} color={colors.white} />
          </TouchableOpacity>
        ) : (
          <Separator isHorizontal size={40} />
        )}
        <View style={styles.titleContainer}>
          <Logo />
        </View>
        {RightSideComponent ? (
          <TouchableOpacity onPress={onPressRightButton} style={styles.sideButtonContainer}>
            <RightSideComponent />
          </TouchableOpacity>
        ) : (
          <Separator isHorizontal size={40} />
        )}
      </View>
    </ImageBackground>
  );
};

Header.defaultProps = {
  onPressBackButton: goBack,
  onPressRightButton: () => {},
  showBackButton: true,
};

export default Header;
