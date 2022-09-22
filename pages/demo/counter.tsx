import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from 'redux/hooks';

import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from 'redux/counter/counterSlice';
import { NextPage } from 'next';

const Counter: NextPage = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div className='container mx-auto p-2'>
      <div className='flex flex-row justify-center items-center'>
        <button className='px-4 py-1 text-xl text-purple-600 font-bold border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>
          -
        </button>
        <span className='px-6 text-7xl font-light'>{count}</span>
        <button className='px-4 py-1 text-xl text-purple-600 font-bold border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
