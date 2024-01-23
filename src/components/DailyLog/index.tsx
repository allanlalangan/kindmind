import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import DialogModal from "~/components/DialogModal";
import Entry from "~/components/Entry";
import AddEntryForm from "~/components/AddEntryForm";
import { api } from "~/utils/api";
import { isToday } from "date-fns";
import Link from "next/link";

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
            <p className="lg:text-lgz flex flex-1 items-center justify-center px-2 text-xl lg:px-4">
              {selectedDate.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            {isToday(selectedDate) && (
              <>
                <div className="flex w-full flex-col items-center rounded border border-light-500 dark:border-base-700">
                  <p className="flex-1 p-2 lg:p-4">
                    You haven&apos;t created any habits
                  </p>
                  <Link
                    href="/journal/habits"
                    title="Create Habits"
                    className="flex h-full w-full items-center justify-center gap-2 rounded-b-sm bg-light-500 p-2 text-sm uppercase text-base-950 underline-offset-2 transition hover:bg-light-400 hover:underline active:bg-light-600 dark:bg-base-700 dark:text-base-50 dark:hover:bg-base-600 dark:active:bg-base-800 lg:p-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 lg:h-8 lg:w-8"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M5.5 22q-1.45 0-2.475-1.025T2 18.5q0-1.45 1.025-2.475T5.5 15q.45 0 .875.112t.8.313L11 11.6V8.85q-1.1-.325-1.8-1.237T8.5 5.5q0-1.45 1.025-2.475T12 2q1.45 0 2.475 1.025T15.5 5.5q0 1.2-.7 2.113T13 8.85v2.75l3.85 3.825q.375-.2.788-.312T18.5 15q1.45 0 2.475 1.025T22 18.5q0 1.45-1.025 2.475T18.5 22q-1.45 0-2.475-1.025T15 18.5q0-.45.112-.875t.313-.8L12 13.4l-3.425 3.425q.2.375.313.8T9 18.5q0 1.45-1.025 2.475T5.5 22m13-2q.625 0 1.063-.437T20 18.5q0-.625-.437-1.062T18.5 17q-.625 0-1.062.438T17 18.5q0 .625.438 1.063T18.5 20M12 7q.625 0 1.063-.437T13.5 5.5q0-.625-.437-1.062T12 4q-.625 0-1.062.438T10.5 5.5q0 .625.438 1.063T12 7M5.5 20q.625 0 1.063-.437T7 18.5q0-.625-.437-1.062T5.5 17q-.625 0-1.062.438T4 18.5q0 .625.438 1.063T5.5 20"
                      />
                    </svg>
                    <span className="">Create Habits</span>
                  </Link>
                </div>
                <div className="flex w-full flex-col items-center rounded border border-light-500 dark:border-base-700">
                  <p className="flex-1 p-2 lg:p-4">
                    You haven&apos;t recorded any emotions for the day
                  </p>
                  <Link
                    href="/journal/emotions"
                    title="Record Emotions"
                    className="flex h-full w-full items-center justify-center gap-2 rounded-b-sm bg-light-500 p-2 text-sm uppercase text-base-950 underline-offset-2 transition hover:bg-light-400 hover:underline active:bg-light-600 dark:bg-base-700 dark:text-base-50 dark:hover:bg-base-600 dark:active:bg-base-800 lg:p-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 lg:h-8 lg:w-8"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M11 2a8.002 8.002 0 0 1 7.934 6.965l2.25 3.539c.148.233.118.58-.225.728L19 14.07V17a2 2 0 0 1-2 2h-1.999L15 22H6v-3.694c0-1.18-.436-2.297-1.245-3.305A8 8 0 0 1 11 2m-.53 5.763a1.75 1.75 0 0 0-2.475 2.474L11 13.243l3.005-3.006a1.75 1.75 0 1 0-2.475-2.474l-.53.53z"
                      />
                    </svg>
                    <span className="">Record Emotions</span>
                  </Link>
                </div>
                <button
                  title="Log Activity"
                  onClick={() => setModalIsOpen(true)}
                  className="flex h-full w-full items-center justify-center gap-2 rounded bg-light-500 p-2 text-sm uppercase text-base-950 transition hover:bg-light-400 active:bg-light-600 dark:bg-base-700 dark:text-base-50 dark:hover:bg-base-600 dark:active:bg-base-800 lg:p-2"
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
                  <span className="">Log Activity</span>
                </button>
              </>
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
