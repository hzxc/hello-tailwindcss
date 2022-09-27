import { NextPage } from 'next';
import Image from 'next/image';
import dayjs from 'dayjs';
import spinSvg from '/svg/spin.svg';
import { CgSpinner } from 'react-icons/cg';

const ImageDemo: NextPage = () => {
  return (
    <div className='p-4'>
      <div>
        {/* <img src='/svg/spin.svg' className='mr-3 h-5 w-5 text-amber-500' alt='spin' />
        <img src={`https://robohash.org/${dayjs().unix()}`} alt='' /> */}
      </div>
      <div>
        <span className='text-amber-500'>
          <Image
            src='/svg/spin.svg'
            width={48}
            height={48}
            alt='bot random'
            color='#805634'
            className='animate-spin text-amber-500'
            // className='rounded-full' // you can use other classes here too
          />
        </span>
        <div className='relative h-12 w-12'>
          <Image
            src={`https://robohash.org/${dayjs().unix()}`}
            alt='ChitChat Logo'
            layout='fill' // required
            objectFit='cover' // change as you like
            className='rounded-full' // you can use other classes here too
          />
        </div>
        <CgSpinner size={30} className='animate-spin' color='#805634'></CgSpinner>
      </div>
    </div>
  );
};

export default ImageDemo;
