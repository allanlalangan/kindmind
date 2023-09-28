import Link from "next/link";
import DashboardLayout from "~/components/DashboardLayout";
import TipTapEditor from "~/components/TipTapEditor";
import { type NextPageWithLayout } from "~/pages/_app";

const CreateJournalEntryPage: NextPageWithLayout = () => {
  const today = new Date();

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
        <section className="col-span-12 col-start-1 grid grid-cols-12 grid-rows-3 gap-1">
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
        </section>
      </section>
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
