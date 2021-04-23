import {configureStore} from '@reduxjs/toolkit';
import drinksReducer from '../store/modules/drinks';

const reducers = {
  drinksReducer,
};

const store = configureStore({
  reducer: reducers,
});

export default store;
