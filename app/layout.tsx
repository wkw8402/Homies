import '../styles/globals.css';

import { Metadata } from 'next';
import NextAuthProvider from './context/NextAuthProvider';
import Script from 'next/script';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const metadata: Metadata = {
  title: 'Homies',
  description: 'Welcome to Homies',
};

export default function RootLayout({ children }) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body className="flex w-full flex-col flex-1 h-[calc(100dvh)]">
        <NextAuthProvider>

          <header>{/* Header content */}</header>

          {/* Main content */}
          <main className="flex flex-col flex-1 w-full">
            
            {children}
            
            </main>

          <footer>{/* Footer content */}</footer>

        </NextAuthProvider>

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
            <Script id="ms-clarity" strategy="afterInteractive">
              {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "hijoq9lp8j");`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
