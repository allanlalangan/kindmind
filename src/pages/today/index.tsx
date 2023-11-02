import { useState, type ReactElement } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import DashboardLayout from "~/components/DashboardLayout";
import DialogModal from "~/components/DialogModal";
import Entry from "~/components/Entry";
import AddEntryForm from "~/components/AddEntryForm";
import { api } from "~/utils/api";
import Calendar from "~/components/Calendar";

export default function TodayPage() {
  const localDate = new Date();
  localDate.setHours(0, 0, 0, 0);
  const [selectedDate, setSelectedDate] = useState(localDate);

  const user = useUser();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  let getFirstEntry;

  if (!user.isSignedIn) {
    getFirstEntry = api.entries.getGuestFirstEntry.useQuery(undefined, {
      refetchOnWindowFocus: false,
    });
  } else {
    getFirstEntry = api.entries.getFirstEntry.useQuery(undefined, {
      refetchOnWindowFocus: false,
    });
  }

  const { data: firstEntry } = getFirstEntry;

  let getTodayLog;

  if (!user.isSignedIn) {
    getTodayLog = api.entries.getGuestTodayLog.useQuery(
      { utc_string: selectedDate.toUTCString() },
      {
        onSuccess: (data) => {
          console.log("success", data);
        },
        refetchOnWindowFocus: false,
      }
    );
  } else {
    getTodayLog = api.entries.getTodayLog.useQuery(
      { utc_string: selectedDate.toUTCString() },
      {
        onSuccess: (data) => {
          console.log("success", data);
        },
        refetchOnWindowFocus: false,
      }
    );
  }

  const { isLoading, data: todayLog, refetch: refetchDailyLog } = getTodayLog;

  const handleSelectPreviousDay = () => {
    const previousDate = new Date(
      selectedDate.setDate(selectedDate.getDate() - 1)
    );
    setSelectedDate(previousDate);
  };

  const handleSelectNextDay = () => {
    if (localDate.getTime() === selectedDate.getTime()) return;
    const nextDate = new Date(selectedDate.setDate(selectedDate.getDate() + 1));
    setSelectedDate(nextDate);
  };

  const handleSelectToday = () => {
    setSelectedDate(localDate);
  };

  return (
    <>
      <div className="col-span-12 row-start-1 flex items-baseline border-b border-light-500 p-2 font-dm text-2xl dark:border-base-800 lg:row-span-1 lg:p-4">
        <Link className="underline-offset-2 hover:underline" href="/today">
          Daily Log
        </Link>
      </div>
      <div className="col-span-12 row-start-2 flex items-center justify-between border-light-500 px-2 font-dm dark:border-base-800 lg:col-span-6 lg:text-lg">
        <div className="flex w-full">
          <button
            className="rounded-l border-y border-l border-base-950 bg-light-300 transition-colors enabled:hover:bg-light-400 enabled:active:bg-light-500 disabled:border-opacity-30 disabled:text-base-950/30 dark:border-base-50 dark:bg-base-900 dark:enabled:hover:bg-base-800 dark:enabled:active:bg-base-900 dark:disabled:border-opacity-30 dark:disabled:text-base-50/30"
            onClick={handleSelectPreviousDay}
            disabled={!firstEntry || firstEntry.createdAt >= selectedDate}
          >
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.42Z"
              />
            </svg>
          </button>
          <Calendar
            localDate={localDate}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            handleSelectToday={handleSelectToday}
            firstEntry={firstEntry ?? null}
          />
          <button
            className="rounded-r border-y border-r border-base-950 bg-light-300 transition-colors enabled:hover:bg-light-400 enabled:active:bg-light-500 disabled:border-opacity-30 disabled:text-base-950/30 dark:border-base-50 dark:bg-base-900 dark:enabled:hover:bg-base-800 dark:enabled:active:bg-base-900 dark:disabled:border-opacity-30 dark:disabled:text-base-50/30"
            disabled={localDate.getTime() === selectedDate.getTime()}
            onClick={handleSelectNextDay}
          >
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <button
        onClick={() => setModalIsOpen(true)}
        className="col-span-12 row-start-3 mx-2 my-auto flex h-fit items-center justify-center gap-2 rounded bg-base-800 p-2 font-dm text-sm uppercase text-base-50 transition hover:bg-base-700 active:bg-base-900 dark:bg-base-200 dark:text-base-950 dark:hover:bg-base-100 dark:active:bg-base-300 lg:col-span-6 lg:mx-4 lg:p-2"
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
      {isLoading ? (
        <span className="col-span-12 row-span-full row-start-4 flex flex-col items-center justify-start gap-2 p-2 lg:col-span-6 lg:p-4">
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
        <section className="col-span-12 row-span-full row-start-4 flex flex-col gap-4 overflow-y-scroll px-2 pb-12 lg:col-span-6 lg:row-start-4 lg:px-4 lg:pb-4">
          {todayLog?.length === 0 ? (
            <p>No entries logged for this day.</p>
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
      )}

      <section className="fixed bottom-0 col-span-12 h-12 w-full border-light-500 bg-light-300 p-2 dark:border-base-800 dark:bg-base-900 lg:static lg:col-span-6 lg:col-start-7 lg:row-span-full lg:row-start-2 lg:h-auto lg:border-l lg:p-4">
        <p className="flex items-center font-dm lg:text-lg">Summary</p>
      </section>
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
