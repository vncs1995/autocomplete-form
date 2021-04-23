import React from 'react';
import {View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const CocktailItem = ({item}) => {
  return (
    <View style={styles.container} key={item.idDrink}>
      <Image
        style={styles.imageContainer}
        source={{
          uri: item.strDrinkThumb,
        }}
      />
      <Text style={styles.drinkName}>{item.strDrink}</Text>
    </View>
  );
};

CocktailItem.propTypes = {
  item: PropTypes.shape({
    idDrink: PropTypes.number.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
    strDrink: PropTypes.string.isRequired,
  }),
};

export default CocktailItem;
