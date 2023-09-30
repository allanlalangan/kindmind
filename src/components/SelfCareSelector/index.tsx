export default function SelfCareSelector() {
  return (
    <fieldset className="col-span-12 grid grid-cols-12 justify-center gap-2 rounded border border-light-500 p-2 dark:border-base-600 lg:p-4">
      <legend className="px-2 text-sm">Self-care</legend>

      <div className="col-span-3 flex flex-col">
        <input
          className="peer sr-only"
          type="checkbox"
          name="activity"
          id="exercise"
        />
        <label
          className="flex w-full cursor-pointer flex-col items-center rounded p-2 transition hover:bg-light-400 peer-checked:bg-light-500 dark:hover:bg-base-700 dark:peer-checked:bg-base-600"
          htmlFor="exercise"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 48 48"
          >
            <g fill="currentColor">
              <path d="M30.5 13a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm-9.04 4.282c-1.247.31-2.098.776-2.785 1.354c-1.03.868-1.862 2.12-2.986 4.088a2 2 0 1 1-3.473-1.985c1.119-1.957 2.25-3.788 3.883-5.162c1.704-1.436 3.79-2.248 6.603-2.561c1.176-.13 2.47-.104 3.683.437c1.273.569 2.203 1.588 2.837 2.95c.854 1.833 1.489 2.924 1.997 3.556c.245.304.416.445.513.508c.077.05.11.054.122.056h.001c.087.01.369 0 1.197-.367c.361-.16.755-.352 1.237-.587l.115-.056a53.715 53.715 0 0 1 1.784-.84a2 2 0 0 1 1.625 3.655a49.38 49.38 0 0 0-1.653.779l-.131.064c-.461.225-.925.452-1.36.644c-.9.398-2.05.83-3.297.679c-1.316-.16-2.33-.903-3.165-1.9l-2.733 5.273l3.78 4.918c.225.294.364.644.403 1.012l.832 7.996a2 2 0 1 1-3.978.414l-.774-7.433l-2.296-2.988l-.02.037l-.084-.172l-4.242-5.52a2 2 0 0 1-.282-1.934l2.647-6.915Z" />
              <path d="m18.432 29.007l-1.472 3.96l-5.8-.46a2 2 0 1 0-.318 3.987l7.308.58a2 2 0 0 0 2.033-1.296l1.125-3.028l-2.876-3.743Z" />
            </g>
          </svg>
          <span className="text-sm">Exercise</span>
        </label>
      </div>
      <div className="col-span-3 flex flex-col">
        <input
          className="peer sr-only"
          type="checkbox"
          name="activity"
          id="journal"
        />
        <label
          className="flex w-full cursor-pointer flex-col items-center rounded p-2 transition hover:bg-light-400 peer-checked:bg-light-500 dark:hover:bg-base-700 dark:peer-checked:bg-base-600"
          htmlFor="journal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M8.75 2.013V22H15c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2H9l-.25.013Zm2 4.487a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Zm0 3.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75ZM3 7.25c.008-2.336.081-3.574.879-4.371c.675-.675 1.666-.832 3.371-.868v19.978c-1.705-.036-2.696-.193-3.371-.868c-.798-.797-.871-2.035-.878-4.371H4a.75.75 0 0 0 0-1.5H3v-2.5h1a.75.75 0 0 0 0-1.5H3v-2.5h1a.75.75 0 0 0 0-1.5H3Zm0 0H2a.75.75 0 0 0 0 1.5h1v-1.5Zm0 5.5H2a.75.75 0 0 1 0-1.5h1v1.5Zm0 2.5H2a.75.75 0 0 0 0 1.5h1v-1.5Z"
              clip-rule="evenodd"
            />
          </svg>
          <span className="text-sm">Journaling</span>
        </label>
      </div>

      <div className="col-span-3 flex flex-col">
        <input
          className="peer sr-only"
          type="checkbox"
          name="activity"
          id="grooming"
        />
        <label
          className="flex w-full cursor-pointer flex-col items-center rounded p-2 transition hover:bg-light-400 peer-checked:bg-light-500 dark:hover:bg-base-700 dark:peer-checked:bg-base-600"
          htmlFor="grooming"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 11 11"
          >
            <path
              d="M1.5 2A1.5 1.5 0 0 0 0 3.5v1c0 .5.5.5.5.5h1C3 5 4 5.5 4 5.5S3 6 1.5 6h-1S0 6 0 6.5v1a1.5 1.5 0 0 0 3 0v-.615c.808-.158 1.587-.453 2.225-.742L8.5 8C10 8.75 11 8 11 8L6.5 5.5L11 3s-1-.75-2.5 0L5.225 4.857C4.587 4.568 3.808 4.273 3 4.115v-.611V3.5A1.5 1.5 0 0 0 1.5 2zm0 1a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1zm3.732 2.25h.018a.25.25 0 1 1-.018 0zM1.5 7a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1z"
              fill="currentColor"
            />
          </svg>
          <span className="text-sm">Grooming</span>
        </label>
      </div>
      <div className="col-span-3 flex flex-col">
        <input
          className="peer sr-only"
          type="checkbox"
          name="activity"
          id="meditate"
        />
        <label
          className="flex w-full cursor-pointer flex-col items-center rounded p-2 transition hover:bg-light-400 peer-checked:bg-light-500 dark:hover:bg-base-700 dark:peer-checked:bg-base-600"
          htmlFor="meditate"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M6 22v-4.3q-1.425-1.3-2.212-3.038T3 11q0-3.75 2.625-6.375T12 2q3.125 0 5.538 1.838t3.137 4.787l1.3 5.125q.125.475-.175.863T21 15h-2v3q0 .825-.588 1.413T17 20h-2v2H6Zm6-15q-.425 0-.713.288T11 8v5q0 .425.288.713T12 14q.425 0 .713-.288T13 13V8q0-.425-.288-.713T12 7Zm3 1q-.425 0-.713.288T14 9v2.5q0 .425.288.713T15 12.5q.425 0 .713-.288T16 11.5V9q0-.425-.288-.713T15 8ZM9 8q-.425 0-.713.288T8 9v2q0 .425.288.713T9 12q.425 0 .713-.288T10 11V9q0-.425-.288-.713T9 8Z"
            />
          </svg>
          <span className="text-sm">Meditate</span>
        </label>
      </div>
    </fieldset>
  );
}
