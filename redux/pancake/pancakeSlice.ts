import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    combine: (state, action: PayloadAction<IToken[]>) => {
      state.tokens = [...state.tokens, ...action.payload];
    },
  },
});
export default pancakeSlice.reducer;
