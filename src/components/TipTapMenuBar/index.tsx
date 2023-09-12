import { type Editor } from "@tiptap/react";

interface MenuBarProps {
  editor: Editor | null;
}

export default function TipTapMenuBar({ editor }: MenuBarProps) {
  if (!editor) {
    return null;
  }

  return (
    <section className="flex flex-wrap items-center justify-center gap-1 p-1">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`h-8 w-8 rounded border p-1 ${
          editor.isActive("bold")
            ? "border-secondary-400 bg-secondary-400 text-base-50 dark:border-primary-500 dark:bg-primary-500 dark:text-base-50"
            : "border-base-950 dark:border-base-50 dark:text-base-50"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="24"
          // height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M6.8 19V5h5.525q1.625 0 3 1T16.7 8.775q0 1.275-.575 1.963t-1.075.987q.625.275 1.388 1.025T17.2 15q0 2.225-1.625 3.113t-3.05.887H6.8Zm3.025-2.8h2.6q1.2 0 1.463-.613t.262-.887q0-.275-.263-.887T12.35 13.2H9.825v3Zm0-5.7h2.325q.825 0 1.2-.425t.375-.95q0-.6-.425-.975t-1.1-.375H9.825V10.5Z"
          />
        </svg>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`h-8 w-8 rounded border p-1 ${
          editor.isActive("italic")
            ? "border-secondary-400 bg-secondary-400 text-base-50 dark:border-primary-500 dark:bg-primary-500 dark:text-base-50"
            : "border-base-950 dark:border-base-50 dark:text-base-50"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="24"
          // height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M5 19v-2.5h4l3-9H8V5h10v2.5h-3.5l-3 9H15V19H5Z"
          />
        </svg>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`h-8 w-8 rounded border p-1 ${
          editor.isActive("strike")
            ? "border-secondary-400 bg-secondary-400 text-base-50 dark:border-primary-500 dark:bg-primary-500 dark:text-base-50"
            : "border-base-950 dark:border-base-50 dark:text-base-50"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="24"
          // height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M2 14v-2h20v2H2Zm8.5-4V7H5V4h14v3h-5.5v3h-3Zm0 10v-4h3v4h-3Z"
          />
        </svg>
      </button>
      {/* <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={`h-8 w-8 rounded border p-1 ${
          editor.isActive("code")
            ? "border-secondary-400 bg-secondary-400 text-base-50 dark:border-primary-500 dark:bg-primary-500 dark:text-base-50"
            : "border-base-950 dark:border-base-50 dark:text-base-50"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="24"
          // height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m8 18l-6-6l6-6l1.425 1.425l-4.6 4.6L9.4 16.6L8 18Zm8 0l-1.425-1.425l4.6-4.6L14.6 7.4L16 6l6 6l-6 6Z"
          />
        </svg>
      </button> */}
      {/* <button
        className="h-8 w-8 rounded border p-1 dark:text-base-50"
        onClick={() => editor.chain().focus().clearNodes().run()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="24"
          // height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m13.2 10.35l-2.325-2.325L7.85 5H20v3h-5.8l-1 2.35Zm6.6 12.25l-8.3-8.3l-2 4.7H6.225L9.2 12L1.4 4.2l1.4-1.4l18.4 18.4l-1.4 1.4Z"
          />
        </svg>
      </button> */}
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`h-8 w-8 rounded border p-1 ${
          editor.isActive("paragraph")
            ? "border-secondary-400 bg-secondary-400 text-base-50 dark:border-primary-500 dark:bg-primary-500 dark:text-base-50"
            : "border-base-950 dark:border-base-50 dark:text-base-50"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="24"
          // height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M9 20v-6q-2.075 0-3.538-1.463T4 9q0-2.075 1.463-3.538T9 4h9v2h-2v14h-2V6h-3v14H9Z"
          />
        </svg>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`h-8 w-8 rounded border p-1 ${
          editor.isActive("heading", { level: 1 })
            ? "border-secondary-400 bg-secondary-400 text-base-50 dark:border-primary-500 dark:bg-primary-500 dark:text-base-50"
            : "border-base-950 dark:border-base-50 dark:text-base-50"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="24"
          // height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M5 17V7h2v4h4V7h2v10h-2v-4H7v4H5Zm12 0V9h-2V7h4v10h-2Z"
          />
        </svg>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`h-8 w-8 rounded border p-1 ${
          editor.isActive("heading", { level: 2 })
            ? "border-secondary-400 bg-secondary-400 text-base-50 dark:border-primary-500 dark:bg-primary-500 dark:text-base-50"
            : "border-base-950 dark:border-base-50 dark:text-base-50"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="24"
          // height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M3 17V7h2v4h4V7h2v10H9v-4H5v4H3Zm10 0v-4q0-.825.588-1.413T15 11h4V9h-6V7h6q.825 0 1.413.588T21 9v2q0 .825-.588 1.413T19 13h-4v2h6v2h-8Z"
          />
        </svg>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`h-8 w-8 rounded border p-1 ${
          editor.isActive("heading", { level: 3 })
            ? "border-secondary-400 bg-secondary-400 text-base-50 dark:border-primary-500 dark:bg-primary-500 dark:text-base-50"
            : "border-base-950 dark:border-base-50 dark:text-base-50"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="24"
          // height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M3 17V7h2v4h4V7h2v10H9v-4H5v4H3Zm10 0v-2h6v-2h-4v-2h4V9h-6V7h6q.825 0 1.413.588T21 9v6q0 .825-.588 1.413T19 17h-6Z"
          />
        </svg>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={`h-8 w-8 rounded border p-1 ${
          editor.isActive("heading", { level: 4 })
            ? "border-secondary-400 bg-secondary-400 text-base-50 dark:border-primary-500 dark:bg-primary-500 dark:text-base-50"
            : "border-base-950 dark:border-base-50 dark:text-base-50"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="24"
          // height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M3 17V7h2v4h4V7h2v10H9v-4H5v4H3Zm15 0v-3h-5V7h2v5h3V7h2v5h2v2h-2v3h-2Z"
          />
        </svg>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`h-8 w-8 rounded border p-1 ${
          editor.isActive("bulletList")
            ? "border-secondary-400 bg-secondary-400 text-base-50 dark:border-primary-500 dark:bg-primary-500 dark:text-base-50"
            : "border-base-950 dark:border-base-50 dark:text-base-50"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="24"
          // height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M9 19v-2h12v2H9Zm0-6v-2h12v2H9Zm0-6V5h12v2H9ZM5 20q-.825 0-1.413-.588T3 18q0-.825.588-1.413T5 16q.825 0 1.413.588T7 18q0 .825-.588 1.413T5 20Zm0-6q-.825 0-1.413-.588T3 12q0-.825.588-1.413T5 10q.825 0 1.413.588T7 12q0 .825-.588 1.413T5 14Zm0-6q-.825 0-1.413-.588T3 6q0-.825.588-1.413T5 4q.825 0 1.413.588T7 6q0 .825-.588 1.413T5 8Z"
          />
        </svg>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`h-8 w-8 rounded border p-1 ${
          editor.isActive("orderedList")
            ? "border-secondary-400 bg-secondary-400 text-base-50 dark:border-primary-500 dark:bg-primary-500 dark:text-base-50"
            : "border-base-950 dark:border-base-50 dark:text-base-50"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="24"
          // height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M3 22v-1.5h2.5v-.75H4v-1.5h1.5v-.75H3V16h3q.425 0 .713.288T7 17v1q0 .425-.288.713T6 19q.425 0 .713.288T7 20v1q0 .425-.288.713T6 22H3Zm0-7v-2.75q0-.425.288-.713T4 11.25h1.5v-.75H3V9h3q.425 0 .713.288T7 10v1.75q0 .425-.288.713T6 12.75H4.5v.75H7V15H3Zm1.5-7V3.5H3V2h3v6H4.5ZM9 19v-2h12v2H9Zm0-6v-2h12v2H9Zm0-6V5h12v2H9Z"
          />
        </svg>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`h-8 w-8 rounded border p-1 ${
          editor.isActive("codeBlock")
            ? "border-secondary-400 bg-secondary-400 text-base-50 dark:border-primary-500 dark:bg-primary-500 dark:text-base-50"
            : "border-base-950 dark:border-base-50 dark:text-base-50"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="24"
          // height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m9.6 15.6l1.4-1.425L8.825 12L11 9.825L9.6 8.4L6 12l3.6 3.6Zm4.8 0L18 12l-3.6-3.6L13 9.825L15.175 12L13 14.175l1.4 1.425ZM5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Z"
          />
        </svg>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`h-8 w-8 rounded border p-1 ${
          editor.isActive("blockquote")
            ? "border-secondary-400 bg-secondary-400 text-base-50 dark:border-primary-500 dark:bg-primary-500 dark:text-base-50"
            : "border-base-950 dark:border-base-50 dark:text-base-50"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="24"
          // height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m15 17l2-4h-4V6h7v7l-2 4h-3Zm-9 0l2-4H4V6h7v7l-2 4H6Z"
          />
        </svg>
      </button>
      <button
        className="h-8 w-8 rounded border border-base-950 p-1 dark:border-base-50 dark:text-base-50"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="24"
          // height="24"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M4 13v-2h16v2H4Z" />
        </svg>
      </button>
      <button
        className="h-8 w-8 rounded border border-base-950 p-1 dark:border-base-50 dark:text-base-50"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="24"
          // height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M7 19v-2h7.1q1.575 0 2.738-1T18 13.5q0-1.5-1.163-2.5T14.1 10H7.8l2.6 2.6L9 14L4 9l5-5l1.4 1.4L7.8 8h6.3q2.425 0 4.163 1.575T20 13.5q0 2.35-1.738 3.925T14.1 19H7Z"
          />
        </svg>
      </button>
      <button
        className="h-8 w-8 rounded border border-base-950 p-1 dark:border-base-50 dark:text-base-50"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="24"
          // height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M9.9 19q-2.425 0-4.163-1.575T4 13.5q0-2.35 1.738-3.925T9.9 8h6.3l-2.6-2.6L15 4l5 5l-5 5l-1.4-1.4l2.6-2.6H9.9q-1.575 0-2.738 1T6 13.5Q6 15 7.163 16T9.9 17H17v2H9.9Z"
          />
        </svg>
      </button>
    </section>
  );
}
