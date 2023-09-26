import { useUser } from "@clerk/nextjs";
import { type ReactElement } from "react";
import DashboardLayout from "~/components/DashboardLayout";
import { api } from "~/utils/api";

export default function DashboardPage() {
  const user = useUser();
  let getTodayEntries;
  if (!user.isSignedIn) {
    getTodayEntries = api.entries.getTodayGuestEntry.useQuery(undefined, {
      onSuccess: (data) => {
        console.log("success", data);
      },
      refetchOnWindowFocus: false,
    });
  } else {
    getTodayEntries = api.entries.getTodayEntry.useQuery(undefined, {
      onSuccess: (data) => {
        console.log("success", data);
      },
      refetchOnWindowFocus: false,
    });
  }

  const { data: todayEntries } = getTodayEntries;

  return (
    <>
      <h1 className="col-span-12 p-4 font-dm text-2xl">Dashboard</h1>
      <section className="col-span-12">
        {todayEntries?.length === 0 ? (
          <p>You haven&apos;t logged in entry today.</p>
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
