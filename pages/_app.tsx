import '../styles/globals.css';
import { store, persistor } from 'redux/store';
import { Provider } from 'react-redux';

import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PersistGate } from 'redux-persist/integration/react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createClient, WagmiConfig } from 'wagmi';
import { provider, webSocketProvider } from 'blockchain/bsc/config';
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const queryClient = new QueryClient();

  const wagmiClient = createClient({
    autoConnect: false,
    provider,
    webSocketProvider,
  });

  return getLayout(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <WagmiConfig client={wagmiClient}>
            <Component {...pageProps} />
          </WagmiConfig>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
