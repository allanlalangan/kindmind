import Link from "next/link";
import { useRouter } from "next/router";
import { type ReactElement } from "react";

import DashboardLayout from "~/components/DashboardLayout";

export default function EntryPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <section className="mb-4 flex items-baseline font-dm dark:text-primary-300">
        <Link
          className="pr-1 text-xl underline-offset-2 hover:underline"
          href="/journal"
        >
          Journal
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3.5 w-3.5"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10l-10 10Z"
          />
        </svg>
        <span className="px-1">Entry ID: {id}</span>
      </section>
    </>
  );
}

EntryPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout pageTitle="Journal">{page}</DashboardLayout>;
};
