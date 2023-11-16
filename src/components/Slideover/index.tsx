import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { type emotion } from "~/lib/junto";

interface props {
  isOpen: boolean;
  handleClose: () => void;
  emotion: emotion | null;
}

export default function Slideover({ isOpen, handleClose, emotion }: props) {
  const now = new Date();

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={handleClose}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
                          />
                        </svg>
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-light-300 p-2 shadow-xl dark:bg-base-900 lg:p-4">
                    <span className="mb-2 flex gap-2">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="m14.55 16.55l1.4-1.425l-2.95-2.95V8h-2v5l3.55 3.55ZM11 6h2V4h-2v2Zm7 7h2v-2h-2v2Zm-7 7h2v-2h-2v2Zm-7-7h2v-2H4v2Zm8 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
                        />
                      </svg>
                      <time dateTime={now.toLocaleString()} className="text-lg">
                        {now.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </time>
                    </span>
                    {!!emotion && (
                      <>
                        <Dialog.Title className="mb-4 text-2xl font-semibold capitalize leading-6">
                          {emotion?.name}
                        </Dialog.Title>
                        <p
                          className={`${
                            emotion?.core_emotion === "joy"
                              ? "bg-emerald-400"
                              : emotion?.core_emotion === "surprise"
                              ? "bg-sky-400"
                              : emotion?.core_emotion === "sadness"
                              ? "bg-indigo-400"
                              : emotion?.core_emotion === "anger"
                              ? "bg-red-400"
                              : emotion?.core_emotion === "fear"
                              ? "bg-orange-300"
                              : emotion?.core_emotion === "love"
                              ? "bg-yellow-200"
                              : ""
                          } relative mb-2 rounded p-2 font-semibold tracking-wide text-base-950`}
                        >
                          Core emotion:{" "}
                          <span className="capitalize">
                            {emotion?.core_emotion}
                          </span>
                        </p>
                        <p className="relative mb-4 p-2">
                          {emotion?.definition}
                        </p>
                        <button
                          disabled={!isOpen}
                          className="rounded bg-base-800 p-2 text-base-50 transition hover:bg-base-700 active:bg-base-900 dark:bg-base-200 dark:text-base-950 dark:hover:bg-base-100 dark:active:bg-base-300"
                        >
                          Log Emotion
                        </button>
                      </>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
