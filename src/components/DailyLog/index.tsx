import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import DialogModal from "~/components/DialogModal";
import Entry from "~/components/Entry";
import AddEntryForm from "~/components/AddEntryForm";
import { api } from "~/utils/api";

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
          <p className="flex w-full items-center justify-start bg-light-300 text-xl dark:bg-base-900">
            {selectedDate.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
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
