import '@/styles/globals.scss'
import Script from 'next/script'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <>
            <Head>
              <title>NEXT Study APP</title>
            </Head>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-X94SRK3XQ1"></Script>
            <Script id="google-analytics" strategy="afterInteractive">
              {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-X94SRK3XQ1');
            `}
            </Script>
            <Component {...pageProps} />
</>
        
         
}
