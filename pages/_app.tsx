import '../styles/globals.css'
import '../styles/nprogress.css'

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps, NextWebVitalsMetric } from 'next/app'

import { useRouter } from 'next/router'
import { useEffect } from 'react'
import NProgress from 'nprogress';



export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const router = useRouter();

  // loading bar 
  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start());

    router.events.on('routeChangeComplete', () => NProgress.done());
    router.events.on('routeChangeError', () => NProgress.done());
  }, []);

  // Use the layout defined at the page level, if available
  

  return (<Component {...pageProps} />)
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}
