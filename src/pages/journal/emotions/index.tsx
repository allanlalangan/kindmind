import Link from "next/link";
import { type ReactElement } from "react";
import DashboardLayout from "~/components/DashboardLayout";
import { emotions } from "~/lib/junto";

export default function EmotionsPage() {
  return (
    <>
      <div className="col-span-12 row-start-1 flex items-baseline border-b border-light-500 p-2 font-dm text-2xl dark:border-base-800 lg:row-span-1 lg:p-4">
        <Link className="underline-offset-2 hover:underline" href="/journal">
          Emotion Journal
        </Link>
      </div>
      <section className="col-span-12 flex flex-col gap-2 lg:gap-4">
        <ul className="m-2 grid grid-cols-12 gap-2 lg:m-4">
          {emotions.map((emotion) => (
            <li
              className="col-span-12 sm:col-span-6 md:col-span-4"
              key={emotion.name}
            >
              <button
                className={`${
                  emotion.core_emotion === "joy"
                    ? "bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 "
                    : emotion.core_emotion === "surprise"
                    ? "bg-sky-400 hover:bg-sky-300 active:bg-sky-500 "
                    : emotion.core_emotion === "sadness"
                    ? "bg-indigo-400 hover:bg-indigo-300 active:bg-indigo-500 "
                    : emotion.core_emotion === "anger"
                    ? "bg-red-400 hover:bg-red-300 active:bg-red-500 "
                    : emotion.core_emotion === "fear"
                    ? "bg-orange-300 hover:bg-orange-200 active:bg-orange-400 "
                    : emotion.core_emotion === "love"
                    ? "bg-yellow-200 hover:bg-yellow-100 active:bg-yellow-300 "
                    : ""
                } w-full rounded px-4 pb-2.5 pt-2 text-lg capitalize text-base-950 transition`}
              >
                {emotion.name}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

EmotionsPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout pageTitle="Journal">{page}</DashboardLayout>;
};
