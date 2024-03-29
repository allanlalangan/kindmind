import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/router";
import { type ReactElement } from "react";
import DashboardLayout from "~/components/DashboardLayout";
import { api } from "~/utils/api";

export default function JournalPage() {
  const user = useUser();
  const router = useRouter();

  let getAllEntriesQuery;
  if (!!user && user.isSignedIn) {
    getAllEntriesQuery = api.journal.getAll.useQuery(undefined, {
      onSuccess: (data) => {
        console.log("success", data);
      },
      refetchOnWindowFocus: false,
    });
  } else {
    getAllEntriesQuery = api.journal.getGuestEntries.useQuery(undefined, {
      onSuccess: (data) => {
        console.log("success", data);
      },
      refetchOnWindowFocus: false,
    });
  }

  const {
    data: entries,
    isLoading,
    refetch: refetchEntries,
  } = getAllEntriesQuery;
  return (
    <>
      <div className="col-span-12 flex w-full items-center justify-between border-light-500 p-2 dark:border-base-800 lg:col-span-4 lg:row-span-1 lg:border-r lg:p-4">
        <h2 className="font-dm text-xl">Recent Entries</h2>
        <Link
          className="flex h-fit items-center justify-center gap-1 rounded-md bg-light-300 p-1 transition-colors hover:bg-light-200 active:bg-light-500 dark:bg-base-900 dark:hover:bg-base-800 dark:active:bg-base-900 lg:w-fit"
          href="/journal/new"
        >
          <span className="h-7 w-7">
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M17.5 21h1v-2.5H21v-1h-2.5V15h-1v2.5H15v1h2.5V21Zm.5 2q-2.075 0-3.538-1.463T13 18q0-2.075 1.463-3.538T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23ZM7 9h10V7H7v2Zm4.675 12H5q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v6.7q-.725-.35-1.463-.525T18 11q-.275 0-.513.012t-.487.063V11H7v2h6.125q-.45.425-.813.925T11.675 15H7v2h4.075q-.05.25-.063.488T11 18q0 .825.15 1.538T11.675 21Z"
              />
            </svg>
          </span>
        </Link>
      </div>
      <section className="col-span-12 row-span-full row-start-2 flex w-full flex-col justify-start border-light-500 dark:border-base-800 lg:col-span-4 lg:row-span-full lg:row-start-2 lg:border-r">
        {isLoading ? (
          <span className="flex flex-col items-center justify-center gap-2 p-2 lg:col-span-6 lg:p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <g stroke="currentColor">
                <circle
                  cx="12"
                  cy="12"
                  r="9.5"
                  fill="none"
                  stroke-linecap="round"
                  stroke-width="3"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    calcMode="spline"
                    dur="1.5s"
                    keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                    keyTimes="0;0.475;0.95;1"
                    repeatCount="indefinite"
                    values="0 150;42 150;42 150;42 150"
                  />
                  <animate
                    attributeName="stroke-dashoffset"
                    calcMode="spline"
                    dur="1.5s"
                    keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                    keyTimes="0;0.475;0.95;1"
                    repeatCount="indefinite"
                    values="0;-16;-59;-59"
                  />
                </circle>
                <animateTransform
                  attributeName="transform"
                  dur="2s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 12 12;360 12 12"
                />
              </g>
            </svg>
            <p className="text-sm">Fetching entries...</p>
          </span>
        ) : (
          <ul className="flex flex-col overflow-y-scroll border-y border-light-500 dark:border-base-800">
            {entries?.map((entry, i) => (
              <li
                key={entry.id}
                className={`${
                  i === entries.length - 1 ? "" : "border-b"
                } flex items-center justify-between border-light-500 dark:border-base-800`}
              >
                <Link
                  href={`/journal/entry/${entry.id}`}
                  className={`flex w-full items-center justify-start gap-2 p-2 transition hover:bg-light-200 hover:dark:bg-base-800 lg:p-4 ${
                    router.query.id === entry.id &&
                    "bg-light-200 dark:bg-base-800"
                  }`}
                >
                  <div className="flex w-1/6 flex-col items-center justify-center rounded border border-base-950 font-dm uppercase dark:border-base-50 lg:w-1/4">
                    <span className="text-sm">
                      {entry.createdAt.toLocaleString("default", {
                        month: "short",
                      })}
                    </span>
                    <span className="text-2xl">
                      {entry.createdAt.toLocaleString("default", {
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="truncate lg:w-3/4">{entry.title}</h3>
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
