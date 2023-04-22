import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <>
            <Head>
              <title> NEXT Study APP</title>
            </Head>
            <Component {...pageProps} />
</>
        
         
}
