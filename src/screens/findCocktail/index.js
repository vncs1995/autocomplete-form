import React, {useCallback, useEffect, useState} from 'react';
import {View, StatusBar, FlatList, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import BasePage from '../../components/BasePage';
import CocktailItem from '../../components/CocktailItem';
import SearchBar from '../../components/SearchBar';
import COLORS from '../../constants/colors';
import {fetchDrinks, resetDrinks} from '../../store/modules/drinks';
import styles from './styles';

const FindCocktailScreen = ({navigation}) => {
  const [cocktailName, setCocktailName] = useState();
  const {drinks, loading} = useSelector(store => store.drinksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    reset();
  }, [reset]);

  useEffect(() => {
    if (cocktailName?.length >= 3) {
      dispatch(fetchDrinks(cocktailName));
    }
  }, [cocktailName, dispatch]);

  const reset = useCallback(() => {
    dispatch(resetDrinks());
  }, [dispatch]);

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
        {loading ? (
          <View style={styles.activityIndicator}>
            <ActivityIndicator size="large" color={COLORS.white} />
          </View>
        ) : (
          <FlatList
            keyExtractor={item => item.idDrink}
            extraData={drinks}
            data={drinks}
            renderItem={({item}) => <CocktailItem item={item} />}
            showsVerticalScrollIndicator={false}
          />
        )}
      </BasePage>
    </>
  );
};

export default FindCocktailScreen;
