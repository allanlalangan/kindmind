import { useState } from "react";
import ThemeSwitch from "../ThemeSwitch";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import Head from "next/head";

export default function DashboardLayout({
  children,
  pageTitle,
}: {
  children: React.ReactNode;
  pageTitle?: string;
}) {
  const user = useUser();
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>{`kindMind | ${pageTitle}`}</title>
        <meta name="description" content="Journal + Mood & Habit Tracker App" />
      </Head>
      <div className="grid h-screen grid-cols-12 grid-rows-24">
        <header className="col-span-12 flex h-full items-center justify-between border-b border-light-500 bg-light-300 px-4 py-2 transition dark:border-b dark:border-base-800 dark:bg-base-900 lg:col-start-3 lg:col-end-13 lg:justify-end">
          <button
            onClick={() => setNavIsOpen(!navIsOpen)}
            className="rounded-lg border border-primary-400 bg-light-300 p-1 text-primary-500 transition-colors hover:border-primary-500 hover:bg-light-400 active:border-primary-600 active:bg-light-500 dark:border-tertiary-200 dark:bg-base-900 dark:text-tertiary-300 dark:hover:border-tertiary-300 dark:hover:bg-base-800 dark:active:border-tertiary-400 dark:active:bg-base-900 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          </button>
          <div className="flex items-center justify-center gap-2">
            {user.isSignedIn && <UserButton />}
            <ThemeSwitch />
          </div>
        </header>
        <aside
          className={`${
            !navIsOpen ? "-translate-x-full" : ""
          } fixed z-10 row-span-full row-start-1 h-screen w-1/2 bg-light-400 px-4 py-2 transition dark:bg-base-950 md:w-1/3 lg:col-start-1 lg:col-end-3 lg:w-1/6 lg:-translate-x-0`}
        >
          <Link
            onClick={() => setNavIsOpen(false)}
            href="/"
            className="font-dm text-3xl tracking-wide text-primary-600 dark:text-tertiary-300"
          >
            kindMind
          </Link>
          <ul className="mt-4">
            <li>
              <Link
                onClick={() => setNavIsOpen(false)}
                href="/dashboard"
                className="underline-offset-2 hover:text-primary-600 hover:underline dark:hover:text-tertiary-300"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setNavIsOpen(false)}
                href="/dashboard/journal"
                className="underline-offset-2 hover:text-primary-600 hover:underline dark:hover:text-tertiary-300"
              >
                Journal
              </Link>
            </li>
          </ul>
          <button
            onClick={() => setNavIsOpen(!navIsOpen)}
            className={`absolute right-0 top-1 p-2 text-primary-600 dark:text-tertiary-300 lg:hidden`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12L5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </aside>
        <main className="col-span-12 row-span-full row-start-2 flex flex-col overflow-y-scroll p-4 lg:col-start-3 lg:col-end-13">
          {children}
        </main>
      </div>
    </>
  );
}
