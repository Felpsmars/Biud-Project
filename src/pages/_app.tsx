import { AppProps } from 'next/app';
import { ContextProvider } from '../context/Context';

import '../../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
