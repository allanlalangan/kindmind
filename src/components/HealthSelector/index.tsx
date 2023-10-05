export default function HealthSelector() {
  return (
    <fieldset className="col-span-12 grid grid-cols-12 justify-center gap-2 rounded border border-light-500 p-2 dark:border-base-600 lg:p-4">
      <legend className="px-2 text-sm">Health</legend>
      <div className="col-span-4 flex flex-col">
        <input
          className="peer sr-only"
          type="checkbox"
          name="health"
          id="food"
        />
        <label
          className="flex w-full cursor-pointer flex-col items-center rounded p-2 transition hover:bg-light-400 peer-checked:bg-light-500 dark:hover:bg-base-700 dark:peer-checked:bg-base-600"
          htmlFor="food"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M8.1 13.34L3.91 9.16a4.008 4.008 0 0 1 0-5.66l7.02 7l-2.83 2.84m5.31-.34l6.88 6.88l-1.41 1.41L12 14.41l-6.88 6.88l-1.41-1.41l9.65-9.66l-.2-.22a1.98 1.98 0 0 1 0-2.81l4.34-4.37l.93.92L15.19 7l.96.94l3.24-3.25l.92.92l-3.25 3.24l.94.96l3.26-3.25l.92.94l-4.37 4.34c-.78.78-2.04.78-2.81 0l-.22-.2L13.41 13Z"
            />
          </svg>
          <span className="text-sm">Food</span>
        </label>
      </div>
      <div className="col-span-4 flex flex-col">
        <input
          className="peer sr-only"
          type="checkbox"
          name="health"
          id="water"
        />
        <label
          className="flex w-full cursor-pointer flex-col items-center rounded p-2 transition hover:bg-light-400 peer-checked:bg-light-500 dark:hover:bg-base-700 dark:peer-checked:bg-base-600"
          htmlFor="water"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M6.975 22q-.775 0-1.337-.513T5 20.226L3 2h18l-2 18.225q-.075.75-.638 1.263T17.026 22H6.975ZM5.65 8h12.7l.4-4H5.25l.4 4ZM12 19q1.2 0 2.025-.825t.825-2.025q0-1.025-.663-2.225T12 11q-1.525 1.725-2.188 2.925T9.15 16.15q0 1.2.825 2.025T12 19Z"
            />
          </svg>
          <span className="text-sm">Water</span>
        </label>
      </div>
      <div className="col-span-4 flex flex-col">
        <input
          className="peer sr-only"
          type="checkbox"
          name="health"
          id="caffeine"
        />
        <label
          className="flex w-full cursor-pointer flex-col items-center rounded p-2 transition hover:bg-light-400 peer-checked:bg-light-500 dark:hover:bg-base-700 dark:peer-checked:bg-base-600"
          htmlFor="caffeine"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              d="M18.5 5l-1.224-2.447A1 1 0 0 0 16.382 2H7.618a1 1 0 0 0-.894.553L5.5 5H3v2h18V5h-2.5zM6.734 21.142c.071.492.493.858.991.858h8.551a1 1 0 0 0 .99-.858L19 9H5l1.734 12.142zM16 12l-.714 5H8.714L8 12h8z"
              fill="currentColor"
            />
          </svg>
          <span className="text-sm">Caffeine</span>
        </label>
      </div>
      <div className="col-span-4 flex flex-col">
        <input
          className="peer sr-only"
          type="checkbox"
          name="health"
          id="junk_food"
        />
        <label
          className="flex w-full cursor-pointer flex-col items-center rounded p-2 transition hover:bg-light-400 peer-checked:bg-light-500 dark:hover:bg-base-700 dark:peer-checked:bg-base-600"
          htmlFor="junk_food"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M15.54 8.46c1.96 1.96 1.96 5.12 0 7.08s-5.12 1.96-7.07 0s-1.97-5.12 0-7.08s5.11-1.96 7.07 0m3.93-3.91s-.97.12-2.04.81a5.243 5.243 0 0 0-1.5-2.94a4.027 4.027 0 0 0-1.1 3.92c1.39.36 2.47 1.44 2.83 2.83c1.12.3 2.68.15 3.92-1.1a5.247 5.247 0 0 0-2.9-1.49c.39-.58.7-1.25.79-2.03M4.53 19.45s.97-.12 2.04-.81c.15 1.04.65 2.09 1.5 2.94c1.25-1.24 1.4-2.8 1.1-3.92a3.939 3.939 0 0 1-2.83-2.83c-1.12-.3-2.68-.15-3.92 1.1c.84.84 1.87 1.34 2.9 1.49c-.39.58-.7 1.26-.79 2.03Z"
            />
          </svg>
          <span className="text-sm">Junk Food</span>
        </label>
      </div>
      <div className="col-span-4 flex flex-col">
        <input
          className="peer sr-only"
          type="checkbox"
          name="health"
          id="smoke"
        />
        <label
          className="flex w-full cursor-pointer flex-col items-center rounded p-2 transition hover:bg-light-400 peer-checked:bg-light-500 dark:hover:bg-base-700 dark:peer-checked:bg-base-600"
          htmlFor="smoke"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 48 48"
          >
            <g fill="currentColor">
              <path d="M37 11a1 1 0 0 1 1-1a5 5 0 0 1 5 5v1.59a4.4 4.4 0 0 1-1.644 3.436A5.994 5.994 0 0 1 44 25v3a1 1 0 1 1-2 0v-3a4 4 0 0 0-4-4a1 1 0 1 1 0-2h.59A2.41 2.41 0 0 0 41 16.59V15a3 3 0 0 0-3-3a1 1 0 0 1-1-1Z" />
              <path d="M34 17a3 3 0 0 0-3 3v1.818a3 3 0 0 0 3 3h3a3 3 0 0 1 3 3V28a1 1 0 1 1-2 0v-.182a1 1 0 0 0-1-1h-3a5 5 0 0 1-5-5V20a5 5 0 0 1 5-5a1 1 0 1 1 0 2ZM7 31a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h27a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H7Zm33 1a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Zm4 0a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Z" />
            </g>
          </svg>
          <span className="text-sm">Smoke</span>
        </label>
      </div>
      <div className="col-span-4 flex flex-col">
        <input
          className="peer sr-only"
          type="checkbox"
          name="health"
          id="alcohol"
        />
        <label
          className="flex w-full cursor-pointer flex-col items-center rounded p-2 transition hover:bg-light-400 peer-checked:bg-light-500 dark:hover:bg-base-700 dark:peer-checked:bg-base-600"
          htmlFor="alcohol"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 48 48"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M19.5 5a1 1 0 0 0-1-1H16a1 1 0 0 0-1 1v12.182a.715.715 0 0 1-.237.531A14.39 14.39 0 0 0 10 28.408v13.384c0 1.22.989 2.208 2.208 2.208h9.435A2.356 2.356 0 0 0 24 41.644V28.063c0-3.882-1.542-7.605-4.287-10.35a.727.727 0 0 1-.213-.514V5ZM12 29h10v8H12v-8Zm23.639-5H28.36l.64-6h6l.638 6ZM27.2 16h9.6l1.013 9.536A5.848 5.848 0 0 1 33 31.916V42h3a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2h3V31.915a5.848 5.848 0 0 1-4.813-6.379L27.2 16Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm">Alcohol</span>
        </label>
      </div>
    </fieldset>
  );
}
