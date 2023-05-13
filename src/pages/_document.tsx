
import Document, {Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import Script from 'next/script'
class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render(){
  return (
    <Html>
      <Head>
             
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
              <link rel="preconnect" href="https://fonts.gstatic.com"/>
              <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap" rel="stylesheet"/>
              <Script  src="https://kit.fontawesome.com/427711cde3.js" crossOrigin="anonymous"></Script >
      </Head>
        <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
}
export default MyDocument
