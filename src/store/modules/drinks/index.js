import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/',
  timeout: 1000,
});

export const Types = {
  SEARCH_DRINKS: 'drinks/SEARCH_DRINKS',
  SEARCH_DRINKS_SUCCESS: 'drinks/SEARCH_DRINKS_SUCCESS',
  SEARCH_DRINKS_ERROR: 'drinks/SEARCH_DRINKS_ERROR',
  SEARCH_DRINKS_RESET: 'drinks/SEARCH_DRINKS_RESET',
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
      return {...state, loading: true};
    case Types.SEARCH_DRINKS_SUCCESS:
      return {...state, drinks: action.payload, loading: false};
    case Types.SEARCH_DRINKS_ERROR:
      return {...state, drinks: [], loading: false, error: action.payload};
    case Types.SEARCH_DRINKS_RESET:
      return initialState;
    default:
      return state;
  }
}

// Action Creators

export const fetchDrinks = drinkName => async dispatch => {
  dispatch({type: Types.SEARCH_DRINKS});

  try {
    const responseDrink = await api.get(`search.php?s=${drinkName}`);
    dispatch({
      type: Types.SEARCH_DRINKS_SUCCESS,
      payload: responseDrink.data.drinks,
    });
  } catch (error) {
    dispatch({type: Types.SEARCH_DRINKS_ERROR, payload: error});
  }
};

export const resetDrinks = () => dispatch =>
  dispatch({type: Types.SEARCH_DRINKS_RESET});
