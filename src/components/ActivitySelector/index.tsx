export default function ActivitySelector() {
  return (
    <fieldset className="col-span-12 grid grid-cols-12 justify-center gap-2 rounded border border-light-500 p-2 dark:border-base-600 lg:p-4">
      <legend className="px-2 text-sm">Activities</legend>
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
          id="code"
        />
        <label
          className="flex w-full cursor-pointer flex-col items-center rounded p-2 transition hover:bg-light-400 peer-checked:bg-light-500 dark:hover:bg-base-700 dark:peer-checked:bg-base-600"
          htmlFor="code"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-8 5H9v2c0 1.1-.9 2-2 2c1.1 0 2 .9 2 2v2h2v2H9c-1.1 0-2-.9-2-2v-1c0-1.1-.9-2-2-2v-2c1.1 0 2-.9 2-2V8c0-1.1.9-2 2-2h2v2m8 5c-1.1 0-2 .9-2 2v1c0 1.1-.9 2-2 2h-2v-2h2v-2c0-1.1.9-2 2-2c-1.1 0-2-.9-2-2V8h-2V6h2c1.1 0 2 .9 2 2v1c0 1.1.9 2 2 2v2Z"
            />
          </svg>
          <span className="text-sm">Code</span>
        </label>
      </div>
      <div className="col-span-3 flex flex-col">
        <input
          className="peer sr-only"
          type="checkbox"
          name="activity"
          id="shopping"
        />
        <label
          className="flex w-full cursor-pointer flex-col items-center rounded p-2 transition hover:bg-light-400 peer-checked:bg-light-500 dark:hover:bg-base-700 dark:peer-checked:bg-base-600"
          htmlFor="shopping"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M6 22q-.825 0-1.413-.588T4 20V8q0-.825.588-1.413T6 6h2q0-1.65 1.175-2.825T12 2q1.65 0 2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.588 1.413T18 22H6Zm4-16h4q0-.825-.588-1.413T12 4q-.825 0-1.413.588T10 6Zm5 5q.425 0 .713-.288T16 10V8h-2v2q0 .425.288.713T15 11Zm-6 0q.425 0 .713-.288T10 10V8H8v2q0 .425.288.713T9 11Z"
            />
          </svg>
          <span className="text-sm">Shopping</span>
        </label>
      </div>
      <div className="col-span-3 flex flex-col">
        <input
          className="peer sr-only"
          type="checkbox"
          name="activity"
          id="other"
        />
        <label
          className="flex w-full cursor-pointer flex-col items-center rounded p-2 transition hover:bg-light-400 peer-checked:bg-light-500 dark:hover:bg-base-700 dark:peer-checked:bg-base-600"
          htmlFor="other"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 17.5q1.875 0 3.188-1.313T16.5 13q0-1.875-1.313-3.188T12 8.5q-1.875 0-3.188 1.313T7.5 13q0 1.875 1.313 3.188T12 17.5Zm0-2q-1.05 0-1.775-.725T9.5 13q0-1.05.725-1.775T12 10.5q1.05 0 1.775.725T14.5 13q0 1.05-.725 1.775T12 15.5ZM4 21q-.825 0-1.413-.588T2 19V7q0-.825.588-1.413T4 5h3.15L9 3h6l1.85 2H20q.825 0 1.413.588T22 7v12q0 .825-.588 1.413T20 21H4Z"
            />
          </svg>
          <span className="text-sm">Other</span>
        </label>
      </div>
    </fieldset>
  );
}
