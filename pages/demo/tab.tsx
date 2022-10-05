import { Layout } from 'components/layout';
import { PanIconButton } from 'components/pancake';
import { Tab, TabItem } from 'components/tab';
import { NextPageWithLayout } from 'pages/_app';
import { ReactElement } from 'react';

const TabDemo: NextPageWithLayout = () => {
  return (
    <div>
      <Tab>
        <TabItem>Swap</TabItem>
        <TabItem>Limit</TabItem>
        <TabItem>Liquidity</TabItem>
        <TabItem>Perpetual</TabItem>
        <TabItem>
          <PanIconButton
            className='align-baseline my-[-4px]'
            iconWidth='24px'
            iconHeight='24px'
            ring='ring-0'
            hover
            rightSrc='/images/pancake/arrowUpRight.svg'
          >
            Bridge
          </PanIconButton>
        </TabItem>
      </Tab>
    </div>
  );
};

TabDemo.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default TabDemo;
