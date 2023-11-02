import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  parse,
  startOfToday,
  getDay,
  isToday,
  isEqual,
} from "date-fns";
import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { type Entry } from "@prisma/client";

interface props {
  localDate: Date;
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  handleSelectToday: () => void;
  firstEntry: Entry | null;
}

function classNames(...classes: (false | string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

export default function Calendar({
  localDate,
  selectedDate,
  setSelectedDate,
  handleSelectToday,
  firstEntry,
}: props) {
  const today = startOfToday();
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  let firstEntryDate: Date | null;
  if (firstEntry) {
    firstEntryDate = new Date(firstEntry.createdAt);
    firstEntryDate.setHours(0, 0, 0, 0);
  }

  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  return (
    <Popover className="relative flex-1">
      <Popover.Button className="h-full w-full border border-base-950 bg-light-300 transition-colors hover:bg-light-400 active:bg-light-500 dark:border-base-50 dark:bg-base-900 dark:hover:bg-base-800 dark:active:bg-base-900">
        {selectedDate.toLocaleDateString("en-us", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute z-10 flex w-full flex-col items-center gap-2 rounded border border-light-600 bg-light-200 p-2 dark:border-base-700 dark:bg-base-800 lg:p-4">
          <Popover.Button
            onClick={handleSelectToday}
            className="w-full rounded bg-base-800 p-2 font-dm text-sm text-base-50 transition hover:bg-base-700 active:bg-base-900 dark:bg-base-200 dark:text-base-950 dark:hover:bg-base-100 dark:active:bg-base-300"
          >
            Go to today
          </Popover.Button>
          <figure className="flex w-full flex-col border-light-500 dark:border-base-50">
            <div className="mb-2 flex items-center">
              <h2 className="flex-auto">
                {format(firstDayCurrentMonth, "MMMM yyyy")}
              </h2>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={previousMonth}
                  disabled={
                    !firstEntry ||
                    (!!firstEntry &&
                      firstEntry.createdAt.getMonth() ===
                        +format(firstDayCurrentMonth, "M") - 1)
                  }
                  className="rounded-l border border-base-950 bg-light-300 transition-colors enabled:hover:bg-light-400 enabled:active:bg-light-500 disabled:border-opacity-30 disabled:text-base-950/30 dark:border-base-50 dark:bg-base-900 dark:enabled:hover:bg-base-800 dark:enabled:active:bg-base-900 dark:disabled:border-opacity-30 dark:disabled:text-base-50/30"
                >
                  <span className="sr-only">Previous month</span>
                  <svg
                    className="h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.42Z"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextMonth}
                  disabled={
                    localDate.getMonth() ===
                    +format(firstDayCurrentMonth, "M") - 1
                  }
                  type="button"
                  className="rounded-r border border-base-950 bg-light-300 transition-colors enabled:hover:bg-light-400 enabled:active:bg-light-500 disabled:border-opacity-30 disabled:text-base-950/30 dark:border-base-50 dark:bg-base-900 dark:enabled:hover:bg-base-800 dark:enabled:active:bg-base-900 dark:disabled:border-opacity-30 dark:disabled:text-base-50/30"
                >
                  <span className="sr-only">Next month</span>
                  <svg
                    className="h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 rounded bg-base-800 py-1 text-center text-sm leading-6 text-base-50 dark:bg-base-50 dark:text-base-950">
              <span>S</span>
              <span>M</span>
              <span>T</span>
              <span>W</span>
              <span>T</span>
              <span>F</span>
              <span>S</span>
            </div>
            <div className="mt-2 grid grid-cols-7 gap-1">
              {days.map((day, dayIdx) => (
                <Popover.Button
                  key={dayIdx}
                  type="button"
                  disabled={
                    !firstEntry ||
                    (!!firstEntryDate &&
                      firstEntryDate.getTime() > day.getTime()) ||
                    localDate.getTime() < day.getTime()
                  }
                  onClick={() => setSelectedDate(day)}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    isEqual(day, selectedDate) &&
                      isToday(day) &&
                      "border-primary-500 bg-primary-500 text-white",
                    isEqual(day, selectedDate) &&
                      !isToday(day) &&
                      "border-primary-500 bg-primary-500 text-white",
                    !isEqual(day, selectedDate) &&
                      "border-base-950 bg-light-300 transition-colors enabled:hover:bg-light-400 enabled:active:bg-light-500 disabled:border-opacity-30 disabled:text-base-950/30 dark:border-base-50 dark:bg-base-900 dark:enabled:hover:bg-base-800 dark:enabled:active:bg-base-900 dark:disabled:border-opacity-30 dark:disabled:text-base-50/30",
                    "group flex h-8 w-full flex-col items-center justify-center rounded border text-sm lg:h-12 lg:text-base"
                  )}
                >
                  <time dateTime={format(day, "yyyy-MM-dd")}>
                    {format(day, "d")}
                  </time>
                </Popover.Button>
              ))}
            </div>
          </figure>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
