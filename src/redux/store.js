import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

// set middlewares
const middlewares = [logger];

// create store
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// persisi store
export const persistor = persistStore(store);

export default store;