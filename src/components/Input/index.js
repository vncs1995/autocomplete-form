import React from 'react';
import PropTypes from 'prop-types';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../constants/colors';
import styles from './styles';

const Input = ({icon, placeholder, ...additionalInputProps}) => {
  return (
    <View style={styles.container}>
      <Icon
        name={icon}
        style={styles.icon}
        size={20}
        color={colors.lightPink}
      />
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        {...additionalInputProps}
      />
    </View>
  );
};

Input.propTypes = {
  icon: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};

Input.defaultProps = {
  icon: '',
};

export default Input;
