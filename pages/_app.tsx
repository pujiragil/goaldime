import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { inter, lato, sourceSansPro } from "../components/Font";
import GlobalStyle from "../components/globalstyles";

const theme: DefaultTheme = {
  colors: {
    primary: "#0F0F0F",
    secondary: "#5B93FF",
    subtitle: "#FFC327",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={sourceSansPro.variable}>
        <main className={inter.variable}>
          <main className={lato.variable}>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <Component {...pageProps} />
            </ThemeProvider>
          </main>
        </main>
      </main>
    </>
  );
}
