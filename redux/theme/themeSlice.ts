import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';

interface ThemeState {
  darkMode: boolean;
}

const initialState: ThemeState = {
  darkMode: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { switchTheme } = themeSlice.actions;
export const selectMode = (state: RootState) => state.theme.darkMode;

export default themeSlice.reducer;
