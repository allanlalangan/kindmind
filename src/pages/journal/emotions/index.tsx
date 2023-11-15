import Link from "next/link";
import { type ReactElement } from "react";
import DashboardLayout from "~/components/DashboardLayout";
import { emotions } from "~/lib/junto";

export default function EmotionsPage() {
  const joy = emotions.filter((emotion) => emotion.core_emotion === "joy");
  const surprise = emotions.filter(
    (emotion) => emotion.core_emotion === "surprise"
  );
  const sadness = emotions.filter(
    (emotion) => emotion.core_emotion === "sadness"
  );
  const anger = emotions.filter((emotion) => emotion.core_emotion === "anger");
  const fear = emotions.filter((emotion) => emotion.core_emotion === "fear");
  return (
    <>
      <div className="col-span-12 row-start-1 mb-2 flex items-baseline border-b border-light-500 p-2 font-dm text-2xl dark:border-base-800 lg:row-span-1 lg:mb-4 lg:p-4">
        <Link className="underline-offset-2 hover:underline" href="/journal">
          Emotion Journal
        </Link>
      </div>
      <section className="col-span-12 flex flex-col gap-2 lg:gap-4">
        <div className="border-b border-light-500 dark:border-base-800">
          <h2 className="px-2 text-center text-2xl lg:px-4">Joy</h2>
          <ul className="m-2 grid grid-cols-12 gap-2 lg:m-4">
            {joy.map((emotion) => (
              <li className="col-span-12 sm:col-span-4" key={emotion.name}>
                <button className="w-full rounded bg-emerald-400 px-4 pb-2.5 pt-2 text-lg capitalize text-base-950 transition hover:bg-emerald-300 active:bg-emerald-500">
                  {emotion.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-b border-light-500 dark:border-base-800">
          <h2 className="px-2 text-center text-2xl lg:px-4">Surprise</h2>
          <ul className="m-2 grid grid-cols-12 gap-2 lg:m-4">
            {surprise.map((emotion) => (
              <li className="col-span-12 sm:col-span-4" key={emotion.name}>
                <button className="w-full rounded bg-sky-400 px-4 pb-2.5 pt-2 text-lg capitalize text-base-950 transition hover:bg-sky-300 active:bg-sky-500">
                  {emotion.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-b border-light-500 dark:border-base-800">
          <h2 className="px-2 text-center text-2xl lg:px-4">Sadness</h2>
          <ul className="m-2 grid grid-cols-12 gap-2 lg:m-4">
            {sadness.map((emotion) => (
              <li className="col-span-12 sm:col-span-4" key={emotion.name}>
                <button className="w-full rounded bg-indigo-400 px-4 pb-2.5 pt-2 text-lg capitalize text-base-950 transition hover:bg-indigo-300 active:bg-indigo-500">
                  {emotion.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-b border-light-500 dark:border-base-800">
          <h2 className="px-2 text-center text-2xl lg:px-4">Anger</h2>
          <ul className="m-2 grid grid-cols-12 gap-2 lg:m-4">
            {anger.map((emotion) => (
              <li className="col-span-12 sm:col-span-4" key={emotion.name}>
                <button className="w-full rounded bg-pink-400 px-4 pb-2.5 pt-2 text-lg capitalize text-base-950 transition hover:bg-pink-300 active:bg-pink-500">
                  {emotion.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-b border-light-500 dark:border-base-800">
          <h2 className="px-2 text-center text-2xl lg:px-4">Fear</h2>
          <ul className="m-2 grid grid-cols-12 gap-2 lg:m-4">
            {fear.map((emotion) => (
              <li className="col-span-12 sm:col-span-4" key={emotion.name}>
                <button className="w-full rounded bg-orange-300 px-4 pb-2.5 pt-2 text-lg capitalize text-base-950 transition hover:bg-orange-200 active:bg-orange-400">
                  {emotion.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

EmotionsPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout pageTitle="Journal">{page}</DashboardLayout>;
};
