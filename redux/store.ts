import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from 'redux/counter/counterSlice';
import themeReducer from 'redux/theme/themeSlice';
import pancakeReducer from 'redux/pancake/pancakeSlice';
import pancakePersistReducer from 'redux/pancake/pancakePersist';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from './storage';

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
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: true,
});

let persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export { store, persistor };
