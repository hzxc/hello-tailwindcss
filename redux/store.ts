import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { MODERN_BROWSERSLIST_TARGET } from 'next/dist/shared/lib/constants';
import counterReducer from 'redux/counter/counterSlice';
import themeReducer from 'redux/theme/themeSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
