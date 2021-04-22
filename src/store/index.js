import {configureStore} from '@reduxjs/toolkit';
import productsReducer from '../store/modules/products';

const reducers = {
  products: productsReducer,
};

const store = configureStore({
  reducers,
});

export default store;
