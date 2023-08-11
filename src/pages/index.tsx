import Head from "next/head";
import {
  SignOutButton,
  SignInButton,
  SignUpButton,
  useUser,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import ThemeSwitch from "~/components/ThemeSwitch";

export default function Home() {
  const user = useUser();
  const moon_phase_report = {
    considered_date: "2-10-2017",
    moon_phase: "Balsamic Moon",
    significance:
      "The Moon now is waning and is located halfway between Last Quarter and New Moon. The seeds are moving towards maturation, while rest of the plant withers away. The energy of the plant concentrates into the seed which is preparing itself for the next cycle. In the seasonal progression, this phase represents Halloween, midway between the Fall Equinox and the Winter Solstice. The wall that separates the dead from the living, thins and ghosts walk on the plant of the living.",
    report:
      "This is a time to rest, recreate and reflect on yourself and try to reconnect with inner powerhouses of strength. It is currently not a good time to start something afresh. It is a phase where all you should do is reflect your life objectively and increase awareness of what is important to you. At this point, make your bucket list and realise your dreams and aspirations. What are the larger goals that you can you aspire to and will bring vitality and excitement into your life and make your life a little more interesting and offbeat? Just think and reflect on those aspects. Do not jump on the implementation of the listed goals.",
  };
  return (
    <>
      <Head>
        <title>Stars</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeSwitch />
      <main className="pb-8">
        <section className="mb-8 mt-48 flex flex-col justify-center p-4">
          <h1 className="font-display text-6xl uppercase tracking-wide text-primary-600 dark:text-tertiary-300">
            Stars
          </h1>
          <article className="mb-2">
            <p className="mb-2 font-serif text-2xl dark:text-primary-300">
              the astrology network
            </p>
            <p className="mb-2">
              Create natal charts. Track current and upcoming astrological
              events.
              <br />
              Generate tailored journal prompts based on your personalized
              horoscopes with the power of AI.
              <br />
              Tap in to your guides and connect with others through{" "}
              <em className="tracking-wide text-primary-700 dark:text-tertiary-300">
                Stars
              </em>
              .
            </p>
          </article>
          <section className="flex items-center gap-2">
            {!user.isSignedIn && (
              <>
                <SignUpButton mode="modal">
                  <button className="w-fit rounded bg-secondary-400 px-4 pb-2.5 pt-2 text-base-50 transition-colors hover:bg-secondary-500 hover:underline active:bg-secondary-600 dark:bg-primary-600 dark:hover:bg-primary-700 dark:active:bg-primary-800">
                    Create Account
                  </button>
                </SignUpButton>
                <SignInButton mode="modal">
                  <button className="w-fit rounded bg-secondary-400 px-4 pb-2.5 pt-2 text-base-50 transition-colors hover:bg-secondary-500 hover:underline active:bg-secondary-600 dark:bg-primary-600 dark:hover:bg-primary-700 dark:active:bg-primary-800">
                    Sign In
                  </button>
                </SignInButton>
              </>
            )}
            {!!user.isSignedIn && (
              <>
                <UserButton />
                <SignOutButton>
                  <button className="w-fit rounded bg-secondary-400 px-4 pb-2.5 pt-2 text-base-50 transition-colors hover:bg-secondary-500 hover:underline active:bg-secondary-600 dark:bg-primary-600 dark:hover:bg-primary-700 dark:active:bg-primary-800">
                    Sign Out
                  </button>
                </SignOutButton>
              </>
            )}
            <Link className="underline underline-offset-4" href="/dashboard">
              Dashboard
            </Link>
          </section>
        </section>

        <article className="mx-4 rounded bg-light-200 p-8 dark:bg-base-800 md:mx-36 lg:mx-72">
          <h2 className="mb-4 text-lg font-bold text-primary-600 dark:text-tertiary-200">
            Sample Moon Report
          </h2>
          <p className="mb-2">Date: {moon_phase_report.considered_date}</p>
          <p className="mb-2">Moon Phase: {moon_phase_report.moon_phase}</p>
          <p className="mb-2">{moon_phase_report.significance} </p>
          <p className="mb-2">{moon_phase_report.report}</p>
          <button className="mt-4 w-fit rounded bg-secondary-400 px-4 pb-2.5 pt-2 text-base-50 transition-colors hover:bg-secondary-500 active:bg-secondary-600 dark:bg-primary-600 dark:hover:bg-primary-700 dark:active:bg-primary-800">
            Generate Journal Prompts (work in progress)
          </button>
        </article>
      </main>
    </>
  );
}
