import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from 'redux/hooks';

import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  selectStatus,
} from 'redux/counter/counterSlice';
import { NextPage } from 'next';
import Image from 'next/image';
import { Spin } from 'components';

const Counter: NextPage = () => {
  const count = useAppSelector(selectCount);
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div className='container mx-auto p-2 space-y-4'>
      <div className='flex flex-row justify-center items-center'>
        <button
          onClick={() => dispatch(decrement())}
          className='px-4 py-1 text-xl text-purple-600 font-bold border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'
        >
          -
        </button>
        <span className='px-6 text-7xl font-light'>{count}</span>
        <button
          onClick={() => dispatch(increment())}
          className='px-4 py-1 text-xl text-purple-600 font-bold border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'
        >
          +
        </button>
      </div>
      <div className='flex flex-row justify-center items-center space-x-4'>
        <input
          type='text'
          className='text-3xl w-16 text-center border border-purple-200 focus-visible:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() => dispatch(incrementByAmount(incrementValue))}
          className='px-4 py-1 text-xl bg-purple-100 text-purple-600 border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'
        >
          Add Amount
        </button>
        <button
          onClick={() => dispatch(incrementAsync(incrementValue))}
          className={`${
            status === 'loading' ? 'cursor-not-allowed' : 'cursor-pointer'
          } inline-flex items-center px-4 py-1 text-xl bg-purple-100 text-purple-600 border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2`}
          disabled={status === 'loading' ? true : false}
        >
          {status === 'loading' ? <Spin classes='animate-spin mr-3 h-5 w-5' /> : ''}
          Add Async
        </button>
        <button
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
          className='px-4 py-1 text-xl bg-purple-100 text-purple-600 border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'
        >
          Add If Odd
        </button>
        <span>{status}</span>
      </div>
    </div>
  );
};

export default Counter;
