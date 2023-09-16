import Head from "next/head";
import {
  SignOutButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import ThemeSwitch from "~/components/ThemeSwitch";

export default function Home() {
  const user = useUser();
  return (
    <>
      <Head>
        <title>kindMind | Journal + Mood & Habit Tracker</title>
        <meta name="description" content="Journal + Mood & Habit Tracker App" />
      </Head>
      <header className="absolute col-span-12 flex w-full items-center justify-end border-b border-light-500 bg-light-300 px-4 py-2 transition dark:border-b dark:border-base-800 dark:bg-base-900">
        <div className="flex items-center justify-center gap-2">
          {user.isSignedIn && <UserButton />}
          <ThemeSwitch />
        </div>
      </header>
      <main className="flex min-h-screen flex-col justify-center justify-items-center">
        <section className="flex h-full flex-col justify-center px-4">
          <Link
            href="/"
            className="w-fit font-dm text-6xl tracking-wide text-primary-600 dark:text-tertiary-300"
          >
            kindMind
          </Link>

          <p className="mb-2 font-dm text-2xl dark:text-primary-300">
            journal + mood & habit tracker
          </p>
        </section>
        <section className="flex items-center gap-2 px-4">
          {!user.isSignedIn && (
            <>
              <SignUpButton mode="modal">
                <button className="w-fit rounded bg-secondary-400 px-4 pb-2.5 pt-2 text-base-50 transition-colors hover:bg-secondary-500 hover:underline active:bg-secondary-600 dark:bg-primary-600 dark:hover:bg-primary-700 dark:active:bg-primary-800">
                  Get Started
                </button>
              </SignUpButton>
            </>
          )}
          {!!user.isSignedIn && (
            <>
              <SignOutButton>
                <button className="w-fit rounded bg-secondary-400 px-4 pb-2.5 pt-2 text-base-50 transition-colors hover:bg-secondary-500 hover:underline active:bg-secondary-600 dark:bg-primary-600 dark:hover:bg-primary-700 dark:active:bg-primary-800">
                  Sign Out
                </button>
              </SignOutButton>
            </>
          )}
          <Link
            className="w-fit rounded bg-secondary-400 px-4 pb-2.5 pt-2 text-base-50 transition-colors hover:bg-secondary-500 hover:underline active:bg-secondary-600 dark:bg-primary-600 dark:hover:bg-primary-700 dark:active:bg-primary-800"
            href="/dashboard"
          >
            Dashboard
          </Link>
        </section>
      </main>
    </>
  );
}
