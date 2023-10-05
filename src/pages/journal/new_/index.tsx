import { type NextPageWithLayout } from "~/pages/_app";
import DashboardLayout from "~/components/DashboardLayout";
import DialogModal from "~/components/DialogModal";
import Link from "next/link";
import { useState } from "react";
import MoodSelector from "~/components/MoodSelector";
import SelfCareSelector from "~/components/SelfCareSelector";
import WorkSelector from "~/components/WorkSelector";
import ActivitySelector from "~/components/ActivitySelector";
import HealthSelector from "~/components/HealthSelector";

const CreateJournalEntryPage: NextPageWithLayout = () => {
  const today = new Date();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <div className="col-span-12 flex items-baseline gap-2 border-b border-light-500 p-2 font-dm text-2xl dark:border-base-800 lg:row-span-1 lg:p-4">
        <Link className="underline-offset-2 hover:underline" href="/journal">
          Journal
        </Link>
        <span className="text-xl">&gt;</span>
        <time className="text-base" dateTime={today.toDateString()}>
          {today.toDateString()}
        </time>
      </div>
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
        <MoodSelector />
        <SelfCareSelector />
        <ActivitySelector />
        <WorkSelector />
        <HealthSelector />
        <fieldset className="col-span-12 flex flex-col justify-center gap-2 rounded border border-light-500 p-2 dark:border-base-600 lg:p-4">
          <legend className="px-2 text-sm">Notes</legend>
          <textarea
            name="notes"
            className="rounded border border-light-500 bg-light-100 p-4 focus:outline-light-900 dark:border-base-600 dark:bg-base-700 focus:dark:outline-base-200 md:pb-4"
          ></textarea>
        </fieldset>
        <button
          onClick={() => setModalIsOpen(true)}
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
};

CreateJournalEntryPage.getLayout = function getLayout(page) {
  return (
    <DashboardLayout pageTitle="Create New Journal Entry">
      {page}
    </DashboardLayout>
  );
};

export default CreateJournalEntryPage;
