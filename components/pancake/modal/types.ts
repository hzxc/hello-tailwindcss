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
