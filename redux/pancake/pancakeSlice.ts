import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

export interface IToken {
  name: string;
  symbol: string;
  address: string;
  chainId: number;
  decimals: number;
  logoURI?: string;
}

interface PancakeState {
  tokens: IToken[];
}

const initialState: PancakeState = {
  tokens: [],
};

export const pancakeSlice = createSlice({
  name: 'pancake',
  initialState,
  reducers: {
    setTokens: (state, action: PayloadAction<IToken[]>) => {
      state.tokens = [...action.payload];
    },
  },
});

export const { setTokens } = pancakeSlice.actions;

export const selectCounter = (state: RootState) => state.pancake;

export default pancakeSlice.reducer;
