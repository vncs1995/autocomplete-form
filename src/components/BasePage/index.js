import React from 'react';
import {StatusBar, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../../constants/colors';
import styles from './styles';

const BasePage = ({children, style}) => {
  return (
    <LinearGradient
      start={{x: 1, y: 0}}
      end={{x: 0, y: 1}}
      colors={[COLORS.pink, COLORS.orange]}
      style={styles.linearGradient}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={COLORS.pink}
        translucent
      />
      <View style={[styles.childrenContainer, style]}>{children}</View>
    </LinearGradient>
  );
};

export default BasePage;
