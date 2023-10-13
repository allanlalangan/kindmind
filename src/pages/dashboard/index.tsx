import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { type ReactElement } from "react";
import DashboardLayout from "~/components/DashboardLayout";
import { api } from "~/utils/api";

export default function DashboardPage() {
  const user = useUser();
  let getTodayEntries;
  if (!user.isSignedIn) {
    getTodayEntries = api.journal.getTodayGuestEntry.useQuery(undefined, {
      onSuccess: (data) => {
        console.log("success", data);
      },
      refetchOnWindowFocus: false,
    });
  } else {
    getTodayEntries = api.journal.getTodayEntry.useQuery(undefined, {
      onSuccess: (data) => {
        console.log("success", data);
      },
      refetchOnWindowFocus: false,
    });
  }

  const { data: todayEntries } = getTodayEntries;

  return (
    <>
      <div className="col-span-12 row-start-1 flex items-baseline border-b border-light-500 p-2 font-dm text-2xl dark:border-base-800 lg:row-span-1 lg:p-4">
        <Link className="underline-offset-2 hover:underline" href="/dashboard">
          Dashboard
        </Link>
      </div>
      <section className="col-span-12 flex items-center justify-center">
        {todayEntries?.length === 0 ? (
          <p>You haven&apos;t logged an entry today.</p>
        ) : (
          ""
        )}
      </section>
    </>
  );
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout pageTitle="Dashboard">{page}</DashboardLayout>;
};
