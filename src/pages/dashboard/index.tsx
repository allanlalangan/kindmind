import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import DashboardLayout from "~/components/DashboardLayout";
import { useState, type ReactElement } from "react";
import MoodSelector from "~/components/MoodSelector";
import EventSelector from "~/components/EventSelector";
import DialogModal from "~/components/DialogModal";
import {
  activity_fieldset,
  self_care_fieldset,
  work_fieldset,
  health_fieldset,
} from "~/lib/event_selectors";
import { api } from "~/utils/api";
import MoodIcon from "~/components/MoodIcon";
import SelectorIcon from "~/components/SelectorIcon";

const getMoodIconLabel = (mood: number) => {
  return mood === -2
    ? "awful"
    : mood === -1
    ? "bad"
    : mood === 0
    ? "okay"
    : mood === 1
    ? "good"
    : "awesome";
};

export default function DashboardPage() {
  const today = new Date();
  const user = useUser();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [mood, setMood] = useState<number>(0);
  const [notes, setNotes] = useState("");
  const [selfCareFieldset, setSelfCareFieldset] = useState(self_care_fieldset);
  const [activityFieldset, setActivityFieldset] = useState(activity_fieldset);
  const [workFieldset, setWorkFieldset] = useState(work_fieldset);
  const [healthFieldset, setHealthFieldset] = useState(health_fieldset);

  let getTodayLog;
  if (!user.isSignedIn) {
    getTodayLog = api.entries.getGuestTodayLog.useQuery(undefined, {
      onSuccess: (data) => {
        console.log("success", data);
      },
      refetchOnWindowFocus: false,
    });
  } else {
    getTodayLog = api.entries.getTodayLog.useQuery(undefined, {
      onSuccess: (data) => {
        console.log("success", data);
      },
      refetchOnWindowFocus: false,
    });
  }

  const { data: todayLog } = getTodayLog;

  let logEntry;

  if (!user.isSignedIn) {
    logEntry = api.entries.createGuestEntry.useMutation({
      onSuccess: () => {
        console.log("success");
      },
    });
  } else {
    logEntry = api.entries.createEntry.useMutation({
      onSuccess: () => {
        console.log("success");
      },
    });
  }

  const { mutate } = logEntry;

  const handleSubmit = () => {
    setModalIsOpen(false);
    mutate({
      mood,
      notes,
      events: [
        ...selfCareFieldset.checkboxes
          .filter((checkbox) => checkbox.checked)
          .map((checkbox) => ({ type: "SELF_CARE", name: checkbox.value })),
        ...activityFieldset.checkboxes
          .filter((checkbox) => checkbox.checked)
          .map((checkbox) => ({ type: "ACTIVITY", name: checkbox.value })),
        ...workFieldset.checkboxes
          .filter((checkbox) => checkbox.checked)
          .map((checkbox) => ({ type: "WORK", name: checkbox.value })),
        ...healthFieldset.checkboxes
          .filter((checkbox) => checkbox.checked)
          .map((checkbox) => ({ type: "HEALTH", name: checkbox.value })),
      ],
    });

    setMood(0);
    setNotes("");
    setSelfCareFieldset(self_care_fieldset);
    setActivityFieldset(activity_fieldset);
    setWorkFieldset(work_fieldset);
    setHealthFieldset(health_fieldset);
  };

  return (
    <>
      <div className="col-span-12 row-start-1 flex items-baseline border-b border-light-500 p-2 font-dm text-2xl dark:border-base-800 lg:row-span-1 lg:p-4">
        <Link className="underline-offset-2 hover:underline" href="/dashboard">
          Dashboard
        </Link>
      </div>
      <p className="col-span-12 row-start-2 flex items-center border-light-500 p-2 font-dm text-lg dark:border-base-800 lg:col-span-3 lg:p-4 lg:text-2xl">
        Daily Log
      </p>
      <section className="col-span-12 row-span-full row-start-3 flex flex-col gap-4 overflow-y-scroll px-2 lg:col-span-6 lg:row-start-3 lg:px-4">
        {todayLog?.length === 0 ? (
          <p>You haven&apos;t logged an entry today.</p>
        ) : (
          todayLog?.map((entry) => (
            <div
              className="grid grid-cols-12 gap-4 rounded border border-light-600 bg-light-200 p-4 dark:border-base-700 dark:bg-base-800"
              key={entry.id}
            >
              <div className="col-span-12 row-span-1 flex items-center justify-between gap-2 lg:justify-start">
                <p className="font-dm text-2xl lg:text-3xl">
                  {entry.createdAt.toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </p>
                <div className="flex items-center gap-2">
                  <MoodIcon size={10} mood={entry.mood} />
                  <span>Feeling {getMoodIconLabel(entry.mood)}</span>
                </div>
              </div>
              {entry.events.length > 0 && (
                <section className="col-span-12 row-span-4 row-start-2 flex flex-col gap-2">
                  {entry.events.filter((event) => event.type === "SELF_CARE")
                    .length > 0 && (
                    <fieldset className="rounded border border-light-700 p-2 dark:border-base-500">
                      <legend className="w-fit px-2 font-dm">Self Care</legend>
                      <ul className="grid grid-cols-12 gap-2">
                        {entry.events
                          .filter((event) => event.type === "SELF_CARE")
                          .map((event) => (
                            <li
                              key={event.id}
                              className="col-span-3 flex flex-col items-center justify-center"
                            >
                              <SelectorIcon option={event.name} />
                              <span className="text-sm">{event.name}</span>
                            </li>
                          ))}
                      </ul>
                    </fieldset>
                  )}
                  {entry.events.filter((event) => event.type === "ACTIVITY")
                    .length > 0 && (
                    <fieldset className="rounded border border-light-700 p-2 dark:border-base-500">
                      <legend className="w-fit px-2 font-dm">Activities</legend>
                      <ul className="grid grid-cols-12 gap-2">
                        {entry.events
                          .filter((event) => event.type === "ACTIVITY")
                          .map((event) => (
                            <li
                              key={event.id}
                              className="col-span-3 flex flex-col items-center justify-center"
                            >
                              <SelectorIcon option={event.name} />
                              <span className="text-sm">{event.name}</span>
                            </li>
                          ))}
                      </ul>
                    </fieldset>
                  )}
                  {entry.events.filter((event) => event.type === "WORK")
                    .length > 0 && (
                    <fieldset className="rounded border border-light-700 p-2 dark:border-base-500">
                      <legend className="w-fit px-2 font-dm">Work</legend>
                      <ul className="grid grid-cols-12 gap-2">
                        {entry.events
                          .filter((event) => event.type === "WORK")
                          .map((event) => (
                            <li
                              key={event.id}
                              className="col-span-3 flex flex-col items-center justify-center"
                            >
                              <SelectorIcon option={event.name} />
                              <span className="text-sm">{event.name}</span>
                            </li>
                          ))}
                      </ul>
                    </fieldset>
                  )}
                  {entry.events.filter((event) => event.type === "HEALTH")
                    .length > 0 && (
                    <fieldset className="rounded border border-light-700 p-2 dark:border-base-500">
                      <legend className="w-fit px-2 font-dm">Health</legend>
                      <ul className="grid grid-cols-12 gap-2">
                        {entry.events
                          .filter((event) => event.type === "HEALTH")
                          .map((event) => (
                            <li
                              key={event.id}
                              className="col-span-3 flex flex-col items-center justify-center"
                            >
                              <SelectorIcon option={event.name} />
                              <span className="text-sm">{event.name}</span>
                            </li>
                          ))}
                      </ul>
                    </fieldset>
                  )}
                </section>
              )}
              {entry.notes !== "" && (
                <article className="col-span-12 flex flex-col">
                  <span className="flex items-center gap-1 pb-2">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M7 14q.425 0 .713-.288T8 13q0-.425-.288-.713T7 12q-.425 0-.713.288T6 13q0 .425.288.713T7 14Zm0-3q.425 0 .713-.288T8 10q0-.425-.288-.713T7 9q-.425 0-.713.288T6 10q0 .425.288.713T7 11Zm0-3q.425 0 .713-.288T8 7q0-.425-.288-.713T7 6q-.425 0-.713.288T6 7q0 .425.288.713T7 8Zm3 6h5v-2h-5v2Zm0-3h8V9h-8v2Zm0-3h8V6h-8v2ZM2 22V4q0-.825.588-1.413T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.588 1.413T20 18H6l-4 4Z"
                      />
                    </svg>
                    <span className="font-dm text-lg">Notes</span>
                  </span>
                  <p className="rounded-b rounded-tr p-2 dark:bg-base-600">
                    {entry.notes}
                  </p>
                </article>
              )}
            </div>
          ))
        )}
      </section>
      <p className="col-span-12 border-light-500 p-2 font-dm text-lg dark:border-base-800 lg:col-span-6 lg:col-start-7 lg:row-span-1 lg:row-start-2 lg:border-l lg:p-4 lg:text-2xl">
        {today.toLocaleDateString("en-us", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <section className="col-span-12 border-light-500 p-2 dark:border-base-800 lg:col-span-6 lg:col-start-7 lg:row-span-full lg:row-start-3 lg:border-l lg:p-4">
        <span>Summary</span>
      </section>
      <button
        onClick={() => setModalIsOpen(true)}
        className="col-span-12 m-2 flex items-center justify-center gap-2 rounded bg-base-800 p-2 font-dm uppercase text-base-50 transition hover:bg-base-700 active:bg-base-900 dark:bg-base-200 dark:text-base-950 dark:hover:bg-base-100 dark:active:bg-base-300 lg:col-span-3 lg:col-start-4 lg:row-start-2 lg:m-4 lg:p-2"
      >
        <svg
          className="h-8 w-8"
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
        <MoodSelector selectedMood={mood} setSelectedMood={setMood} />
        <EventSelector
          fieldset={selfCareFieldset}
          setState={setSelfCareFieldset}
        />
        <EventSelector
          fieldset={activityFieldset}
          setState={setActivityFieldset}
        />
        <EventSelector fieldset={workFieldset} setState={setWorkFieldset} />
        <EventSelector fieldset={healthFieldset} setState={setHealthFieldset} />
        <fieldset className="col-span-12 flex flex-col justify-center gap-2 rounded border border-light-500 p-2 dark:border-base-600 lg:p-4">
          <legend className="px-2 text-sm">Notes</legend>
          <textarea
            name="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="rounded border border-light-500 bg-light-100 p-4 focus:outline-light-900 dark:border-base-600 dark:bg-base-700 focus:dark:outline-base-200 md:pb-4"
          ></textarea>
        </fieldset>
        <button
          onClick={handleSubmit}
          className="col-span-12 flex items-center justify-center gap-2 rounded bg-base-800 p-2 font-dm uppercase text-base-50 transition hover:bg-base-700 active:bg-base-900 dark:bg-base-200 dark:text-base-950 dark:hover:bg-base-100 dark:active:bg-base-300"
        >
          <svg
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
            />
          </svg>
          <span>Add Block</span>
        </button>
      </DialogModal>
    </>
  );
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout pageTitle="Dashboard">{page}</DashboardLayout>;
};
