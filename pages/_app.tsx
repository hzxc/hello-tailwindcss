import '../styles/globals.css';
import { store, persistor } from 'redux/store';
import { Provider } from 'react-redux';

import type { AppProps } from 'next/app';
import { AppProvider } from 'components/context/AppContext';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PersistGate } from 'redux-persist/integration/react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const queryClient = new QueryClient();

  return getLayout(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </QueryClientProvider>
    </Provider>
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
