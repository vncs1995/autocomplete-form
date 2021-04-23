import axios from 'axios';

export const Types = {
  SEARCH_DRINKS: 'drinks/SEARCH_DRINKS',
  SEARCH_DRINKS_SUCCESS: 'drinks/SEARCH_DRINKS_SUCCESS',
  SEARCH_DRINKS_ERROR: 'drinks/SEARCH_DRINKS_ERROR',
};

// Reducer

const initialState = {
  loading: false,
  error: null,
  drinks: [],
};

export default function drinksReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SEARCH_DRINKS:
      return {loading: true, ...state};
    case Types.SEARCH_DRINKS_SUCCESS:
      return {drinks: [...action.payload], loading: false, ...state};
    case Types.SEARCH_DRINKS_ERROR:
      return {drinks: [], loading: false, error: action.payload, ...state};
    default:
      return state;
  }
}

// Action Creators

export const fetchProduct = productName => async dispatch => {
  dispatch({type: Types.SEARCH_DRINKS});

  try {
    const responseProduct = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${productName}`,
    );
    dispatch({type: Types.SEARCH_DRINKS_SUCCESS, payload: responseProduct});
  } catch (error) {
    dispatch({type: Types.SEARCH_DRINKS_ERROR, error: error});
  }
};
