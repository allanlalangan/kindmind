import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { type ReactElement } from "react";
import DashboardLayout from "~/components/DashboardLayout";
import { api } from "~/utils/api";

export default function DashboardPage() {
  const localDate = new Date();
  localDate.setHours(0, 0, 0, 0);
  let getRecentEmotions;

  const user = useUser();

  if (!user.isSignedIn) {
    getRecentEmotions = api.emotions.getGuestRecent.useQuery(
      { utc_string: localDate.toUTCString() },
      {
        onSuccess: (data) => {
          console.log("success", data);
        },
        refetchOnWindowFocus: false,
      }
    );
  } else {
    getRecentEmotions = api.emotions.getRecent.useQuery(
      { utc_string: localDate.toUTCString() },
      {
        onSuccess: (data) => {
          console.log("success", data);
        },
        refetchOnWindowFocus: false,
      }
    );
  }

  const { data: recentEmotions, isLoading } = getRecentEmotions;
  return (
    <>
      <section className="col-span-12 row-span-full flex flex-col border-b dark:border-base-800 lg:col-span-6 lg:row-span-full lg:border-b-0 lg:border-r lg:border-light-500">
        <h3 className="flex w-full items-center justify-center pt-2 text-xl">
          Recent Activity
        </h3>

        <div className="mx-4 mb-2 mt-4 flex-1 border-spacing-7 flex-col items-center justify-center rounded border border-dashed border-light-500 p-2 dark:border-base-700"></div>
        <Link
          href="/today"
          className="mx-4 mb-4 flex items-center justify-center gap-2 rounded bg-base-800 px-2 pb-2.5 pt-2 text-base-50 underline-offset-2 transition-colors hover:bg-base-700 hover:underline active:bg-base-900 dark:bg-base-200 dark:text-base-950 dark:hover:bg-base-100 dark:active:bg-base-300 lg:h-14"
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
          <span>View Daily Log</span>
        </Link>
      </section>
      <section className="col-span-12 flex flex-col border-b dark:border-base-800 lg:col-span-6 lg:row-span-6 lg:border-light-500">
        <h3 className="flex w-full items-center justify-center pt-2 text-xl">
          Emotions
        </h3>
        <div className="flex flex-1 flex-col">
          {isLoading ? (
            <p>Loading</p>
          ) : recentEmotions?.length !== 0 ? (
            <div className="mx-4 mb-2 mt-4 flex flex-1 border-spacing-7 flex-col rounded border border-light-500 p-2 dark:border-base-700">
              <h4 className="text-lg">Recent Emotions</h4>
              <ul className="flex flex-col">
                {recentEmotions?.map((emotion, i) => (
                  <li key={i} className="flex items-center justify-between">
                    <p className="">{emotion.name}</p>
                    <p className="">
                      {emotion.createdAt.toLocaleTimeString([], {
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="mx-4 mb-2 mt-4 flex h-32 flex-1 border-spacing-7 flex-col items-center justify-center rounded border border-dashed border-light-500 p-2 dark:border-base-700">
              <p className="">You haven&apos;t logged any emotions today</p>
            </div>
          )}
          <Link
            href="/journal/emotions"
            className="mx-4 mb-4 flex flex-col items-center justify-center gap-2 rounded bg-base-800 px-2 pb-2.5 pt-2 text-base-50 underline-offset-2 transition-colors hover:bg-base-700 hover:underline active:bg-base-900 dark:bg-base-200 dark:text-base-950 dark:hover:bg-base-100 dark:active:bg-base-300 lg:h-14 lg:flex-row"
          >
            <span>Go to emotion tracker</span>
          </Link>
        </div>
      </section>
      <section className="col-span-12 flex flex-col lg:col-span-6 lg:row-span-6">
        <h3 className="flex w-full items-center justify-center pt-2 text-xl">
          Habits
        </h3>
        <div className="flex flex-1 flex-col">
          <div className="m-2 flex flex-1 border-spacing-7 flex-col items-center justify-center rounded border border-dashed border-light-500 p-2 dark:border-base-700 lg:mx-4">
            <p className="">No habits found</p>
          </div>
          <Link
            href="/journal/habits"
            className="mx-4 mb-4 flex flex-col items-center justify-center gap-2 rounded bg-base-800 px-2 pb-2.5 pt-2 text-base-50 underline-offset-2 transition-colors hover:bg-base-700 hover:underline active:bg-base-900 dark:bg-base-200 dark:text-base-950 dark:hover:bg-base-100 dark:active:bg-base-300 lg:h-14 lg:flex-row"
          >
            <span>Go to habit tracker</span>
          </Link>
        </div>
      </section>
    </>
  );
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout pageTitle="Dashboard">{page}</DashboardLayout>;
};
