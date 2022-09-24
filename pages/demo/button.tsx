import { NextPage } from 'next';
import { PanButton } from 'components';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { selectMode, switchTheme } from 'redux/theme/themeSlice';

const Button: NextPage = () => {
  // const clsList = document.documentElement.classList;
  const changeTheme = (event: any) => {
    const clsList = document.documentElement.classList;
    if (clsList.contains('dark')) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  const dark = useAppSelector(selectMode);
  const dispatch = useAppDispatch();

  return (
    <div className='container p-2 space-x-4 dark:bg-slate-800'>
      <PanButton>Connect Wallet</PanButton>
      <PanButton className='w-72 h-12 rounded-2xl'>Connect Wallet</PanButton>
      <PanButton className='py-0 px-2'>scan risk</PanButton>
      <PanButton
        onClick={(e) => {
          changeTheme(e);
        }}
      >
        Change Theme
      </PanButton>
      <input type='checkbox' className='appearance-none indeterminate:bg-gray-300' />
      {/* <PanButton onClick={() => dispatch(switchTheme())}>Change Theme</PanButton> */}
    </div>
  );
};

export default Button;
