import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="favicon.ico" />
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"
      ></script>

      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
        crossOrigin="anonymous"
      ></link>

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lobster&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />

      <title> FULLSTACK: {title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'WELCOME',
  keywords: 'store, nextjs, routes, ssr',
  description: 'The hottest products you find them here at FullStackEletro',
};

export default Meta;
