import { useQuery } from '@tanstack/react-query';
import { http } from 'utils';
interface ITokenPrice {
  symbol: string;
  price: string;
}

const data = {
  symbol: 'CAKEUSDT',
};

export const useCakePrice = () => {
  //   return useQuery<ITokenPrice>(['pancakeTokens'], () => http('/gate/ticker/cake_usdt'));
  return useQuery<any>(['pancakeTokens'], () => http('/binance/time'));
};
