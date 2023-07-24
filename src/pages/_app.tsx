import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import localFont from "next/font/local";
import { ClerkProvider } from "@clerk/nextjs";

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

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <div
        className={`${libre.variable} ${scilla.variable} ${source_sans_3.variable} font-sans`}
      >
        <Component {...pageProps} />
      </div>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
