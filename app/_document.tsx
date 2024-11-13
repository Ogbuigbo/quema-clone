// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    console.log("Custom Document is loading"); // This should log in the server terminal when you restart the server

    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#712323" />
          <meta name="google-site-verification" content="yZXbJSBkECQOw-EPOtRuF2OJ4u6qU17kDreO4ZiE0Nc" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
