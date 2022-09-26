import '../styles/globals.css';
import { store } from 'redux/store';
import { Provider } from 'react-redux';

import type { AppProps } from 'next/app';
import { AppProvider } from 'components/context/AppContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AppProvider>
  );
}

export default MyApp;
