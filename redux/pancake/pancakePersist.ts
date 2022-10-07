import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TokenList } from './data';
import { IToken } from './pancakeSlice';

interface PancakePersistState {
  tokenList: IToken[];
}

const initialState: PancakePersistState = {
  tokenList: TokenList,
};

export const pancakePersistSlice = createSlice({
  name: 'pancakePersist',
  initialState,
  reducers: {
    addToken: (state, action: PayloadAction<IToken>) => {
      state.tokenList.push(action.payload);
    },
    removeToken: (state, action: PayloadAction<string>) => {},
  },
});

export default pancakePersistSlice.reducer;
