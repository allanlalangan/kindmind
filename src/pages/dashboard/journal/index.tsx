import Link from "next/link";
import { type ReactElement } from "react";
import DashboardLayout from "~/components/DashboardLayout";

const moon_phase_report = {
  considered_date: "2-10-2017",
  moon_phase: "Balsamic Moon",
  significance:
    "The Moon now is waning and is located halfway between Last Quarter and New Moon. The seeds are moving towards maturation, while rest of the plant withers away. The energy of the plant concentrates into the seed which is preparing itself for the next cycle. In the seasonal progression, this phase represents Halloween, midway between the Fall Equinox and the Winter Solstice. The wall that separates the dead from the living, thins and ghosts walk on the plant of the living.",
  report:
    "This is a time to rest, recreate and reflect on yourself and try to reconnect with inner powerhouses of strength. It is currently not a good time to start something afresh. It is a phase where all you should do is reflect your life objectively and increase awareness of what is important to you. At this point, make your bucket list and realise your dreams and aspirations. What are the larger goals that you can you aspire to and will bring vitality and excitement into your life and make your life a little more interesting and offbeat? Just think and reflect on those aspects. Do not jump on the implementation of the listed goals.",
};

export default function JournalPage() {
  return (
    <>
      <h1 className="mb-4 font-serif text-xl dark:text-primary-300">Journal</h1>
      <section className="flex justify-center gap-2">
        <article className="h-fit w-full rounded bg-light-200 p-4 dark:bg-base-800 lg:w-1/2">
          <h2 className="mb-4 font-serif text-lg text-primary-600 dark:text-tertiary-200">
            Sample Moon Report
          </h2>
          <p className="mb-2">Date: {moon_phase_report.considered_date}</p>
          <p className="mb-2">Moon Phase: {moon_phase_report.moon_phase}</p>
          <p className="mb-2">{moon_phase_report.significance} </p>
          <p className="mb-2">{moon_phase_report.report}</p>
          <button className="mt-4 w-full rounded bg-accent-600 px-4 pb-2.5 pt-2 text-base-950 transition-colors hover:bg-accent-700 active:bg-accent-800 dark:bg-accent-400 dark:hover:bg-accent-500 dark:active:bg-accent-600">
            Generate Journal Prompts (work in progress)
          </button>
        </article>
        <Link
          className="flex h-fit w-1/2 items-center justify-center gap-2 rounded bg-secondary-400 p-4 text-base-50 transition-colors hover:bg-secondary-500 active:bg-secondary-600 dark:bg-primary-600 dark:hover:bg-primary-700 dark:active:bg-primary-800"
          href="/dashboard/journal/new"
        >
          <span className="h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              // width="32"
              // height="32"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span className="text-2xl uppercase tracking-wider">
            Create New Entry
          </span>
        </Link>
      </section>
    </>
  );
}

JournalPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
