import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";

function MyApp({ Component, pageProps }) {
  const isProduction = process.env.NODE_ENV === "production";

  return (
    <>
      {isProduction && (
        <>
          {/* Google Analytics */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=G-9W4D2SEFLD`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
          >
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9W4D2SEFLD');
            `}
          </Script>

          {/* Microsoft Clarity */}
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "sq5bm3lm3s");
            `}
          </Script>
        </>
      )}

      <Component {...pageProps} />
      {/* Vercel Speed Insights - only in production */}
      {process.env.NODE_ENV === "production" && <SpeedInsights />}
    </>
  );
}

export default appWithTranslation(MyApp);


