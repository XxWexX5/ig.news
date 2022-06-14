import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>ig.news</title>

          <meta property="og:title" content="Academia Digital Einstein" />
          <meta
            property="og:description"
            content="A nova geração do conhecimento em saúde"
          />
          <meta
            property="og:image"
            content="https://strapi-conteudo-ensino-prd.s3.sa-east-1.amazonaws.com/academia_digital_einstein_023a0f3779.jpg"
          />
          <meta
            property="og:image:url"
            content="https://strapi-conteudo-ensino-prd.s3.sa-east-1.amazonaws.com/academia_digital_einstein_023a0f3779.jpg"
          />
          <meta
            property="og:image:secure_url"
            content="https://strapi-conteudo-ensino-prd.s3.sa-east-1.amazonaws.com/academia_digital_einstein_023a0f3779.jpg"
          />
          <meta
            property="og:image:alt"
            content="Unidade Hospital Israelita Albert Einstein"
          />
          <meta property="og:image:type" content="image/jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          <meta
            prefix="og: http://ogp.me/ns#"
            property="og:title"
            content="Academia Digital Einstein"
          />
          <meta
            prefix="og: http://ogp.me/ns#"
            property="og:type"
            content="image/jpg"
          />
          <meta
            prefix="og: http://ogp.me/ns#"
            property="og:image"
            content="https://strapi-conteudo-ensino-prd.s3.sa-east-1.amazonaws.com/academia_digital_einstein_023a0f3779.jpg"
          />
          <meta
            prefix="og: http://ogp.me/ns#"
            property="og:url"
            content="https://academiadigital.einstein.br/"
          />

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
