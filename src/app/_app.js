import Head from 'next/head';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
