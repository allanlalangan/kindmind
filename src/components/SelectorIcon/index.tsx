interface props {
  option: string;
}

export default function SelectorIcon({ option }: props) {
  switch (option) {
    case "exercise":
      return (
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
      );
    case "journaling":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8.75 2.013V22H15c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2H9l-.25.013Zm2 4.487a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Zm0 3.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75ZM3 7.25c.008-2.336.081-3.574.879-4.371c.675-.675 1.666-.832 3.371-.868v19.978c-1.705-.036-2.696-.193-3.371-.868c-.798-.797-.871-2.035-.878-4.371H4a.75.75 0 0 0 0-1.5H3v-2.5h1a.75.75 0 0 0 0-1.5H3v-2.5h1a.75.75 0 0 0 0-1.5H3Zm0 0H2a.75.75 0 0 0 0 1.5h1v-1.5Zm0 5.5H2a.75.75 0 0 1 0-1.5h1v1.5Zm0 2.5H2a.75.75 0 0 0 0 1.5h1v-1.5Z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "grooming":
      return (
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
      );
    case "meditate":
      return (
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
      );
    case "art":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 20 20"
        >
          <g fill="currentColor">
            <path
              fillRule="evenodd"
              d="M16.22 13.956c1.044-3.896-1.428-7.92-5.489-9.008c-4.586-1.23-11.095 1.964-9.647 6.061c.48 1.355 1.404 1.672 3.147 1.697l.109.002c.921.011 1.18.071 1.258.197c.127.208.129.539-.014 1.45c-.068.43-.09.58-.116.815c-.159 1.431.083 2.547 1.02 3.557c2.928 3.153 8.553-.373 9.732-4.771ZM2.97 10.341c-.729-2.06 3.936-4.349 7.243-3.463c3.017.809 4.826 3.754 4.075 6.559c-.838 3.128-4.782 5.6-6.334 3.928c-.48-.516-.599-1.068-.498-1.975c.021-.194.041-.328.104-.726c.219-1.397.216-2.035-.258-2.806c-.594-.967-1.3-1.13-2.937-1.151l-.106-.002c-.964-.013-1.193-.092-1.29-.364Z"
              clipRule="evenodd"
            />
            <path d="M6 10a1.25 1.25 0 1 1 0-2.5A1.25 1.25 0 0 1 6 10Zm3.75 0a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5Zm2.5 3a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5Zm-1.5 3.5a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5Zm3.62-12.895a1 1 0 0 1 1.371.443l4.093 8.4a.652.652 0 0 1-1.149.611l-4.708-8.07a.998.998 0 0 1 .394-1.384Z" />
            <path
              fillRule="evenodd"
              d="M12.537 3.484c.487.915 1.306 1.171 2.098.75c.791-.42 1.038-1.243.551-2.158C14.63 1.028 13.438.078 12.648.497c-.79.42-.668 1.939-.11 2.987Zm.883-.47a3.165 3.165 0 0 1-.32-1.137a1.975 1.975 0 0 1 .018-.496l.018.009c.05.024.205.096.403.254c.302.241.602.596.764.901c.229.43.164.646-.138.807c-.3.16-.516.092-.745-.337Z"
              clipRule="evenodd"
            />
          </g>
        </svg>
      );
    case "music":
      return (
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
      );
    case "tv":
      return (
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
      );
    case "games":
      return (
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
      );
    case "reading":
      return (
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
      );
    case "code":
      return (
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
      );
    case "shopping":
      return (
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
      );
    case "other":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M5.5 17.5q-2.3 0-3.9-1.6T0 12q0-2.3 1.6-3.9t3.9-1.6q.925 0 1.775.325T8.8 7.75l1.7 1.55L9 10.65l-1.55-1.4q-.4-.35-.9-.55T5.5 8.5q-1.45 0-2.475 1.025T2 12q0 1.45 1.025 2.475T5.5 15.5q.55 0 1.05-.2t.9-.55l7.75-7q.675-.6 1.525-.925T18.5 6.5q2.3 0 3.9 1.6T24 12q0 2.3-1.6 3.9t-3.9 1.6q-.925 0-1.775-.325T15.2 16.25l-1.7-1.55l1.5-1.35l1.55 1.4q.4.35.9.55t1.05.2q1.45 0 2.475-1.025T22 12q0-1.45-1.025-2.475T18.5 8.5q-.55 0-1.05.2t-.9.55l-7.75 7q-.675.6-1.525.925T5.5 17.5Z"
          />
        </svg>
      );
    case "job":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M28 112h200a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4v-40a4 4 0 0 1 4-4Zm-4 88a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16v-20a4 4 0 0 0-4-4H28a4 4 0 0 0-4 4ZM232 72v20a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4V72a16 16 0 0 1 16-16h40v-8a24 24 0 0 1 24-24h48a24 24 0 0 1 24 24v8h40a16 16 0 0 1 16 16Zm-72-24a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v8h64Z"
          />
        </svg>
      );
    case "study":
      return (
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
      );
    case "clean":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M235.5 216.81c-22.56-11-35.5-34.58-35.5-64.8v-17.28a15.94 15.94 0 0 0-10.09-14.87L165 110a8 8 0 0 1-4.48-10.34l21.32-53a28 28 0 0 0-16.1-37a28.14 28.14 0 0 0-35.82 16a.61.61 0 0 0 0 .12L108.9 79a8 8 0 0 1-10.37 4.49L73.11 73.14a15.89 15.89 0 0 0-17.37 3.66C34.68 98.45 24 123.75 24 152a111.45 111.45 0 0 0 31.18 77.53A8 8 0 0 0 61 232h171a8 8 0 0 0 3.5-15.19ZM115.11 216a87.53 87.53 0 0 1-24.34-42a8 8 0 0 0-15.49 4a105.16 105.16 0 0 0 18.36 38h-29.2A95.54 95.54 0 0 1 40 152a85.9 85.9 0 0 1 7.73-36.29l137.8 55.12c3 18 10.56 33.48 21.89 45.16Z"
          />
        </svg>
      );
    case "errands":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m10.95 18l5.65-5.65l-1.45-1.45l-4.225 4.225l-2.1-2.1L7.4 14.45L10.95 18ZM6 22q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h8l6 6v12q0 .825-.588 1.413T18 22H6Zm7-13h5l-5-5v5Z"
          />
        </svg>
      );
    case "eat":
      return (
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
      );
    case "water":
      return (
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
      );
    case "caffeine":
      return (
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
      );
    case "junk_food":
      return (
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
      );
    case "smoke":
      return (
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
      );
    case "alcohol":
      return (
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
      );
    default:
      return;
  }
}
