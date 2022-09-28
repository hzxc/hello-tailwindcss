import { NextPage } from 'next';
import { PanButton } from 'components/pancake';
import { Button } from 'components';
import { PanIconButton } from 'components/pancake/button';
import { FiSun, FiMoon } from 'react-icons/fi';

const ButtonDemo: NextPage = () => {
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
    <div className='p-2 space-x-4 dark:bg-slate-800'>
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
      <Button>Base Button</Button>
      <PanIconButton leftSrc='/images/pancake/bnb.svg'>BNB</PanIconButton>
      <PanIconButton rightSrc='https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/logo.png'>
        BUSD
      </PanIconButton>
      <PanIconButton
        leftSrc='https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png'
        rightSrc='/images/pancake/bnb.svg'
      >
        BNB
      </PanIconButton>
      <PanIconButton>Base</PanIconButton>

      {/* <input type='checkbox' className='appearance-none indeterminate:bg-gray-300' /> */}
      {/* <PanButton onClick={() => dispatch(switchTheme())}>Change Theme</PanButton> */}
    </div>
  );
};

export default ButtonDemo;
