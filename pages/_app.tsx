import { SessionProvider } from 'next-auth/react';
import NextNProgress from 'nextjs-progressbar';
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
          <Script
            strategy="afterInteractive"
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js-na1.hs-scripts.com/23979052.js"
          />
          <Script id="clarity" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "hijoq9lp8j");`}
          </Script>
        </>
      )}

      <SessionProvider session={session} refetchInterval={5 * 60}>
        <NextNProgress options={{ showSpinner: false }} />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
