import { useUser } from "@clerk/nextjs";
import { add, addDays, eachDayOfInterval, format, isToday } from "date-fns";
import { useState, type ReactElement } from "react";
import Calendar from "~/components/Calendar";
import DailyLog from "~/components/DailyLog";
import DashboardLayout from "~/components/DashboardLayout";
import { api } from "~/utils/api";

function classNames(...classes: (false | string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function DashboardPage() {
  const user = useUser();
  const today = new Date();
  const localDate = new Date();
  localDate.setHours(0, 0, 0, 0);

  const startDate = today.getDate() - today.getDay(); // First day is the day of the month - the day of the week
  // const endDate = addDays(startDate, 6); // last day is the first day + 6

  const firstDayOfWeek = new Date(today.setDate(startDate));
  const lastDayOfWeek = addDays(firstDayOfWeek, 6);

  const daysOfCurrentWeek = eachDayOfInterval({
    start: firstDayOfWeek,
    end: lastDayOfWeek,
  });

  const [selectedDate, setSelectedDate] = useState(localDate);
  const [selectedWeek, setSelectedWeek] = useState(daysOfCurrentWeek);

  const previousWeek = () => {
    const firstDayPreviousWeek = add(selectedWeek[0] ?? localDate, {
      weeks: -1,
    });
    const lastDayPreviousWeek = add(selectedWeek[6] ?? localDate, {
      weeks: -1,
    });

    setSelectedWeek(
      eachDayOfInterval({
        start: firstDayPreviousWeek,
        end: lastDayPreviousWeek,
      })
    );
  };

  const nextWeek = () => {
    const firstDayNextWeek = add(selectedWeek[0] ?? localDate, { weeks: 1 });
    const lastDayNextWeek = add(selectedWeek[6] ?? localDate, { weeks: 1 });

    setSelectedWeek(
      eachDayOfInterval({
        start: firstDayNextWeek,
        end: lastDayNextWeek,
      })
    );
  };

  const goToCurrentWeek = () => {
    setSelectedWeek(daysOfCurrentWeek);
  };

  const handleSelectToday = () => {
    setSelectedDate(localDate);
    goToCurrentWeek();
  };

  let getFirstEntry;

  if (!user.isSignedIn) {
    getFirstEntry = api.entries.getGuestFirstEntry.useQuery(undefined, {
      refetchOnWindowFocus: false,
    });
  } else {
    getFirstEntry = api.entries.getFirstEntry.useQuery(undefined, {
      refetchOnWindowFocus: false,
    });
  }

  const { data: firstEntry } = getFirstEntry;
  console.log(selectedDate);

  return (
    <>
      <section className="col-span-12 flex flex-col border-b border-light-500 p-2 dark:border-base-700">
        <div className="flex justify-between gap-1">
          <span className="text-2xl">Dashboard</span>
          <div className="flex flex-1 items-center gap-2">
            <Calendar
              localDate={localDate}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              setSelectedWeek={setSelectedWeek}
              handleSelectToday={handleSelectToday}
              firstEntry={firstEntry ?? null}
            />
            <button onClick={goToCurrentWeek} type="button" className="h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h1.325q.825 0 1.413.588T7.325 6v12q0 .825-.587 1.413T5.325 20zm7.35 0q-.825 0-1.412-.587T9.35 18V6q0-.825.588-1.412T11.35 4h1.325q.825 0 1.413.588T14.675 6v12q0 .825-.587 1.413T12.675 20zm7.325 0q-.825 0-1.412-.587T16.675 18V6q0-.825.588-1.412T18.675 4H20q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z"
                />
              </svg>
              <span className="sr-only">Go to current week</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-9">
          <button
            onClick={previousWeek}
            type="button"
            className="col-span-1 flex h-full items-center justify-center"
          >
            <span className="sr-only">Previous week</span>
            <svg
              className="w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              ></path>
            </svg>
          </button>
          {selectedWeek.map((day, i) => {
            return (
              <div
                key={day.toString()}
                className="col-span-1 flex flex-col items-center justify-center"
              >
                <p className="truncate">{format(day, "E")}</p>
                <button
                  onClick={() => setSelectedDate(day)}
                  className={classNames(
                    isToday(day)
                      ? "border-2 border-amber-300 text-base-100"
                      : "",
                    selectedDate.toString() === day.toString()
                      ? "border-violet-500 bg-violet-500 text-white"
                      : "",
                    "flex h-8 w-8 flex-col items-center justify-center rounded-full"
                  )}
                  key={day.toString()}
                >
                  <p className="truncate">{format(day, "d")}</p>
                </button>
              </div>
            );
          })}
          <button
            onClick={nextWeek}
            type="button"
            className="col-span-1 flex h-full items-center justify-center"
          >
            <span className="sr-only">Next week</span>
            <svg
              className="w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m8.25 4.5l7.5 7.5l-7.5 7.5"
              ></path>
            </svg>
          </button>
        </div>
      </section>
      <DailyLog localDate={localDate} selectedDate={selectedDate} />
    </>
  );
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout pageTitle="Dashboard">{page}</DashboardLayout>;
};
