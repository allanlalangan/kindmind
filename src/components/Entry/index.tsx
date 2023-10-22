import { type Event, type Entry } from "@prisma/client";
import MoodIcon, { getMoodIconLabel } from "../MoodIcon";
import SelectorIcon from "../SelectorIcon";

interface props {
  entry: Entry;
  events: Event[];
}

export default function Entry({ entry, events }: props) {
  console.log(entry);
  return (
    <div
      className="flex flex-col gap-3 rounded border border-light-600 bg-light-200 p-4 dark:border-base-700 dark:bg-base-800"
      key={entry.id}
    >
      <div className="col-span-12 row-span-1 flex items-center justify-between gap-2">
        <p className="flex items-center font-dm text-2xl lg:text-3xl">
          {entry.createdAt.toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit",
          })}
        </p>
        <button className="col-span-12 flex h-fit items-center justify-center gap-2 rounded border border-red-400 p-1 font-dm uppercase text-red-400 underline-offset-2 transition hover:border-red-500 hover:text-red-500 hover:underline active:border-red-700 active:text-red-700">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m9.4 16.5l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L16 9.9l-1.4-1.4l-2.6 2.6l-2.6-2.6L8 9.9l2.6 2.6L8 15.1l1.4 1.4ZM7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7Z"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-center gap-2">
        <MoodIcon size={10} mood={entry.mood} />
        <span>Feeling {getMoodIconLabel(entry.mood)}</span>
      </div>
      {events.length > 0 && (
        <section className="col-span-12 row-start-2 flex flex-col gap-2">
          {events.filter((event) => event.type === "SELF_CARE").length > 0 && (
            <fieldset className="rounded border border-light-700 p-2 dark:border-base-500">
              <legend className="w-fit px-2 font-dm">Self Care</legend>
              <ul className="grid grid-cols-12 gap-2">
                {events
                  .filter((event) => event.type === "SELF_CARE")
                  .map((event) => (
                    <li
                      key={event.id}
                      className="col-span-3 flex flex-col items-center justify-center"
                    >
                      <SelectorIcon option={event.name} />
                      <span className="text-sm">{event.name}</span>
                    </li>
                  ))}
              </ul>
            </fieldset>
          )}
          {events.filter((event) => event.type === "ACTIVITY").length > 0 && (
            <fieldset className="rounded border border-light-700 p-2 dark:border-base-500">
              <legend className="w-fit px-2 font-dm">Activities</legend>
              <ul className="grid grid-cols-12 gap-2">
                {events
                  .filter((event) => event.type === "ACTIVITY")
                  .map((event) => (
                    <li
                      key={event.id}
                      className="col-span-3 flex flex-col items-center justify-center"
                    >
                      <SelectorIcon option={event.name} />
                      <span className="text-sm">{event.name}</span>
                    </li>
                  ))}
              </ul>
            </fieldset>
          )}
          {events.filter((event) => event.type === "WORK").length > 0 && (
            <fieldset className="rounded border border-light-700 p-2 dark:border-base-500">
              <legend className="w-fit px-2 font-dm">Work</legend>
              <ul className="grid grid-cols-12 gap-2">
                {events
                  .filter((event) => event.type === "WORK")
                  .map((event) => (
                    <li
                      key={event.id}
                      className="col-span-3 flex flex-col items-center justify-center"
                    >
                      <SelectorIcon option={event.name} />
                      <span className="text-sm">{event.name}</span>
                    </li>
                  ))}
              </ul>
            </fieldset>
          )}
          {events.filter((event) => event.type === "HEALTH").length > 0 && (
            <fieldset className="rounded border border-light-700 p-2 dark:border-base-500">
              <legend className="w-fit px-2 font-dm">Health</legend>
              <ul className="grid grid-cols-12 gap-2">
                {events
                  .filter((event) => event.type === "HEALTH")
                  .map((event) => (
                    <li
                      key={event.id}
                      className="col-span-3 flex flex-col items-center justify-center"
                    >
                      <SelectorIcon option={event.name} />
                      <span className="text-sm">{event.name}</span>
                    </li>
                  ))}
              </ul>
            </fieldset>
          )}
        </section>
      )}
      {entry.notes !== "" && (
        <article className="col-span-12 flex flex-col">
          <span className="flex items-center gap-1 pb-2">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7 14q.425 0 .713-.288T8 13q0-.425-.288-.713T7 12q-.425 0-.713.288T6 13q0 .425.288.713T7 14Zm0-3q.425 0 .713-.288T8 10q0-.425-.288-.713T7 9q-.425 0-.713.288T6 10q0 .425.288.713T7 11Zm0-3q.425 0 .713-.288T8 7q0-.425-.288-.713T7 6q-.425 0-.713.288T6 7q0 .425.288.713T7 8Zm3 6h5v-2h-5v2Zm0-3h8V9h-8v2Zm0-3h8V6h-8v2ZM2 22V4q0-.825.588-1.413T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.588 1.413T20 18H6l-4 4Z"
              />
            </svg>
            <span className="font-dm text-lg">Notes</span>
          </span>
          <p className="rounded-b rounded-tr p-2 dark:bg-base-600">
            {entry.notes}
          </p>
        </article>
      )}
    </div>
  );
}
