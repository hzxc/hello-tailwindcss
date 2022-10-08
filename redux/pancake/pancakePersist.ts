import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { baseTokens } from '../../data/pancake/baseTokens';
import { IToken } from './pancakeSlice';

interface PancakePersistState {
  baseTokens: IToken[];
}

const initialState: PancakePersistState = {
  baseTokens: baseTokens,
};

export const pancakePersistSlice = createSlice({
  name: 'pancakePersist',
  initialState,
  reducers: {
    addToken: (state, action: PayloadAction<IToken>) => {
      state.baseTokens.push(action.payload);
    },
    removeToken: (state, action: PayloadAction<string>) => {},
  },
});

export default pancakePersistSlice.reducer;
