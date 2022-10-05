import { Layout } from 'components/layout';
import { Tab, TabItem } from 'components/tab';
import { NextPageWithLayout } from 'pages/_app';
import { ReactElement } from 'react';

const TabDemo: NextPageWithLayout = () => {
  return (
    <div className='p-2'>
      <Tab>
        <TabItem>Swap</TabItem>
        <TabItem>Limit</TabItem>
        <TabItem>Liquidity</TabItem>
        <TabItem>Perpetual</TabItem>
        <TabItem>Bridge</TabItem>
      </Tab>
    </div>
  );
};

TabDemo.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default TabDemo;
