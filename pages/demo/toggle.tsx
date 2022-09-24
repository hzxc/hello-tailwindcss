import { ToggleCheckBox } from 'components';
import { ToggleTextButton, ToggleIconButton } from 'components';
import { NextPage } from 'next';
import { useLayoutEffect, useRef, useState } from 'react';

const Toggle: NextPage = () => {
  const [check, setCheck] = useState(false);
  const [widthOn, setWidthOn] = useState(0);
  const [widthOff, setWidthOff] = useState(0);
  const refOn = useRef<any>();
  const refOff = useRef<any>();
  useLayoutEffect(() => {
    setWidthOn(refOn.current.offsetWidth);
    setWidthOff(refOff.current.offsetWidth);
  }, []);
  return (
    <div className='container flex items-center m-auto py-2 space-x-2'>
      <ToggleCheckBox
        className='bg-gray-400 border-gray-400'
        width={'3rem'}
        height={'1.5rem'}
        onChange={() => {
          setCheck(!check);
        }}
        checked={check}
      ></ToggleCheckBox>
      <button
        style={{
          boxShadow: `${
            check ? widthOn + 'px' : '-' + widthOff + 'px'
          } 0 0 2px rgb(255, 255, 255) inset,0 0 0 2px rgb(255, 255, 255) inset`,
        }}
        className='border bg-gray-400 border-gray-400 rounded-full transition-shadow duration-200'
      >
        <div className='flex justify-between items-center p-px'>
          <span ref={refOn} className='grow rounded-full px-2 mr-1'>
            V2
          </span>
          <span ref={refOff} className='grow rounded-full px-2'>
            V1(old)
          </span>
        </div>
      </button>

      <span>widthon:{widthOn}</span>
      <span>widthoff:{widthOff}</span>

      <ToggleTextButton className='border-purple-200 bg-gray-300' checked={check} />
      <ToggleIconButton
        className='border-purple-200'
        checked={check}
        shadowColor='rgb(189, 194, 196)'
        checkedShadowColor='rgb(102, 97, 113)'
      />

      <span>checked:{check.toString()}</span>
    </div>
  );
};

export default Toggle;
