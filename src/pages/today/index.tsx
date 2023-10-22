import { useState, type ReactElement } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import DashboardLayout from "~/components/DashboardLayout";
import DialogModal from "~/components/DialogModal";
import Entry from "~/components/Entry";
import AddEntryForm from "~/components/AddEntryForm";
import { api } from "~/utils/api";

export default function TodayPage() {
  const now = new Date();
  const localDate = new Date();
  localDate.setHours(0, 0, 0, 0);
  const utc_string = localDate.toUTCString();

  const user = useUser();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  let getTodayLog;

  if (!user.isSignedIn) {
    getTodayLog = api.entries.getGuestTodayLog.useQuery(
      { utc_string },
      {
        onSuccess: (data) => {
          console.log("success", data);
        },
        refetchOnWindowFocus: false,
      }
    );
  } else {
    getTodayLog = api.entries.getTodayLog.useQuery(
      { utc_string },
      {
        onSuccess: (data) => {
          console.log("success", data);
        },
        refetchOnWindowFocus: false,
      }
    );
  }

  const { data: todayLog, refetch: refetchDailyLog } = getTodayLog;

  return (
    <>
      <div className="col-span-12 row-start-1 flex items-baseline border-b border-light-500 p-2 font-dm text-2xl dark:border-base-800 lg:row-span-1 lg:p-4">
        <Link className="underline-offset-2 hover:underline" href="/today">
          Daily Log
        </Link>
      </div>
      <p className="col-span-6 row-start-2 flex items-center border-light-500 p-2 font-dm dark:border-base-800 lg:col-span-3 lg:p-4 lg:text-lg">
        {now.toLocaleDateString("en-us", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
      <section className="col-span-12 row-span-full row-start-3 flex flex-col gap-4 overflow-y-scroll px-2 pb-12 lg:col-span-6 lg:row-start-3 lg:px-4 lg:pb-4">
        {todayLog?.length === 0 ? (
          <p>You haven&apos;t logged an entry today.</p>
        ) : (
          todayLog?.map((entry) => (
            <Entry
              key={entry.id}
              entry={entry}
              events={entry.events}
              refetchDailyLog={() => void refetchDailyLog()}
            />
          ))
        )}
      </section>
      <section className="fixed bottom-0 col-span-12 h-12 w-full border-light-500 bg-light-300 p-2 dark:border-base-800 dark:bg-base-900 lg:static lg:col-span-6 lg:col-start-7 lg:row-span-full lg:row-start-2 lg:h-auto lg:border-l lg:p-4">
        <p className="flex items-center font-dm lg:text-lg">Summary</p>
      </section>
      <button
        onClick={() => setModalIsOpen(true)}
        className="col-span-6 col-start-7 row-start-2 m-2 flex h-fit items-center justify-center gap-2 rounded bg-base-800 p-2 font-dm text-sm uppercase text-base-50 transition hover:bg-base-700 active:bg-base-900 dark:bg-base-200 dark:text-base-950 dark:hover:bg-base-100 dark:active:bg-base-300 lg:col-span-3 lg:col-start-4 lg:row-start-2 lg:m-4 lg:p-2"
      >
        <svg
          className="h-6 w-6 lg:h-8 lg:w-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
          />
        </svg>
        <span>Add Entry</span>
      </button>
      <DialogModal
        isOpen={modalIsOpen}
        handleClose={() => {
          setModalIsOpen(false);
        }}
      >
        <AddEntryForm
          handleClose={() => {
            setModalIsOpen(false);
          }}
          refetchDailyLog={() => void refetchDailyLog()}
        />
      </DialogModal>
    </>
  );
}

TodayPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout pageTitle="Dashboard">{page}</DashboardLayout>;
};
