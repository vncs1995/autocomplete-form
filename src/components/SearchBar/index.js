import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import styles from './styles';

const SearchBar = ({onPressIcon, onPressCancel, ...props}) => {
  return (
    <SafeAreaView style={styles.searchBarContainer}>
      <Icon
        name="arrow-left"
        size={22}
        style={styles.icon}
        onPress={onPressIcon}
      />
      <View style={styles.contentContainer}>
        <TextInput
          placeholder="Search"
          autoFocus
          style={styles.textInput}
          {...props}
        />

        <TouchableOpacity
          onPress={onPressCancel}
          style={styles.cancelContainer}
          hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

SearchBar.propTypes = {
  onPressIcon: PropTypes.func.isRequired,
  onPressCancel: PropTypes.func.isRequired,
};

export default SearchBar;
