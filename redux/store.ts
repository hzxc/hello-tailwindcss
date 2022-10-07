import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from 'redux/counter/counterSlice';
import themeReducer from 'redux/theme/themeSlice';
import pancakeReducer from 'redux/pancake/pancakeSlice';
import pancakePersistReducer from 'redux/pancake/pancakePersist';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['pancakePersist'],
};

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
  pancake: pancakeReducer,
  pancakePersist: pancakePersistReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export { store, persistor };
