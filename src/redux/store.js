import { combineReducers, createStore } from 'redux';
import initialState from './initialState';

import cartReducer from './cartRedux';
import categoriesReducer from './categoriesRedux';
import productsReducer from './productsRedux';
import deviceTypeReducer from './deviceTypeRedux';
import promotionsReducer from './promotionsRedux';
import feedbackReducer from './feedbackRedux';
import navbarReducer from './navbarRedux';
// import favoritesReducer from './favoritesRedux';

// define reducers
const reducers = {
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
  deviceType: deviceTypeReducer,
  promotions: promotionsReducer,
  feedback: feedbackReducer,
  navbar: navbarReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
