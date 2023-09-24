import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { api } from "~/utils/api";

export default function JournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useUser();
  const router = useRouter();

  let getAllEntriesQuery;
  if (!!user && user.isSignedIn) {
    getAllEntriesQuery = api.entries.getAll.useQuery(undefined, {
      onSuccess: (data) => {
        console.log("success", data);
      },
      refetchOnWindowFocus: false,
    });
  } else {
    getAllEntriesQuery = api.entries.getGuestEntries.useQuery(undefined, {
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

  const redirected = router.query.redirected === "true";
  useEffect(() => {
    if (redirected) {
      void refetchEntries();
    }
  }, [redirected, refetchEntries]);

  return (
    <>
      <div className="border-b border-light-500 p-4 font-dm text-2xl dark:border-base-800">
        <Link className="underline-offset-2 hover:underline" href="/journal">
          Journal
        </Link>
      </div>
      <div className="flex h-full flex-col lg:flex-row">
        <section className="flex h-[50vh] w-full flex-col justify-start border-light-500 dark:border-base-800 lg:h-auto lg:w-1/2 lg:border-r xl:w-1/3">
          <div className="flex w-full items-center justify-between p-4">
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
          {isLoading ? (
            <span>Loading...</span>
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
                    href={`/journal/${entry.id}`}
                    className={`flex w-full items-center justify-between p-4 transition hover:bg-light-200 hover:dark:bg-base-800 ${
                      router.query.id === entry.id &&
                      "bg-light-200 dark:bg-base-800"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex flex-col items-center justify-center rounded border border-base-950 px-4 py-2 uppercase dark:border-base-50">
                        <span className="">
                          {entry.createdAt.toLocaleString("default", {
                            month: "short",
                          })}
                        </span>
                        <span className="">
                          {entry.createdAt.toLocaleString("default", {
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <h3 className="text-lg">{entry.title}</h3>
                    </div>
                    {router.query.id === entry.id && (
                      <span className="h-8 w-8">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6l4.6-4.6Z"
                          />
                        </svg>
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        {children}
      </div>
    </>
  );
}
