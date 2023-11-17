import Link from "next/link";
import { type ReactElement } from "react";
import DashboardLayout from "~/components/DashboardLayout";

export default function DashboardPage() {
  return (
    <section className="col-span-12 grid grid-cols-12 gap-2 p-2 lg:p-4">
      <Link
        href="/today"
        className="col-span-12 flex flex-col items-center justify-center gap-2 rounded bg-base-800 px-2 pb-2.5 pt-2 uppercase text-base-50 underline-offset-2 transition-colors hover:bg-base-700 hover:underline active:bg-base-900 dark:bg-base-200 dark:text-base-950 dark:hover:bg-base-100 dark:active:bg-base-300 lg:flex-row"
      >
        <svg
          className="h-12 w-12 lg:h-8 lg:w-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M5 22q-.825 0-1.413-.588T3 20V6q0-.825.588-1.413T5 4h1V3q0-.425.288-.713T7 2q.425 0 .713.288T8 3v1h8V3q0-.425.288-.713T17 2q.425 0 .713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.588 1.413T19 22H5Zm0-2h14V10H5v10Zm3-6q-.425 0-.713-.288T7 13q0-.425.288-.713T8 12h8q.425 0 .713.288T17 13q0 .425-.288.713T16 14H8Zm0 4q-.425 0-.713-.288T7 17q0-.425.288-.713T8 16h5q.425 0 .713.288T14 17q0 .425-.288.713T13 18H8Z"
          />
        </svg>
        <span>Daily Log</span>
      </Link>
      <Link
        href="/journal/emotions"
        className="col-span-6 flex flex-col items-center justify-center gap-2 rounded bg-base-800 px-2 pb-2.5 pt-2 uppercase text-base-50 underline-offset-2 transition-colors hover:bg-base-700 hover:underline active:bg-base-900 dark:bg-base-200 dark:text-base-950 dark:hover:bg-base-100 dark:active:bg-base-300 lg:flex-row"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 lg:h-8 lg:w-8"
          viewBox="0 0 15 15"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0Zm2.904-4.284A5.649 5.649 0 0 1 7.1 1.84v4.693L3.781 3.216Zm-.565.565A5.649 5.649 0 0 0 1.84 7.1h4.693L3.216 3.781ZM6.534 7.9H1.841a5.649 5.649 0 0 0 1.375 3.319L6.534 7.9Zm-2.753 3.884A5.65 5.65 0 0 0 7.1 13.16V8.466l-3.319 3.318ZM7.9 8.466v4.693a5.65 5.65 0 0 0 3.318-1.375L7.9 8.466Zm3.884 2.752A5.648 5.648 0 0 0 13.16 7.9H8.466l3.318 3.318ZM8.466 7.1h4.693a5.65 5.65 0 0 0-1.375-3.319L8.466 7.1Zm2.753-3.884A5.649 5.649 0 0 0 7.9 1.84v4.693l3.319-3.318Z"
            clip-rule="evenodd"
          />
        </svg>
        <span>Emotion Journal</span>
      </Link>
      <button className="col-span-6 flex flex-col items-center justify-center gap-2 rounded bg-base-800 px-2 pb-2.5 pt-2 uppercase text-base-50 underline-offset-2 transition-colors hover:bg-base-700 hover:underline active:bg-base-900 dark:bg-base-200 dark:text-base-950 dark:hover:bg-base-100 dark:active:bg-base-300 lg:flex-row">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 lg:h-8 lg:w-8"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M5.55 19L2 15.45l1.4-1.4l2.125 2.125l4.25-4.25l1.4 1.425L5.55 19Zm0-8L2 7.45l1.4-1.4l2.125 2.125l4.25-4.25l1.4 1.425L5.55 11ZM13 17v-2h9v2h-9Zm0-8V7h9v2h-9Z"
          />
        </svg>
        <span>Habit Tracker</span>
      </button>
    </section>
  );
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout pageTitle="Dashboard">{page}</DashboardLayout>;
};
