import { useQuery } from '@tanstack/react-query';
import { baseTokens } from 'data/pancake';
import { IToken } from 'redux/pancake/pancakeSlice';
import { http } from 'utils';

const getTokens = async () => {
  const array: IToken[] = [];
  const map = new Map();
  const extended = await http('/pancake/pancakeswap-extended.json');
  console.log('extended:', extended);
  const cmc = await http('/pancake/cmc.json');
  console.log('cmc:', cmc);
  const coingecko = await http('/pancake/coingecko.json');
  console.log('coingecko:', coingecko);

  baseTokens.forEach((item: IToken) => {
    if (!map.has(item.address)) {
      map.set(item.address, 0);
      array.push(item);
    }
  });

  extended.tokens?.forEach((item: IToken) => {
    if (!map.has(item.address)) {
      map.set(item.address, 0);
      array.push(item);
    }
  });

  cmc.tokens?.forEach((item: IToken) => {
    if (!map.has(item.address)) {
      map.set(item.address, 0);
      array.push(item);
    }
  });

  coingecko.tokens?.forEach((item: IToken) => {
    if (!map.has(item.address)) {
      map.set(item.address, 0);
      array.push(item);
    }
  });

  return array;
};

export const useTokens = () => {
  return useQuery<IToken[], Error>(['pancakeTokens'], getTokens);
};
