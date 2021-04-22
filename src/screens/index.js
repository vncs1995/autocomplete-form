import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './welcome';
import FindCocktailScreen from './findCocktail';

const Stack = createStackNavigator();

const Screens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen" headerMode={'none'}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen
          name="FindCocktailScreen"
          component={FindCocktailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Screens;
