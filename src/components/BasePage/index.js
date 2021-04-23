import React from 'react';
import {SafeAreaView, StatusBar, View, ViewPropTypes} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import COLORS from '../../constants/colors';
import styles from './styles';

const BasePage = ({children, style}) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
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
    </SafeAreaView>
  );
};

BasePage.propTypes = {
  children: PropTypes.node.isRequired,
  style: ViewPropTypes.style,
};

export default BasePage;
