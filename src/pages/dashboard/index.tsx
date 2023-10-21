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
