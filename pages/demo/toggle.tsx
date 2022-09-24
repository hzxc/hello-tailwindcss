import { ToggleCheckBox } from 'components';
import { ToggleIconButton } from 'components';
import { NextPage } from 'next';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { switchTheme, selectMode } from 'redux/theme/themeSlice';
import { FiSun, FiMoon } from 'react-icons/fi';

const Toggle: NextPage = () => {
  const darkMode = useAppSelector(selectMode);
  const dispatch = useAppDispatch();
  const [check, setCheck] = useState(false);
  const [widthOn, setWidthOn] = useState(0);
  const [widthOff, setWidthOff] = useState(0);
  const refOn = useRef<any>();
  const refOff = useRef<any>();

  useEffect(() => {
    const clsList = document.documentElement.classList;
    if (darkMode && !clsList.contains('dark')) {
      document.documentElement.classList.add('dark');
    }

    if (!darkMode && clsList.contains('dark')) {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className='container flex items-center m-auto py-2 space-x-2 dark:bg-zinc-800 dark:text-white'>
      {/* <ToggleCheckBox
        className='bg-gray-400 border-gray-400'
        width={'3rem'}
        height={'1.5rem'}
        onChange={() => {
          setCheck(!check);
        }}
        checked={check}
      ></ToggleCheckBox> */}
      {/* <button
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
      </button> */}

      {/* <span>widthon:{widthOn}</span>
      <span>widthoff:{widthOff}</span> */}

      <ToggleIconButton
        onClick={() => {
          setCheck(!check);
        }}
        checked={check}
      />

      <ToggleIconButton
        checked={check}
        outlineColor='outline-amber-600'
        checkedOutlineColor='outline-violet-600'
      />

      <ToggleIconButton
        checked={check}
        className='border-purple-200 '
        shadowColor='rgb(238, 234, 244)'
        checkedShadowColor='rgb(49, 208, 170)'
      />

      <ToggleIconButton
        className='border-purple-200 dark:border-zinc-800'
        leftIcon={<FiSun size={24} className='text-amber-400' />}
        rightIcon={<FiMoon size={24} className='text-purple-400' />}
        checked={darkMode}
        shadowColor='rgb(189, 194, 196)'
        checkedShadowColor='rgb(102, 97, 113)'
        outlineColor='outline-amber-600'
        checkedOutlineColor='outline-violet-600'
        onClick={() => dispatch(switchTheme())}
      />

      <ToggleIconButton
        className='w-32 border-purple-200 bg-purple-800 dark:border-zinc-800'
        checked={darkMode}
        leftIcon={<>v2</>}
        rightIcon={<>v1(old)</>}
        checkedShadowColor='rgb(102, 97, 113)'
        spread={0}
        onClick={() => dispatch(switchTheme())}
      />

      <span>checked:{check.toString()}</span>
      <span>darkMode:{darkMode.toString()}</span>
    </div>
  );
};

export default Toggle;
