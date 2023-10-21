import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import MoodSelector from "~/components/MoodSelector";
import EventSelector from "~/components/EventSelector";
import {
  activity_fieldset,
  self_care_fieldset,
  work_fieldset,
  health_fieldset,
} from "~/lib/event_selectors";
import { api } from "~/utils/api";

interface AddEntryFormProps {
  handleClose: () => void;
  refetchDailyLog: () => void;
}

export default function AddEntryForm({
  handleClose,
  refetchDailyLog,
}: AddEntryFormProps) {
  const now = new Date();

  const user = useUser();

  const [mood, setMood] = useState<number>(0);
  const [notes, setNotes] = useState("");
  const [selfCareFieldset, setSelfCareFieldset] = useState(self_care_fieldset);
  const [activityFieldset, setActivityFieldset] = useState(activity_fieldset);
  const [workFieldset, setWorkFieldset] = useState(work_fieldset);
  const [healthFieldset, setHealthFieldset] = useState(health_fieldset);

  let logEntry;

  if (!user.isSignedIn) {
    logEntry = api.entries.createGuestEntry.useMutation({
      onSuccess: () => {
        console.log("success");
        void refetchDailyLog();
      },
    });
  } else {
    logEntry = api.entries.createEntry.useMutation({
      onSuccess: () => {
        console.log("success");
        void refetchDailyLog();
      },
    });
  }

  const { mutate } = logEntry;

  const handleSubmit = () => {
    handleClose();
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
      <div className="col-span-11 flex items-center gap-2">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4 2v6H2V2h2M2 22v-6h2v6H2m3-10c0 1.11-.89 2-2 2a2 2 0 1 1 2-2m19-6v12c0 1.11-.89 2-2 2H10a2 2 0 0 1-2-2v-4l-2-2l2-2V6a2 2 0 0 1 2-2h12c1.11 0 2 .89 2 2m-4 5h-3V8h-2v3h-3v2h3v3h2v-3h3v-2Z"
            />
          </svg>
        </span>
        <p>
          {`${now.toDateString()} `}
          {now.toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit",
          })}
        </p>
      </div>
      <button
        title="Close"
        className="col-span-1 flex items-center justify-center"
        onClick={handleClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
          />
        </svg>
      </button>
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
        <span>Add Entry</span>
      </button>
    </>
  );
}
