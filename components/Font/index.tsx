import { Inter, Lato, Source_Sans_Pro } from "@next/font/google";

export const inter = Inter({
  variable: "--inter-font",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"]
});

export const sourceSansPro = Source_Sans_Pro({
  variable: "--source-font",
  weight: ["600", "700"],
  subsets: ["latin"]
});

export const lato = Lato({
  variable: "--lato-font",
  weight: ["400"],
  subsets: ["latin"]
});
