import { NextPage } from 'next';

const Toggle: NextPage = () => {
  return (
    <div className='container m-auto py-2'>
      <input
        type='checkbox'
        className='w-12 h-6 cursor-pointer ring-1 ring-purple-600 appearance-none rounded-full bg-gray-200 '
        style={{ boxShadow: '-1.5rem 0 0 2px #ff9900 inset,0 0 0 2px #ff9900 inset' }}
        checked
      />
    </div>
  );
};

export default Toggle;
