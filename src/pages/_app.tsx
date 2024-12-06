import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

import "@/styles/globals.css";

const roboto = Roboto({
  weight: ["100", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  preload: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />;
    </main>
  );
}
