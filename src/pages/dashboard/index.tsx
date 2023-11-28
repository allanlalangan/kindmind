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
      <section className="col-span-12 rounded border border-light-500 bg-light-200 dark:border-base-700 dark:bg-base-800 lg:col-span-6">
        <h3 className="flex w-full items-center justify-center border-b border-light-500 p-2 text-xl dark:border-base-700">
          Emotions
        </h3>

        {isLoading ? (
          <p>Loading</p>
        ) : recentEmotions?.length !== 0 ? (
          <div className="mx-4 mb-2 mt-4 flex border-spacing-7 flex-col rounded border border-light-500 p-2 dark:border-base-700">
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
          <div className="mx-4 mb-2 mt-4 flex h-32 border-spacing-7 flex-col items-center justify-center rounded border-2 border-dashed p-2 dark:border-base-700">
            <p className="">You haven&apos;t logged any emotions today</p>
          </div>
        )}
        <Link
          href="/journal/emotions"
          className="mx-4 mb-4 flex flex-col items-center justify-center gap-2 rounded bg-base-800 px-2 pb-2.5 pt-2 text-base-50 underline-offset-2 transition-colors hover:bg-base-700 hover:underline active:bg-base-900 dark:bg-base-200 dark:text-base-950 dark:hover:bg-base-100 dark:active:bg-base-300 lg:flex-row"
        >
          <span>Go to emotion tracker</span>
        </Link>
      </section>
      <section className="col-span-12 rounded border border-light-500 bg-light-200 dark:border-base-700 dark:bg-base-800 lg:col-span-6">
        <h3 className="flex w-full items-center justify-center border-b border-light-500 p-2 text-xl dark:border-base-700">
          Habits
        </h3>

        <div className="mx-4 mb-2 mt-4 flex border-spacing-7 flex-col rounded border border-light-500 p-2 dark:border-base-700"></div>
      </section>
    </section>
  );
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout pageTitle="Dashboard">{page}</DashboardLayout>;
};
