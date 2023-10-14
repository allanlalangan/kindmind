import { type ChangeEvent, type Dispatch, type SetStateAction } from "react";
import MoodIcon from "../MoodIcon";

interface props {
  selectedMood: number;
  setSelectedMood: Dispatch<SetStateAction<number>>;
}

const moods = [
  { value: -2, label: "Awful" },
  { value: -1, label: "Bad" },
  { value: 0, label: "Okay" },
  { value: 1, label: "Good" },
  { value: 2, label: "Awesome" },
];

export default function MoodSelector({ selectedMood, setSelectedMood }: props) {
  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedMood(+e.target.value);
  };
  return (
    <fieldset className="col-span-12 flex flex-col justify-center gap-2 rounded border border-light-500 p-2 dark:border-base-600 lg:p-4">
      <legend className="px-2 text-sm">Mood</legend>
      <div className="grid grid-cols-10 gap-2">
        {moods.map((mood) => (
          <div key={mood.value} className="col-span-2 flex flex-1 flex-col">
            <input
              className="peer sr-only"
              type="radio"
              name="mood"
              id={`${mood.value}`}
              value={mood.value}
              checked={selectedMood === mood.value}
              onChange={handleCheck}
            />
            <label
              className="flex w-full cursor-pointer flex-col items-center rounded p-2 transition hover:bg-light-400 peer-checked:bg-light-500 dark:hover:bg-base-700 dark:peer-checked:bg-base-600"
              htmlFor={`${mood.value}`}
            >
              <MoodIcon mood={mood.value} />
              <span className="text-sm">{mood.label}</span>
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
