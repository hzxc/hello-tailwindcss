import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TokenList } from './data';

export interface ITokenList {
  name: string;
  logoURI: string;
  keywords: string[];
  tokens: IToken[];
}

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
  //   extendedTokenList: IToken[];
  //   coinGeckoTokenList: IToken[];
  //   CoinMarketCapTokenList: IToken[];
}

const initialState: PancakeState = {
  tokens: [],
  //   extendedTokenList: [],
  //   coinGeckoTokenList: [],
  //   CoinMarketCapTokenList: [],
};

const combineFunc = () => {};

export const pancakeSlice = createSlice({
  name: 'pancake',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    combine: (state, action: PayloadAction<IToken[]>) => {
      state.tokens = [...state.tokens, ...action.payload];
    },
  },
});
export default pancakeSlice.reducer;
