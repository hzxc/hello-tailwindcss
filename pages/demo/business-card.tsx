import { NextPage } from 'next';
import Image from 'next/image';
import dayjs from 'dayjs';
import { Layout } from 'components/layout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from 'pages/_app';

const BusinessCard: NextPageWithLayout = () => {
  return (
    <div className='py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
      <div className='block mx-auto relative h-24 w-24 sm:mx-0 sm:shrink-0'>
        <Image
          src={`https://robohash.org/${dayjs().unix()}`}
          alt='ChitChat Logo'
          layout='fill' // required
          objectFit='cover' // change as you like
          className=' rounded-full' // you can use other classes here too
        />
        {/* <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="/img/erin-lindford.jpg" alt="Woman's Face"> */}
      </div>
      <div className='text-center space-y-2 sm:text-left'>
        <div className='space-y-0.5'>
          <p className='text-lg text-black font-semibold'>Erin Lindford</p>
          <p className='text-slate-500 font-medium'>Product Engineer</p>
        </div>
        <button className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>
          Message
        </button>
      </div>
    </div>
  );
};

BusinessCard.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default BusinessCard;
