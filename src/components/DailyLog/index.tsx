import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import DialogModal from "~/components/DialogModal";
import Entry from "~/components/Entry";
import AddEntryForm from "~/components/AddEntryForm";
import { api } from "~/utils/api";
import { isToday } from "date-fns";

interface props {
  localDate: Date;
  selectedDate: Date;
}

export default function DailyLog({ localDate, selectedDate }: props) {
  localDate.setHours(0, 0, 0, 0);

  const user = useUser();
  const [modalIsOpen, setModalIsOpen] = useState(false);

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

  return (
    <>
      {isLoading ? (
        <span className="col-span-12 row-span-full row-start-2 flex flex-col items-center justify-center gap-2 border-b p-2 dark:border-base-800 lg:col-span-6 lg:border-b-0 lg:border-r lg:border-light-500">
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
          <p className="text-lg">Fetching entries...</p>
        </span>
      ) : (
        <section className="relative col-span-12 row-span-full row-start-2 flex flex-col gap-2 overflow-y-scroll border-light-500 p-2 dark:border-base-800 lg:col-span-6 lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between rounded border border-light-500 dark:border-base-700">
            <p className="flex flex-1 items-center justify-start px-2 text-xl lg:px-4 lg:text-lg xl:w-1/2">
              {selectedDate.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
            {isToday(selectedDate) ? (
              <button
                title="Add Entry"
                onClick={() => setModalIsOpen(true)}
                className="rounded-y flex h-full w-fit items-center justify-center gap-2 rounded-r bg-light-500 p-2 text-sm uppercase text-base-950 transition hover:bg-light-400 active:bg-light-600 dark:bg-base-700 dark:text-base-50 dark:hover:bg-base-600 dark:active:bg-base-800 lg:p-2 xl:w-1/2"
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
                <span className="">Add Entry</span>
              </button>
            ) : (
              <button
                title="View Summary"
                disabled={todayLog?.length === 0}
                className="rounded-y flex h-full w-fit items-center justify-center gap-2 rounded-r bg-light-500 p-2 text-sm uppercase text-base-950 transition hover:bg-light-400 active:bg-light-600 disabled:pointer-events-none disabled:text-light-900 dark:bg-base-700 dark:text-base-50 dark:hover:bg-base-600 dark:active:bg-base-800 dark:disabled:text-base-400 lg:p-2 xl:w-1/2"
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
                <span className="">View Summary</span>
              </button>
            )}
          </div>
          {todayLog?.length === 0 ? (
            <p className="m-auto flex items-center justify-center">
              No entries logged for this day.
            </p>
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
