export default function NewHabitForm() {
  return (
    <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
      <fieldset className="flex flex-col items-start justify-evenly gap-2 rounded border border-light-500 p-4 pt-2 dark:border-base-700">
        <legend className="-ml-2">New Habit</legend>
        <label className="" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="w-full rounded border-none bg-base-50 py-3 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
          placeholder="Give your habit a title"
        />
        <label className="" htmlFor="description">
          description
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="w-full rounded border-none bg-base-50 py-3 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
          placeholder="Enter a brief description"
        />
      </fieldset>
      <fieldset className="flex flex-col items-center justify-evenly gap-2 rounded border border-light-500 p-4 pt-2 dark:border-base-700 sm:flex-row">
        <legend className="-ml-2">Scheduled Daily Requirement</legend>

        <div className="flex w-full items-center lg:w-1/2">
          <label className="flex-1 text-sm" htmlFor="min">
            Daily Minimum
          </label>
          <input
            type="number"
            min={1}
            defaultValue={1}
            id="min"
            name="min"
            className="flex-1 rounded border-none bg-base-50 py-3 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
            placeholder="Daily minimum requirement"
          />
        </div>
        <div className="flex w-full items-center lg:w-1/2">
          <label className="flex-1 text-sm" htmlFor="min">
            Daily Maximum (optional)
          </label>
          <input
            type="number"
            id="min"
            name="min"
            className="flex-1 rounded border-none bg-base-50 py-3 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
            placeholder="(Optional)"
          />
        </div>
      </fieldset>
      <fieldset className="flex flex-col items-start justify-evenly gap-2 rounded border border-light-500 p-4 pt-2 dark:border-base-700 sm:flex-row">
        <legend className="-ml-2">Repeat</legend>
        <div className="flex items-center gap-1">
          <input
            id="sunday"
            name="sunday"
            type="checkbox"
            className="h-4 w-4"
          />
          <label htmlFor="sunday">Sun</label>
        </div>
        <div className="flex items-center gap-1">
          <input
            id="monday"
            name="monday"
            type="checkbox"
            className="h-4 w-4"
          />
          <label htmlFor="monday">Mon</label>
        </div>
        <div className="flex items-center gap-1">
          <input
            id="tuesday"
            name="tuesday"
            type="checkbox"
            className="h-4 w-4"
          />
          <label htmlFor="tuesday">Tue</label>
        </div>
        <div className="flex items-center gap-1">
          <input
            id="wednesday"
            name="wednesday"
            type="checkbox"
            className="h-4 w-4"
          />
          <label htmlFor="wednesday">Wed</label>
        </div>
        <div className="flex items-center gap-1">
          <input
            id="thursday"
            name="thursday"
            type="checkbox"
            className="h-4 w-4"
          />
          <label htmlFor="thursday">Thu</label>
        </div>
        <div className="flex items-center gap-1">
          <input
            id="friday"
            name="friday"
            type="checkbox"
            className="h-4 w-4"
          />
          <label htmlFor="friday">Fri</label>
        </div>
        <div className="flex items-center gap-1">
          <input
            id="saturday"
            name="saturday"
            type="checkbox"
            className="h-4 w-4"
          />
          <label htmlFor="saturday">Sat</label>
        </div>
      </fieldset>
      <button
        type="button"
        className="flex flex-col items-center justify-center gap-2 rounded bg-violet-600 px-2 pb-2.5 pt-2 text-base-50 transition-colors hover:bg-violet-500 active:bg-violet-700 lg:flex-row"
      >
        <span>Save Habit</span>
      </button>
    </form>
  );
}
