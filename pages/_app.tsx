import type { AppProps } from "next/app";
import { Source_Sans_Pro } from "@next/font/google";
import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyle from "../components/globalstyles";

const theme: DefaultTheme = {
  colors: {
    primary: "#0F0F0F",
    secondary: "#5B93FF",
  },
};

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["300", "600", "700"]
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={sourceSansPro.className}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </>
  );
}
