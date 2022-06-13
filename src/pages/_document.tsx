import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>ig.news</title>

          <meta property="og:title" content="Ig.news" />
          <meta property="og:type" content="news" />
          <meta property="og:url" content="https://ig-news-gules.vercel.app/" />
          <meta
            property="og:image"
            content="https://ig-news-gules.vercel.app/images/girl.jpg"
          />
          <meta name="description" content="New about the React World." />
          <meta name="keywords" content="React, JavaScript" />
          <meta name="author" content="Wevison Ramalho Silva" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
            rel="stylesheet"
          />

          <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
