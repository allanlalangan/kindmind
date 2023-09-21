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
          <Link href="/" className="w-fit font-dm text-6xl tracking-wide">
            kindMind
          </Link>

          <p className="mb-2 font-dm text-2xl">
            journal + mood & habit tracker
          </p>
        </section>
        <section className="flex items-center gap-2 px-4">
          {!user.isSignedIn && (
            <>
              <SignUpButton mode="modal">
                <button className="w-fit rounded bg-base-800 px-4 pb-2.5 pt-2 text-base-50 hover:bg-base-700 hover:underline active:bg-base-900 dark:bg-base-200 dark:text-base-950 dark:hover:bg-base-100 dark:active:bg-base-300">
                  Get Started
                </button>
              </SignUpButton>
            </>
          )}
          {!!user.isSignedIn && (
            <>
              <SignOutButton>
                <button className="w-fit rounded bg-base-800 px-4 pb-2.5 pt-2 text-base-50 hover:bg-base-700 hover:underline active:bg-base-900 dark:bg-base-200 dark:text-base-950 dark:hover:bg-base-100 dark:active:bg-base-300">
                  Sign Out
                </button>
              </SignOutButton>
            </>
          )}
          <Link
            className="w-fit rounded bg-base-800 px-4 pb-2.5 pt-2 text-base-50 hover:bg-base-700 hover:underline active:bg-base-900 dark:bg-base-200 dark:text-base-950 dark:hover:bg-base-100 dark:active:bg-base-300"
            href="/dashboard"
          >
            Dashboard
          </Link>
        </section>
      </main>
    </>
  );
}
