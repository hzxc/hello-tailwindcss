import { NextPage } from 'next';
import Image from 'next/image';
import dayjs from 'dayjs';
import spinSvg from '/svg/spin.svg';
import { CgSpinner } from 'react-icons/cg';

const ImageDemo: NextPage = () => {
  return (
    <div className='p-4'>
      <p className=''>Normal:Todos os seres humanos nascem livres e iguais em dignidade</p>
      <p className='font-kanit'>
        kanit: Todos os seres humanos nascem livres e iguais em dignidade
      </p>
    </div>
  );
};

export default ImageDemo;
