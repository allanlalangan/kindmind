import Link from "next/link";
import { type ReactElement } from "react";
import DashboardLayout from "~/components/DashboardLayout";

export default function HabitsPage() {
  return (
    <section className="col-span-12 row-span-full flex flex-col gap-2 p-2 lg:gap-4 lg:p-4">
      <div className="flex h-full items-center justify-center rounded border border-dashed border-light-500 dark:border-base-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-32 w-32 text-light-800 dark:text-base-600"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M12 8v4m0 4.01l.01-.011M9 3H4v3m0 5v2m16-2v2M15 3h5v3M9 21H4v-3m11 3h5v-3"
          />
        </svg>
        <div className="flex flex-col items-center gap-2">
          <span className="italic">You don&apos;t have any habits saved!</span>

          <Link
            href="/journal/habits/new"
            className="flex w-full items-center justify-center gap-2 rounded border border-light-500 p-2 text-sm uppercase text-base-950 underline-offset-2 transition hover:bg-light-400 hover:underline active:bg-light-600 dark:border-base-700 dark:text-base-50 dark:hover:bg-base-800 dark:active:bg-base-800 lg:p-4"
          >
            <svg
              className="h-6 w-6 text-light-800 dark:text-base-600 lg:h-8 lg:w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
              />
            </svg>
            <span>Create your first habit</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

HabitsPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout pageTitle="Journal">{page}</DashboardLayout>;
};
