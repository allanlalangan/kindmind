import { useState } from "react";
import ThemeSwitch from "../ThemeSwitch";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <>
      <div className="grid h-screen grid-cols-12 grid-rows-24">
        <header className="col-span-12 flex h-full items-center justify-between border-b border-light-500 bg-light-300 px-4 dark:border-b dark:border-base-800 dark:bg-base-900 lg:col-start-3 lg:col-end-13 lg:justify-end">
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
          <ThemeSwitch />
        </header>
        <aside
          className={`${
            !navIsOpen ? "-translate-x-full" : ""
          } fixed row-span-full row-start-1 h-screen w-1/2 bg-light-400 px-4 py-2 transition dark:bg-base-950 md:w-1/3 lg:static lg:col-start-1 lg:col-end-3 lg:w-full lg:-translate-x-0`}
        >
          <span className="font-display text-3xl uppercase tracking-wide text-primary-600 dark:text-tertiary-300">
            Stars
          </span>
          <ul className="mt-4">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
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
        <main className="col-span-12 row-span-full row-start-2 flex flex-col p-4 lg:col-start-3 lg:col-end-13">
          <h1 className="font-serif text-xl dark:text-primary-300">
            Dashboard
          </h1>
          {children}
        </main>
      </div>
    </>
  );
}
