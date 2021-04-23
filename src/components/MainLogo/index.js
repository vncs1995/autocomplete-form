import React from 'react';
import {View, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import COLORS from '../../constants/colors';
import styles from './styles';

const MainLogo = () => (
  <View style={styles.container}>
    <FontAwesome5 name="cocktail" color={COLORS.white} size={30} />
    <Text style={styles.logoFont}>
      <Text style={styles.boldFont}>Cocktail</Text>
      <Text>Finder</Text>
    </Text>
  </View>
);

export default MainLogo;
