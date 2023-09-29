import { type NextPageWithLayout } from "~/pages/_app";
import DashboardLayout from "~/components/DashboardLayout";
import DialogModal from "~/components/DialogModal";
import Link from "next/link";
import { useState } from "react";

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

      <section className="col-span-12 row-span-full row-start-2 grid grid-cols-12 grid-rows-12 gap-8 overflow-y-scroll border-light-500 p-2 dark:border-base-800 lg:p-4">
        <div className="col-span-12 col-start-1 grid grid-cols-12 gap-2">
          <div className="col-span-2 flex flex-col items-baseline gap-2 text-xl lg:flex-row">
            <span className="font-dm">&gt;</span>
            <time className="text-base">8:00 AM</time>
            <span>💭</span>
          </div>
          <fieldset className="col-span-10 col-start-3 flex">
            <legend className="font-dm text-lg">How are you feeling?</legend>
            <div className="flex flex-1">
              <label className="flex w-full flex-col items-center" htmlFor="1">
                <input type="radio" name="feeling" id="1" />
                <span className="text-lg">{":("}</span>
              </label>
            </div>
            <div className="flex flex-1">
              <label className="flex w-full flex-col items-center" htmlFor="2">
                <input type="radio" name="feeling" id="2" />
                <span className="text-lg">:\</span>
              </label>
            </div>
            <div className="flex flex-1">
              <label className="flex w-full flex-col items-center" htmlFor="3">
                <input type="radio" name="feeling" id="3" />
                <span className="text-lg">{":|"}</span>
              </label>
            </div>
            <div className="flex flex-1">
              <label className="flex w-full flex-col items-center" htmlFor="4">
                <input type="radio" name="feeling" id="4" />
                <span className="text-lg">{":)"}</span>
              </label>
            </div>
            <div className="flex flex-1">
              <label className="flex w-full flex-col items-center" htmlFor="5">
                <input type="radio" name="feeling" id="5" />
                <span className="text-lg">{":D"}</span>
              </label>
            </div>
          </fieldset>
        </div>
        <div className="col-span-12 col-start-1 grid grid-cols-12 gap-2">
          <div className="col-span-2 flex flex-col items-baseline gap-2 text-xl lg:flex-row">
            <span className="font-dm">&gt;</span>
            <time className="text-base">10:00 AM</time>
            <span>📝</span>
          </div>
          <fieldset className="col-span-10 col-start-3 flex">
            <legend className="font-dm text-lg">
              What&apos;s on your mind?
            </legend>
            <textarea className="w-full rounded border border-light-500 bg-light-100 p-4 focus:outline-light-900 dark:border-base-600 dark:bg-base-700 focus:dark:outline-base-200 md:pb-4" />
          </fieldset>
        </div>
        <div className="col-span-12 col-start-1 grid grid-cols-12 gap-2">
          <div className="col-span-2 flex flex-col items-baseline gap-2 text-xl lg:flex-row">
            <span className="font-dm">&gt;</span>
            <time className="text-base">10:15 AM</time>
            <span>💧</span>
          </div>
          <div className="col-span-10 col-start-3 flex flex-col">
            <p className="font-dm text-lg">How much did you drink?</p>
            <div className="grid grid-cols-2 gap-1">
              <span className="col-span-1 row-span-2 flex grid-rows-2 items-center justify-center text-2xl">
                16oz
              </span>
              <button className="col-span-1 col-start-2 row-span-1 flex w-1/2 items-center justify-center rounded-lg border border-base-950 bg-light-300 p-1 transition-colors hover:bg-light-400 active:bg-light-500 dark:border-base-50 dark:bg-base-900 dark:hover:bg-base-800 dark:active:bg-base-900">
                + 4oz
              </button>
              <button className="col-span-1 col-start-2 row-span-1 flex w-1/2 items-center justify-center rounded-lg border border-base-950 bg-light-300 p-1 transition-colors hover:bg-light-400 active:bg-light-500 dark:border-base-50 dark:bg-base-900 dark:hover:bg-base-800 dark:active:bg-base-900">
                - 4oz
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={() => setModalIsOpen(true)}
          className="col-span-12 row-span-2 flex items-center justify-center gap-2 rounded bg-base-800 px-4 py-2 font-dm uppercase text-base-50 transition hover:bg-base-700 active:bg-base-900 dark:bg-base-200 dark:text-base-950 dark:hover:bg-base-100 dark:active:bg-base-300"
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
      </section>
      <DialogModal
        isOpen={modalIsOpen}
        handleClose={() => {
          setModalIsOpen(false);
        }}
      >
        <button className="col-span-6 col-start-1 rounded bg-base-800 px-4 py-2 text-sm text-base-50 transition hover:bg-base-700 active:bg-base-900 dark:bg-base-200 dark:text-base-950 dark:hover:bg-base-100 dark:active:bg-base-300">
          Record Mood 💭
        </button>
        <button className="col-span-6 col-start-1 rounded bg-base-800 px-4 py-2 text-sm text-base-50 transition hover:bg-base-700 active:bg-base-900 dark:bg-base-200 dark:text-base-950 dark:hover:bg-base-100 dark:active:bg-base-300">
          Write Journal Entry 📝
        </button>
        <button className="col-span-6 col-start-1 rounded bg-base-800 px-4 py-2 text-sm text-base-50 transition hover:bg-base-700 active:bg-base-900 dark:bg-base-200 dark:text-base-950 dark:hover:bg-base-100 dark:active:bg-base-300">
          Log Activity 🏃
        </button>

        <button className="col-span-6 col-start-7 row-start-1 rounded bg-teal-700 px-4 py-2 text-sm text-base-50 transition hover:bg-teal-600 active:bg-teal-800">
          Eat 🥗
        </button>
        <button className="col-span-6 col-start-7 row-start-2 rounded bg-teal-700 px-4 py-2 text-sm text-base-50 transition hover:bg-teal-600 active:bg-teal-800">
          Hydrate 💧
        </button>
        <button className="col-span-6 col-start-7 row-start-3 rounded bg-teal-700 px-4 py-2 text-sm text-base-50 transition hover:bg-teal-600 active:bg-teal-800">
          Supplement / Medication 💊
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
