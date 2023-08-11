import { type AppProps, type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import localFont from "next/font/local";
import { ClerkProvider } from "@clerk/nextjs";
import { type ReactElement, type ReactNode } from "react";
import { type NextPage } from "next";
import { ThemeProvider } from "next-themes";

const scilla = localFont({
  src: [
    {
      path: "../../public/fonts/Scilla/Scilla-Narrow.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Scilla/Scilla-Narrow-Italic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/fonts/Scilla/Scilla-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Scilla/Scilla-Regular-Italic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  // display: "swap",
  variable: "--font-scilla",
});

const libre = Libre_Baskerville({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-libre",
});
const source_sans_3 = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-source",
});

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface StarsProps {
  Component: {
    getLayout?: (page: ReactElement) => ReactNode;
  };
}

type AppPropsWithLayout = StarsProps & {
  Component: NextPageWithLayout;
};

const Stars: AppType = ({
  Component,
  pageProps,
}: AppProps & AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  if (typeof window !== "undefined") {
    console.log(localStorage);
  }
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${source_sans_3.style.fontFamily}, sans-serif;
        }
      `}</style>
      <div
        className={`${libre.variable} ${scilla.variable} ${source_sans_3.variable}`}
      >
        <ThemeProvider attribute="class">
          {getLayout(
            <ClerkProvider {...pageProps}>
              <Component {...pageProps} />
            </ClerkProvider>
          )}
        </ThemeProvider>
      </div>
    </>
  );
};

export default api.withTRPC(Stars);
