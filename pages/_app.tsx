import "../styles/globals.css";
import type { AppProps } from "next/app";

function HogwartsHouses({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default HogwartsHouses;
