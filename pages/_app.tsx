import { SessionProvider } from 'next-auth/react';
import Script from 'next/script';
import '../styles/globals.scss';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      {process.env.NODE_ENV === 'production' && (
        <>
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-J1Z72RYK2X"
          ></Script>
          <Script id="google-analytics" strategy="afterInteractive">
            {` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-J1Z72RYK2X');
          `}
          </Script>
        </>
      )}

      <SessionProvider session={session} refetchInterval={5 * 60}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
