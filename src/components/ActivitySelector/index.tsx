export default function ActivitySelector() {
  return (
    <fieldset className="col-span-12 flex flex-col justify-center gap-2 rounded border border-light-500 p-4 dark:border-base-600">
      <legend className="px-2 font-dm text-lg">Activities</legend>
      <p className="mx-auto">What did you do?</p>
      <div className="grid grid-cols-12 gap-2">
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
            id="study"
          />
          <label
            className="flex w-full cursor-pointer flex-col items-center rounded p-2 transition hover:bg-light-400 peer-checked:bg-light-500 dark:hover:bg-base-700 dark:peer-checked:bg-base-600"
            htmlFor="study"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9V320c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6c-3.2 4.3-4.1 9.9-2.3 15s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7.3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7c-3.2-14.2-7.5-28.7-13.5-42v-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5.8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1l280.6-101c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1c-7.6-2.7-15.6-4.1-23.7-4.1zM128 408c0 35.3 86 72 192 72s192-36.7 192-72l-15.3-145.4L354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6l-142.2-51.4L128 408z"
              />
            </svg>
            <span className="text-sm">Study</span>
          </label>
        </div>
        <div className="col-span-3 flex flex-col">
          <input
            className="peer sr-only"
            type="checkbox"
            name="activity"
            id="read"
          />
          <label
            className="flex w-full cursor-pointer flex-col items-center rounded p-2 transition hover:bg-light-400 peer-checked:bg-light-500 dark:hover:bg-base-700 dark:peer-checked:bg-base-600"
            htmlFor="read"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6.5 16q1.175 0 2.288.263T11 17.05V7.2q-1.025-.6-2.175-.9T6.5 6q-.9 0-1.788.175T3 6.7v9.9q.875-.3 1.738-.45T6.5 16Zm6.5 1.05q1.1-.525 2.212-.788T17.5 16q.9 0 1.763.15T21 16.6V6.7q-.825-.35-1.713-.525T17.5 6q-1.175 0-2.325.3T13 7.2v9.85Zm-1 2.425q-.35 0-.663-.088t-.587-.237q-.975-.575-2.05-.862T6.5 18q-1.05 0-2.063.275T2.5 19.05q-.525.275-1.012-.025T1 18.15V6.1q0-.275.138-.525T1.55 5.2q1.15-.6 2.4-.9T6.5 4q1.45 0 2.838.375T12 5.5q1.275-.75 2.663-1.125T17.5 4q1.3 0 2.55.3t2.4.9q.275.125.413.375T23 6.1v12.05q0 .575-.487.875t-1.013.025q-.925-.5-1.937-.775T17.5 18q-1.125 0-2.2.288t-2.05.862q-.275.15-.588.238t-.662.087ZM7 11.65Zm7-2.875q0-.225.163-.463T14.524 8q.725-.25 1.45-.375T17.5 7.5q.5 0 .988.063t.962.162q.225.05.388.25t.162.45q0 .425-.275.625t-.7.1q-.35-.075-.737-.113T17.5 9q-.65 0-1.275.125t-1.2.325q-.45.175-.737-.025T14 8.775Zm0 5.5q0-.225.163-.463t.362-.312q.725-.25 1.45-.375T17.5 13q.5 0 .988.063t.962.162q.225.05.388.25t.162.45q0 .425-.275.625t-.7.1q-.35-.075-.737-.113T17.5 14.5q-.65 0-1.275.113t-1.2.312q-.45.175-.738-.013T14 14.276Zm0-2.75q0-.225.163-.463t.362-.312q.725-.25 1.45-.375t1.525-.125q.5 0 .988.063t.962.162q.225.05.388.25t.162.45q0 .425-.275.625t-.7.1q-.35-.075-.737-.113t-.788-.037q-.65 0-1.275.125t-1.2.325q-.45.175-.737-.025t-.288-.65Z"
              />
            </svg>
            <span className="text-sm">Read</span>
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
        <div className="col-span-3 flex flex-col">
          <input
            className="peer sr-only"
            type="checkbox"
            name="activity"
            id="art"
          />
          <label
            className="flex w-full cursor-pointer flex-col items-center rounded p-2 transition hover:bg-light-400 peer-checked:bg-light-500 dark:hover:bg-base-700 dark:peer-checked:bg-base-600"
            htmlFor="art"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 20 20"
            >
              <g fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M16.22 13.956c1.044-3.896-1.428-7.92-5.489-9.008c-4.586-1.23-11.095 1.964-9.647 6.061c.48 1.355 1.404 1.672 3.147 1.697l.109.002c.921.011 1.18.071 1.258.197c.127.208.129.539-.014 1.45c-.068.43-.09.58-.116.815c-.159 1.431.083 2.547 1.02 3.557c2.928 3.153 8.553-.373 9.732-4.771ZM2.97 10.341c-.729-2.06 3.936-4.349 7.243-3.463c3.017.809 4.826 3.754 4.075 6.559c-.838 3.128-4.782 5.6-6.334 3.928c-.48-.516-.599-1.068-.498-1.975c.021-.194.041-.328.104-.726c.219-1.397.216-2.035-.258-2.806c-.594-.967-1.3-1.13-2.937-1.151l-.106-.002c-.964-.013-1.193-.092-1.29-.364Z"
                  clip-rule="evenodd"
                />
                <path d="M6 10a1.25 1.25 0 1 1 0-2.5A1.25 1.25 0 0 1 6 10Zm3.75 0a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5Zm2.5 3a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5Zm-1.5 3.5a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5Zm3.62-12.895a1 1 0 0 1 1.371.443l4.093 8.4a.652.652 0 0 1-1.149.611l-4.708-8.07a.998.998 0 0 1 .394-1.384Z" />
                <path
                  fill-rule="evenodd"
                  d="M12.537 3.484c.487.915 1.306 1.171 2.098.75c.791-.42 1.038-1.243.551-2.158C14.63 1.028 13.438.078 12.648.497c-.79.42-.668 1.939-.11 2.987Zm.883-.47a3.165 3.165 0 0 1-.32-1.137a1.975 1.975 0 0 1 .018-.496l.018.009c.05.024.205.096.403.254c.302.241.602.596.764.901c.229.43.164.646-.138.807c-.3.16-.516.092-.745-.337Z"
                  clip-rule="evenodd"
                />
              </g>
            </svg>
            <span className="text-sm">Art</span>
          </label>
        </div>
        <div className="col-span-3 flex flex-col">
          <input
            className="peer sr-only"
            type="checkbox"
            name="activity"
            id="music"
          />
          <label
            className="flex w-full cursor-pointer flex-col items-center rounded p-2 transition hover:bg-light-400 peer-checked:bg-light-500 dark:hover:bg-base-700 dark:peer-checked:bg-base-600"
            htmlFor="music"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m12.75 12.508l8.5-3.4v5.653a3.25 3.25 0 1 0 1.5 2.74V7.945c0-1.143 0-2.101-.08-2.865a7.747 7.747 0 0 0-.04-.315c-.078-.522-.214-1.008-.479-1.415a2.18 2.18 0 0 0-.62-.63l-.007-.005c-.708-.47-1.503-.437-2.322-.228c-.792.202-1.774.613-2.978 1.117l-2.094.876c-.565.236-1.043.437-1.418.644c-.4.22-.743.48-1.001.868c-.258.388-.366.805-.415 1.259c-.046.426-.046.945-.046 1.557v7.952a3.25 3.25 0 1 0 1.5 2.74v-6.993ZM7.75 2a.75.75 0 0 0-1.5 0v5.76a3.25 3.25 0 1 0 1.5 2.74V5.005c.699.504 1.53.745 2.25.745a.75.75 0 0 0 0-1.5a2.443 2.443 0 0 1-1.488-.552c-.434-.357-.762-.9-.762-1.698Z"
              />
            </svg>
            <span className="text-sm">Music</span>
          </label>
        </div>
        <div className="col-span-3 flex flex-col">
          <input
            className="peer sr-only"
            type="checkbox"
            name="activity"
            id="tv"
          />
          <label
            className="flex w-full cursor-pointer flex-col items-center rounded p-2 transition hover:bg-light-400 peer-checked:bg-light-500 dark:hover:bg-base-700 dark:peer-checked:bg-base-600"
            htmlFor="tv"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21 3H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h5v2h8v-2h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 14H3V5h18m-5 6l-7 4V7"
              />
            </svg>
            <span className="text-sm">TV</span>
          </label>
        </div>

        <div className="col-span-3 flex flex-col">
          <input
            className="peer sr-only"
            type="checkbox"
            name="activity"
            id="games"
          />
          <label
            className="flex w-full cursor-pointer flex-col items-center rounded p-2 transition hover:bg-light-400 peer-checked:bg-light-500 dark:hover:bg-base-700 dark:peer-checked:bg-base-600"
            htmlFor="games"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 18q-.825 0-1.413-.588T2 16V8q0-.825.588-1.413T4 6h16q.825 0 1.413.588T22 8v8q0 .825-.588 1.413T20 18H4Zm3-3h2v-2h2v-2H9V9H7v2H5v2h2v2Zm7.5 0q.625 0 1.063-.438T16 13.5q0-.625-.438-1.063T14.5 12q-.625 0-1.063.438T13 13.5q0 .625.438 1.063T14.5 15Zm3-3q.625 0 1.063-.438T19 10.5q0-.625-.438-1.063T17.5 9q-.625 0-1.063.438T16 10.5q0 .625.438 1.063T17.5 12Z"
              />
            </svg>
            <span className="text-sm">Games</span>
          </label>
        </div>
      </div>
    </fieldset>
  );
}
