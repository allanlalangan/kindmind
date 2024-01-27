import Link from "next/link";
import { type ReactElement } from "react";
import DashboardLayout from "~/components/DashboardLayout";

export default function EmotionsPage() {
  return (
    <section className="col-span-12 flex flex-col gap-2 p-2 lg:gap-4 lg:p-4">
      <Link
        href="/journal/emotions/new"
        className="flex flex-col items-center justify-center gap-2 rounded bg-base-800 px-2 pb-2.5 pt-2 text-base-50 underline-offset-2 transition-colors hover:bg-base-700 hover:underline active:bg-base-900 dark:bg-base-200 dark:text-base-950 dark:hover:bg-base-100 dark:active:bg-base-300 lg:flex-row"
      >
        <span>Record New Emotion</span>
      </Link>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12 rounded border border-light-500 p-2 dark:border-base-700 lg:p-4">
          <h3>Feed</h3>
        </div>
        <div className="col-span-12 rounded border border-light-500 p-2 dark:border-base-700 lg:p-4">
          <h3>Recent emotions</h3>
        </div>
        <div className="col-span-12 rounded border border-light-500 p-2 dark:border-base-700 lg:p-4">
          <h3>Data Visualization</h3>
        </div>
      </div>
    </section>
  );
}

EmotionsPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout pageTitle="Journal">{page}</DashboardLayout>;
};
