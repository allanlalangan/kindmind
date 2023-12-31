import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-light-300 text-base-950 transition-colors dark:bg-base-900 dark:text-base-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
