import { NextPage } from 'next';
import Image from 'next/image';
import dayjs from 'dayjs';
import SpinSvg from '../../public/svg/spin.svg';
import { CgSpinner } from 'react-icons/cg';
import { Spin } from 'components/svg';

const ImageDemo: NextPage = () => {
  return (
    <div className='p-4'>
      <div>
        {/* <img src='/svg/spin.svg' className='mr-3 h-5 w-5 text-amber-500' alt='spin' />
        <img src={`https://robohash.org/${dayjs().unix()}`} alt='' /> */}
      </div>
      {/* <span className='text-amber-500'>
          <Image
            src='/svg/spin.svg'
            width={48}
            height={48}
            alt='bot random'
            color='#805634'
            className='animate-spin text-amber-500 fill-blue-500'
            // className='rounded-full' // you can use other classes here too
          />
        </span> */}
      {/* <div className='relative h-12 w-12'>
          <Image
            src={`https://robohash.org/${dayjs().unix()}`}
            alt='ChitChat Logo'
            layout='fill' // required
            objectFit='cover' // change as you like
            className='rounded-full' // you can use other classes here too
          />
        </div>
        <CgSpinner size={30} className='animate-spin' color='#805634'></CgSpinner> */}
      <div className='flex space-x-2'>
        <SpinSvg className='animate-spin h-5 w-5 text-amber-800 bg-white' />
        <Spin classes='animate-spin h-5 w-5 text-amber-800' />
        <CgSpinner size={30} className='animate-spin' color='#805634' />
      </div>
    </div>
  );
};

export default ImageDemo;
