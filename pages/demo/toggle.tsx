import { ToggleButton } from 'components';
import { NextPage } from 'next';
import { useState } from 'react';

const Toggle: NextPage = () => {
  const [check, setCheck] = useState(false);
  return (
    <div className='container m-auto py-2 space-x-2'>
      <ToggleButton
        className='bg-gray-400 border-gray-400 transition-shadow duration-300'
        width={'3rem'}
        height={'1.5rem'}
        onChange={() => {
          setCheck(!check);
        }}
        checked={check}
      />
      <span>{check ? 'check' : 'nocheck'}</span>
    </div>
  );
};

export default Toggle;
