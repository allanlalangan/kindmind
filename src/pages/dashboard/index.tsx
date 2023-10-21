import Link from "next/link";
import { type ReactElement } from "react";
import ActivityCalendar from "react-activity-calendar";
import DashboardLayout from "~/components/DashboardLayout";

export default function DashboardPage() {
  return (
    <>
      <div className="col-span-12 row-start-1 flex items-baseline border-b border-light-500 p-2 font-dm text-2xl dark:border-base-800 lg:row-span-1 lg:p-4">
        <Link className="underline-offset-2 hover:underline" href="/dashboard">
          Dashboard
        </Link>
      </div>
      <Link
        href="/today"
        className="col-span-12 m-2 flex h-fit items-center justify-center gap-2 rounded border border-base-800 p-2 font-dm uppercase underline-offset-2 transition hover:border-base-700 hover:underline active:border-base-900 dark:border-base-200 dark:hover:border-base-100 dark:active:border-base-300 lg:m-4 lg:p-2"
      >
        <svg
          className="h-6 w-6 lg:h-8 lg:w-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M5 22q-.825 0-1.413-.588T3 20V6q0-.825.588-1.413T5 4h1V3q0-.425.288-.713T7 2q.425 0 .713.288T8 3v1h8V3q0-.425.288-.713T17 2q.425 0 .713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.588 1.413T19 22H5Zm0-2h14V10H5v10Zm3-6q-.425 0-.713-.288T7 13q0-.425.288-.713T8 12h8q.425 0 .713.288T17 13q0 .425-.288.713T16 14H8Zm0 4q-.425 0-.713-.288T7 17q0-.425.288-.713T8 16h5q.425 0 .713.288T14 17q0 .425-.288.713T13 18H8Z"
          />
        </svg>
        <span>View Today&apos;s Log</span>
      </Link>
      <section className="col-span-12 p-2 lg:p-4">
        <ActivityCalendar
          blockRadius={10}
          data={[
            {
              count: 2,
              date: "2023-06-14",
              level: 1,
            },
            {
              count: 16,
              date: "2023-06-22",
              level: 3,
            },
            {
              count: 3,
              date: "2023-07-05",
              level: 1,
            },
            {
              count: 10,
              date: "2023-10-17",
              level: 2,
            },
          ]}
          labels={{}}
        />
      </section>
    </>
  );
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout pageTitle="Dashboard">{page}</DashboardLayout>;
};
