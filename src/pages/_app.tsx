import { type AppProps, type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { DM_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { type ReactElement, type ReactNode } from "react";
import { type NextPage } from "next";
import { ThemeProvider } from "next-themes";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-dm-sans",
});

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps {
  Component: {
    getLayout?: (page: ReactElement) => ReactNode;
  };
}

type AppPropsWithLayout = MyAppProps & {
  Component: NextPageWithLayout;
};

const App: AppType = ({
  Component,
  pageProps,
}: AppProps & AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${dm_sans.style.fontFamily}, sans-serif;
        }
      `}</style>
      <div className={`${dm_sans.variable} min-h-screen`}>
        <ThemeProvider attribute="class">
          <ClerkProvider {...pageProps}>
            {getLayout(<Component {...pageProps} />)}
          </ClerkProvider>
        </ThemeProvider>
      </div>
    </>
  );
};

export default api.withTRPC(App);
