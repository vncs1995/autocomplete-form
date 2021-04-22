import axios from 'axios';

export const Types = {
  SEARCH_PRODUCT: 'products/SEARCH_PRODUCT',
  SEARCH_PRODUCT_SUCCESS: 'products/SEARCH_PRODUCT_SUCCESS',
  SEARCH_PRODUCT_ERROR: 'products/SEARCH_PRODUCT_ERROR',
};

// Reducer

const initialState = {
  loading: false,
  error: null,
  products: [],
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SEARCH_PRODUCT:
      return {loading: true, ...state};
    case Types.SEARCH_PRODUCT_SUCCESS:
      return {products: [...action.payload], loading: false, ...state};
    case Types.SEARCH_PRODUCT_ERROR:
      return {products: [], loading: false, error: action.payload, ...state};
    default:
      return state;
  }
}

// Action Creators

export const fetchProduct = productName => async dispatch => {
  dispatch({type: Types.SEARCH_PRODUCT});

  try {
    const responseProduct = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${productName}`,
    );
    dispatch({type: Types.SEARCH_PRODUCT_SUCCESS, payload: responseProduct});
  } catch (error) {
    dispatch({type: Types.SEARCH_PRODUCT_ERROR, error: error});
  }
};
