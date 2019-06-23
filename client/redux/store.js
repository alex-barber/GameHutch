import { createStore, applyMiddleware } from 'redux';
// import reducer from './reducer.js';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import steam from './steam';
import { combineReducers } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'


const persistConfig = {
  key: 'steam',
  storage,
    stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, steam);

const appReducer = combineReducers({
  steam: persistedReducer,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
// const store = createStore(
//   appReducer,
//   middleware);

export const store = createStore(appReducer, middleware);
export const persistor = persistStore(store);
