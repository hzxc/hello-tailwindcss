import '../styles/globals.css';
import { store } from 'redux/store';
import { Provider } from 'react-redux';

import type { AppProps } from 'next/app';
import { AppProvider } from 'components/context/AppContext';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    // <AppProvider>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    // </AppProvider>
  );
  // return (
  //   <AppProvider>
  //     <Provider store={store}>
  //       <Component {...pageProps} />
  //     </Provider>
  //   </AppProvider>
  // );
}

export default MyApp;
