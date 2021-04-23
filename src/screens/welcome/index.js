import React from 'react';
import BasePage from '../../components/BasePage';
import Input from '../../components/Input';
import MainLogo from '../../components/MainLogo';

const WelcomeScreen = ({navigation}) => {
  return (
    <BasePage style={{alignItems: 'center', justifyContent: 'center'}}>
      <MainLogo />
      <Input
        icon="search"
        placeholder="Search your favorite cocktail"
        onFocus={() => navigation.navigate('FindCocktailScreen')}
      />
    </BasePage>
  );
};

export default WelcomeScreen;
