export default function MoodSelector() {
  return (
    <fieldset className="col-span-12 flex flex-col justify-center gap-2 rounded border border-light-500 p-2 dark:border-base-600 lg:p-4">
      <legend className="px-2 text-sm">Mood</legend>
      <div className="grid grid-cols-10 gap-2">
        <div className="col-span-2 flex flex-1 flex-col">
          <input className="peer sr-only" type="radio" name="mood" id="1" />
          <label
            className="flex w-full cursor-pointer flex-col items-center rounded p-2 transition hover:bg-light-400 peer-checked:bg-light-500 dark:hover:bg-base-700 dark:peer-checked:bg-base-600"
            htmlFor="1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-orange-500"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 2c5.523 0 10 4.477 10 10a9.959 9.959 0 0 1-1.065 4.496a1.975 1.975 0 0 0-.398-.775l-.123-.135L19 14.172l-1.414 1.414l-.117.127a2 2 0 0 0 1.679 3.282A9.974 9.974 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2Zm0 13c-1.38 0-2.63.56-3.534 1.463l-.166.174l.945.86C10.035 17.182 10.982 17 12 17c.905 0 1.754.144 2.486.396l.269.1l.945-.86A4.987 4.987 0 0 0 12 15Zm-3.5-5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Zm7 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Z"
              />
            </svg>
            <span className="text-sm">Awful</span>
          </label>
        </div>
        <div className="col-span-2 flex flex-1 flex-col">
          <input className="peer sr-only" type="radio" name="mood" id="2" />
          <label
            className="flex w-full cursor-pointer flex-col items-center rounded p-2 transition hover:bg-light-400 peer-checked:bg-light-500 dark:hover:bg-base-700 dark:peer-checked:bg-base-600"
            htmlFor="2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-amber-500"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Zm-5-5h2a3 3 0 1 1 6 0h2a5 5 0 0 0-10 0Zm1-6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm8 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"
              />
            </svg>
            <span className="text-sm">Bad</span>
          </label>
        </div>
        <div className="col-span-2 flex flex-1 flex-col">
          <input className="peer sr-only" type="radio" name="mood" id="3" />
          <label
            className="flex w-full cursor-pointer flex-col items-center rounded p-2 transition hover:bg-light-400 peer-checked:bg-light-500 dark:hover:bg-base-700 dark:peer-checked:bg-base-600"
            htmlFor="3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-yellow-400 dark:text-yellow-200"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Zm-4-8v2h8v-2H8Zm0-3a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm8 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"
              />
            </svg>
            <span className="text-sm">Meh</span>
          </label>
        </div>
        <div className="col-span-2 flex flex-1 flex-col">
          <input className="peer sr-only" type="radio" name="mood" id="4" />
          <label
            className="flex w-full cursor-pointer flex-col items-center rounded p-2 transition hover:bg-light-400 peer-checked:bg-light-500 dark:hover:bg-base-700 dark:peer-checked:bg-base-600"
            htmlFor="4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-green-500 dark:text-green-300"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Zm-5-9a5 5 0 0 0 10 0h-2a3 3 0 1 1-6 0H7Zm1-2a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm8 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"
              />
            </svg>
            <span className="text-sm">Good</span>
          </label>
        </div>
        <div className="col-span-2 flex flex-1 flex-col">
          <input className="peer sr-only" type="radio" name="mood" id="5" />
          <label
            className="flex w-full cursor-pointer flex-col items-center rounded p-2 transition hover:bg-light-400 peer-checked:bg-light-500 dark:hover:bg-base-700 dark:peer-checked:bg-base-600"
            htmlFor="5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-emerald-600 dark:text-emerald-500"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2Zm0 9c-2 0-3.667.333-5 1a5 5 0 0 0 10 0c-1.333-.667-3-1-5-1ZM8.5 7c-1.152 0-2.122.78-2.412 1.84L6.05 9h4.9A2.5 2.5 0 0 0 8.5 7Zm7 0c-1.152 0-2.122.78-2.412 1.84L13.05 9h4.9a2.5 2.5 0 0 0-2.45-2Z"
              />
            </svg>
            <span className="text-sm">Great</span>
          </label>
        </div>
      </div>
    </fieldset>
  );
}
