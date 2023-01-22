import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import '../styles/globals.css'

type NextPageWithLayaout = NextPage & {
  getLayout?: (page: ReactElement
    ) => ReactNode;
}

type AppPropsWithLayaout = AppProps & {
  Component: NextPageWithLayaout
}
function MyApp({ Component, pageProps }: AppPropsWithLayaout) {

  const getLayout = Component.getLayout || ((page) => page );
  return getLayout( <Component {...pageProps} /> )
}

export default MyApp
