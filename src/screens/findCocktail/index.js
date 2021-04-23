import React, {useState} from 'react';
import {View, StatusBar, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import BasePage from '../../components/BasePage';
import CocktailItem from '../../components/CocktailItem';
import SearchBar from '../../components/SearchBar';
import COLORS from '../../constants/colors';
import styles from './styles';

const FindCocktailScreen = ({navigation}) => {
  const [cocktailName, setCocktailName] = useState();
  const {drinks} = useSelector(store => store.drinksReducer);

  return (
    <>
      <SearchBar
        value={cocktailName}
        onPressIcon={() => navigation.pop()}
        onPressCancel={() => setCocktailName('')}
        onChangeText={text => setCocktailName(text)}
      />
      <BasePage>
        <StatusBar backgroundColor={COLORS.white} />
        <FlatList
          keyExtractor={item => item.idDrink}
          data={drinks}
          renderItem={CocktailItem}
        />
      </BasePage>
    </>
  );
};

export default FindCocktailScreen;
