import { NextPage } from 'next';
import { PanButton } from 'components';

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

  return (
    <div className='container p-2 space-x-4 dark:bg-slate-800'>
      <PanButton>Connect Wallet</PanButton>
      <PanButton classes='w-72 h-12 rounded-2xl'>Connect Wallet</PanButton>
      <PanButton classes='py-0 px-2'>scan risk</PanButton>
      <PanButton
        onClick={(e) => {
          changeTheme(e);
        }}
      >
        Change Theme
      </PanButton>
    </div>
  );
};

export default Button;
