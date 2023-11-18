import Link from "next/link";
import { type ReactElement } from "react";
import DashboardLayout from "~/components/DashboardLayout";
import { type emotion, emotions } from "~/lib/junto";
import { useState } from "react";
import Slideover from "~/components/Slideover";
import * as Slider from "@radix-ui/react-slider";

export default function EmotionsPage() {
  const [selectedIntensity, setSetSelectedIntensity] = useState(5);
  const [infoPaneIsOpen, setInfoPaneIsOpen] = useState(false);
  const [selectedEmotion, setSelectedEmotion] = useState<emotion | null>(null);
  const [notes, setNotes] = useState("");

  return (
    <>
      <section className="col-span-12 flex flex-col gap-2 p-2 lg:gap-4 lg:p-4">
        <h2 className="text-lg">How are you feeling?</h2>
        <ul className="grid grid-cols-12 gap-2">
          {emotions.map((emotion) => (
            <li
              className="col-span-12 sm:col-span-6 md:col-span-4"
              key={emotion.name}
            >
              <button
                onClick={() => {
                  setInfoPaneIsOpen(true);
                  setSelectedEmotion(emotion);
                }}
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
      <Slideover
        isOpen={infoPaneIsOpen}
        handleClose={() => {
          setInfoPaneIsOpen(false);
          setSelectedEmotion(null);
          setNotes("");
        }}
        emotion={selectedEmotion}
      >
        <section className="mb-4 flex flex-col rounded border border-light-500 p-4 dark:border-base-700">
          <p>Intensity</p>
          <div className="flex items-center gap-4 pb-4 pt-2">
            <Slider.Root
              className="relative flex h-5 w-4/5 touch-none select-none items-center"
              defaultValue={[selectedIntensity]}
              min={1}
              max={10}
              step={1}
              onValueChange={(value) =>
                setSetSelectedIntensity(
                  (value[0] !== undefined && value[0]) || 5
                )
              }
            >
              <Slider.Track className="relative h-[3px] grow rounded-full bg-light-600 dark:bg-base-700">
                <Slider.Range
                  className={`${
                    selectedEmotion?.core_emotion === "joy"
                      ? "bg-emerald-400"
                      : selectedEmotion?.core_emotion === "surprise"
                      ? "bg-sky-400"
                      : selectedEmotion?.core_emotion === "sadness"
                      ? "bg-indigo-400"
                      : selectedEmotion?.core_emotion === "anger"
                      ? "bg-red-400"
                      : selectedEmotion?.core_emotion === "fear"
                      ? "bg-orange-300"
                      : selectedEmotion?.core_emotion === "love"
                      ? "bg-yellow-200"
                      : ""
                  } absolute h-full rounded-full`}
                />
              </Slider.Track>
              <Slider.Thumb
                className="hover:bg-violet3 block h-5 w-5 rounded-[10px] bg-base-50 shadow-[0_2px_10px] focus:shadow-[0_0_0_5px] focus:outline-none"
                aria-label="Volume"
              />
            </Slider.Root>
            <span className="w-1/5 text-center text-4xl font-semibold">
              {selectedIntensity}
            </span>
          </div>
        </section>
        <section className="mb-4 flex flex-col rounded border border-light-500 p-4 dark:border-base-700">
          <p>Notes</p>
          <textarea
            name="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="mt-2 rounded border border-light-500 bg-light-100 p-4 focus:outline-light-900 dark:border-base-600 dark:bg-base-700 focus:dark:outline-base-200 md:pb-4"
          ></textarea>
        </section>
      </Slideover>
    </>
  );
}

EmotionsPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout pageTitle="Journal">{page}</DashboardLayout>;
};
