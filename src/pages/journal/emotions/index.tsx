import Link from "next/link";
import { Fragment, type ReactElement } from "react";
import DashboardLayout from "~/components/DashboardLayout";
import { type emotion, emotions } from "~/lib/junto";
import { useState } from "react";
import Slideover from "~/components/Slideover";
import * as Slider from "@radix-ui/react-slider";
import { api } from "~/utils/api";
import { useUser } from "@clerk/nextjs";
import { Combobox } from "@headlessui/react";

export default function EmotionsPage() {
  const [selectedIntensity, setSetSelectedIntensity] = useState(5);
  const [infoPaneIsOpen, setInfoPaneIsOpen] = useState(false);
  const [selectedEmotion, setSelectedEmotion] = useState<emotion | null>(null);
  const [notes, setNotes] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const filteredEmotions =
    searchQuery === ""
      ? emotions
      : emotions.filter(
          (emotion) =>
            emotion.name
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(searchQuery.toLowerCase().replace(/\s+/g, "")) ||
            emotion.core_emotion
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(searchQuery.toLowerCase().replace(/\s+/g, "")) ||
            emotion.definition
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(searchQuery.toLowerCase().replace(/\s+/g, ""))
        );

  const user = useUser();

  const handleCloseInfoPane = () => {
    setInfoPaneIsOpen(false);
    setSelectedEmotion(null);
    setNotes("");
  };

  let createEmotionEntry;

  if (!user.isSignedIn) {
    createEmotionEntry = api.emotions.createGuestEmotionEntry.useMutation({
      onSuccess: () => {
        console.log("success");
      },
    });
  } else {
    createEmotionEntry = api.emotions.createEmotionEntry.useMutation({
      onSuccess: () => {
        console.log("success");
      },
    });
  }

  const { mutate } = createEmotionEntry;
  const handleSubmit = () => {
    // console.log(selectedEmotion, selectedIntensity, notes);
    if (!!selectedEmotion) {
      mutate({
        emotion: selectedEmotion.name,
        core_emotion: selectedEmotion.core_emotion.toUpperCase(),
        intensity: selectedIntensity,
        notes,
      });
      handleCloseInfoPane();
    } else {
      return;
    }
  };

  return (
    <>
      <section className="col-span-12 flex flex-col gap-2 p-2 lg:gap-4 lg:p-4">
        <div className="">
          <h2 className="text-lg">How are you feeling?</h2>

          <Combobox value={searchQuery} onChange={setSearchQuery}>
            <div className="relative mt-1 flex lg:justify-end">
              <div className="relative w-full cursor-default overflow-hidden rounded bg-base-50 text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm lg:w-1/3">
                <Combobox.Input
                  className="w-full border-none bg-base-50 py-3 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                  placeholder="Search for an emotion"
                  displayValue={(emotion: string) => emotion}
                  onChange={(event) => setSearchQuery(event.target.value)}
                />
                <span className="absolute inset-y-0 right-0 flex items-center gap-2 pr-2 text-base-950">
                  <button
                    onClick={() => setSearchQuery("")}
                    className="rounded border border-base-950 px-2 text-sm text-base-950"
                  >
                    Clear
                  </button>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m21 21l-6-6m2-5a7 7 0 1 1-14 0a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Combobox>
        </div>
        {filteredEmotions.length === 0 ? (
          <p>No emotions found. Try searching for something else.</p>
        ) : (
          <ul className="grid grid-cols-12 gap-2">
            {(filteredEmotions || emotions).map((emotion) => (
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
        )}
      </section>

      <Slideover
        isOpen={infoPaneIsOpen}
        emotion={selectedEmotion}
        handleClose={handleCloseInfoPane}
        handleSubmit={handleSubmit}
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
