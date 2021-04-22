import React from 'react';
import BasePage from '../../components/BasePage';
import Input from '../../components/Input';

const WelcomeScreen = ({navigation}) => {
  return (
    <BasePage style={{alignItems: 'center', justifyContent: 'center'}}>
      <Input onFocus={() => navigation.navigate('FindCocktailScreen')} />
    </BasePage>
  );
};

export default WelcomeScreen;
