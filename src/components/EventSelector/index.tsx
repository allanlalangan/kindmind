import { type Fieldset } from "~/lib/event_selectors";
import SelectorIcon from "../SelectorIcon";
import { type Dispatch, type SetStateAction } from "react";

interface props {
  fieldset: Fieldset;
  setState: Dispatch<SetStateAction<Fieldset>>;
}

export default function EventSelector({ fieldset, setState }: props) {
  console.log(fieldset);
  const handleCheck = (index: number) => {
    setState({
      ...fieldset,
      checkboxes: fieldset.checkboxes.map((checkbox, i) =>
        index === i ? { ...checkbox, checked: !checkbox.checked } : checkbox
      ),
    });
  };
  return (
    <fieldset className="col-span-12 grid grid-cols-12 justify-center gap-2 rounded border border-light-500 p-2 dark:border-base-600 lg:p-4">
      <legend className="px-2 text-sm capitalize">
        {fieldset.name.replace("_", " ")}
      </legend>
      {fieldset.checkboxes.map((checkbox, i, checkboxes) => (
        <div
          key={checkbox.id}
          className={`${
            (checkboxes.length === 2 && "col-span-6") ||
            (checkboxes.length % 4 && "col-span-4") ||
            (checkboxes.length % 3 && "col-span-3")
          } flex flex-col`}
        >
          <input
            className="peer sr-only"
            type="checkbox"
            name={fieldset.name}
            checked={checkbox.checked}
            id={checkbox.id}
            value={checkbox.value}
            onChange={() => handleCheck(i)}
          />
          <label
            className="flex w-full cursor-pointer flex-col items-center rounded p-2 transition hover:bg-light-400 peer-checked:bg-light-500 dark:hover:bg-base-700 dark:peer-checked:bg-base-600"
            htmlFor={checkbox.id}
          >
            <SelectorIcon option={checkbox.value} />
            <span className="text-sm capitalize">
              {checkbox.label.replace("_", " ")}
            </span>
          </label>
        </div>
      ))}
    </fieldset>
  );
}
