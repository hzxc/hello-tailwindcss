import { PanButton } from 'components';
import { NextPage } from 'next';
import Link from 'next/link';

const Demo: NextPage = () => {
  return (
    <div className='container m-auto py-2 space-x-2'>
      <Link href='/demo/button'>
        <PanButton>Link-Button</PanButton>
      </Link>
      <Link href='/demo/toggle'>
        <PanButton>Link-Toggle</PanButton>
      </Link>
      <Link href='/demo/counter'>
        <PanButton>Link-Redux-Counter</PanButton>
      </Link>
      <Link href='/demo/business-card'>
        <PanButton>Link-Business-Card</PanButton>
      </Link>
      <Link href='/demo/chit-chat'>
        <PanButton>Link-Chit-Chat</PanButton>
      </Link>
    </div>
  );
};

export default Demo;
