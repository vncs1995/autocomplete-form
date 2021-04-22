import React from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../constants/colors';
import styles from './styles';

const Input = props => {
  return (
    <View style={styles.container}>
      <Icon
        name="search"
        style={styles.icon}
        size={20}
        color={colors.lightPink}
      />
      <TextInput
        placeholder="Search your favorite cocktail"
        style={styles.input}
        {...props}
      />
    </View>
  );
};

export default Input;
