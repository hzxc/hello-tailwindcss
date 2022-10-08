import { useMutation, useQuery } from '@tanstack/react-query';
import { baseTokens } from 'data/pancake';
import { useAppDispatch } from 'redux/hooks';
import { IToken } from 'redux/pancake/pancakeSlice';
import { http, useHttp } from 'utils';
import { setTokens } from 'redux/pancake/pancakeSlice';
import { useEffect } from 'react';

const getTokens = async () => {
  const array: IToken[] = [];
  const map = new Map();
  const extended = await http('/pancake/pancakeswap-extended.json');
  const cmc = await http('/pancake/cmc.json');
  const coingecko = await http('/pancake/coingecko.json');

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
  const dispatch = useAppDispatch();
  return useMutation(getTokens, {
    onSuccess: (data) => {
      dispatch(setTokens(data));
    },
  });
};
