export const getMoodIconLabel = (mood: number) => {
  return mood === -2
    ? "awful"
    : mood === -1
    ? "bad"
    : mood === 0
    ? "okay"
    : mood === 1
    ? "good"
    : "awesome";
};

interface props {
  mood: number;
  size?: number;
}

export default function MoodIcon({ mood, size }: props) {
  switch (mood) {
    case -2:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${size ? `h-${size} w-${size} ` : ""}text-orange-500`}
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2c5.523 0 10 4.477 10 10a9.959 9.959 0 0 1-1.065 4.496a1.975 1.975 0 0 0-.398-.775l-.123-.135L19 14.172l-1.414 1.414l-.117.127a2 2 0 0 0 1.679 3.282A9.974 9.974 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2Zm0 13c-1.38 0-2.63.56-3.534 1.463l-.166.174l.945.86C10.035 17.182 10.982 17 12 17c.905 0 1.754.144 2.486.396l.269.1l.945-.86A4.987 4.987 0 0 0 12 15Zm-3.5-5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Zm7 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Z"
          />
        </svg>
      );

    case -1:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${size ? `h-${size} w-${size} ` : ""}text-amber-500`}
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Zm-5-5h2a3 3 0 1 1 6 0h2a5 5 0 0 0-10 0Zm1-6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm8 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"
          />
        </svg>
      );

    case 0:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            size ? `h-${size} w-${size} ` : ""
          }text-yellow-600 dark:text-yellow-200`}
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Zm-4-8v2h8v-2H8Zm0-3a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm8 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"
          />
        </svg>
      );

    case 1:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            size ? `h-${size} w-${size} ` : ""
          }text-indigo-500 dark:text-indigo-400`}
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Zm-5-9a5 5 0 0 0 10 0h-2a3 3 0 1 1-6 0H7Zm1-2a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm8 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"
          />
        </svg>
      );

    case 2:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            size ? `h-${size} w-${size} ` : ""
          }text-fuchsia-500 dark:text-fuchsia-500`}
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2Zm0 9c-2 0-3.667.333-5 1a5 5 0 0 0 10 0c-1.333-.667-3-1-5-1ZM8.5 7c-1.152 0-2.122.78-2.412 1.84L6.05 9h4.9A2.5 2.5 0 0 0 8.5 7Zm7 0c-1.152 0-2.122.78-2.412 1.84L13.05 9h4.9a2.5 2.5 0 0 0-2.45-2Z"
          />
        </svg>
      );
    default:
      return;
  }
}
