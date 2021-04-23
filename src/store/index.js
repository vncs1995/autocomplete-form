import {configureStore} from '@reduxjs/toolkit';

import drinksReducer from './modules/drinks';

const reducers = {
  drinksReducer,
};

const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
