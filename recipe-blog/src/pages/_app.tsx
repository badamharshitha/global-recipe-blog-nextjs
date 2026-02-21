import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Recipe Blog"
        description="Multi-language recipe blog built with Next.js"
        openGraph={{
          type: "website",
          locale: "en",
          url: "http://localhost:3000",
          site_name: "Recipe Blog",
        }}
      />
      <Component {...pageProps} />
    </>
  );

