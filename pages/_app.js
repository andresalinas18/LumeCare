import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { useEffect } from "react";
import ReactGA from "react-ga4";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
      
      // Google Analytics
      ReactGA.initialize("G-9W4D2SEFLD");
      ReactGA.send("pageview");

      // Microsoft Clarity
      (function (c, l, a, r, i, t, y) {
        c[a] =
          c[a] ||
          function () {
            (c[a].q = c[a].q || []).push(arguments);
          };
        t = l.createElement(r);
        t.async = 1;
        t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", "sq5bm3lm3s"); 
    }
  }, []);

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);

