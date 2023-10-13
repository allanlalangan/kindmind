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

export default function DashboardPage() {
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
      <section className="col-span-12 flex items-center justify-center">
        {todayLog?.length === 0 ? (
          <p>You haven&apos;t logged an entry today.</p>
        ) : (
          ""
        )}
      </section>
      <button
        onClick={() => setModalIsOpen(true)}
        className="col-span-12 m-2 flex items-center justify-center gap-2 rounded bg-base-800 p-4 font-dm uppercase text-base-50 transition hover:bg-base-700 active:bg-base-900 dark:bg-base-200 dark:text-base-950 dark:hover:bg-base-100 dark:active:bg-base-300 lg:m-4"
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
