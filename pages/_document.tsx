import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  const ogImage =
    (process.env.NEXT_PUBLIC_BASE_URL
      ? process.env.NEXT_PUBLIC_BASE_URL
      : 'http://localhost:3000') + '/og.png';
  return (
    <Html className="h-full bg-purple-25">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="og:image" content={ogImage} />
        <meta name="theme-color" content="#f4f0fc" />

        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Homies" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Homies" />
        <Script id="clarity">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "hijoq9lp8j");`}
        </Script>
      </Head>

      <body className="h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
