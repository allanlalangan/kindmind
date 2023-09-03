import Link from "next/link";
import { type ReactElement } from "react";
import DashboardLayout from "~/components/DashboardLayout";

export default function JournalPage() {
  return (
    <>
      <h1 className="mb-4 font-serif text-xl dark:text-primary-300">Journal</h1>
      <Link
        className="col-span-12 row-start-1 flex items-center rounded bg-primary-500 p-4 text-white transition hover:bg-primary-600 active:bg-primary-700"
        href="/dashboard/journal/new"
      >
        <span className="mr-2 h-8 w-8">
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
        <span className="text-2xl font-semibold uppercase tracking-wider">
          Create New Entry
        </span>
      </Link>
    </>
  );
}

JournalPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
