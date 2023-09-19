import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { type ReactElement } from "react";
import { api } from "~/utils/api";
import DashboardLayout from "~/components/DashboardLayout";

export default function JournalPage() {
  const user = useUser();

  let getAllEntriesQuery;

  if (!user.isSignedIn) {
    getAllEntriesQuery = api.entries.getGuestEntries.useQuery(undefined, {
      onSuccess: (data) => {
        console.log("success", data);
      },
    });
  } else {
    getAllEntriesQuery = api.entries.getAll.useQuery(undefined, {
      onSuccess: (data) => {
        console.log("success", data);
      },
    });
  }

  const {
    data: entries,
    isLoading,
    refetch: refetchEntries,
  } = getAllEntriesQuery;

  return (
    <>
      <h1 className="mb-4 font-dm text-xl dark:text-primary-300">Journal</h1>

      <section className="flex w-full flex-col justify-center gap-4 rounded border border-light-500 bg-light-200 p-4 dark:border-base-700 dark:bg-base-800 lg:w-1/2">
        <div className="flex w-full items-baseline justify-between">
          <h2 className="font-dm text-lg text-primary-600 dark:text-tertiary-300">
            Recent Entries
          </h2>
          <Link
            className="flex h-fit items-center justify-center gap-1 rounded bg-secondary-400 p-4 text-base-50 transition-colors hover:bg-secondary-500 active:bg-secondary-600 dark:bg-primary-600 dark:hover:bg-primary-700 dark:active:bg-primary-800 lg:w-fit"
            href="/journal/new"
          >
            <span className="h-6 w-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 26 30">
                <path
                  fill="currentColor"
                  d="M5 23.7q-.825 0-1.413-.587T3 21.7v-14q0-.825.588-1.413T5 5.7h8.925l-2 2H5v14h14v-6.95l2-2v8.95q0 .825-.588 1.413T19 23.7H5Zm7-9Zm4.175-8.425l1.425 1.4l-6.6 6.6V15.7h1.4l6.625-6.625l1.425 1.4l-7.2 7.225H9v-4.25l7.175-7.175Zm4.275 4.2l-4.275-4.2l2.5-2.5q.6-.6 1.438-.6t1.412.6l1.4 1.425q.575.575.575 1.4T22.925 8l-2.475 2.475Z"
                />
              </svg>
            </span>
            <span className="font-dm uppercase tracking-wider">
              Create New Entry
            </span>
          </Link>
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul className="flex flex-col gap-4">
            {entries?.map((entry) => (
              <li
                key={entry.id}
                className="flex items-center justify-between rounded bg-light-300 p-4 dark:bg-base-700"
              >
                <Link href={`/journal/${entry.id}`}>
                  <h3 className="text-2xl text-secondary-400 dark:text-primary-500">
                    {entry.title}
                  </h3>
                  <p>{entry.createdAt.toLocaleDateString()}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

JournalPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout pageTitle="Journal">{page}</DashboardLayout>;
};
