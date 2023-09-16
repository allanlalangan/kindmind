import { useUser } from "@clerk/nextjs";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "next/link";
import { useState } from "react";
import DashboardLayout from "~/components/DashboardLayout";
import TipTapEditor from "~/components/TipTapEditor";
import { type NextPageWithLayout } from "~/pages/_app";

const CreateJournalEntryPage: NextPageWithLayout = () => {
  const user = useUser();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [titleInputValue, setTitleInputValue] = useState("");

  const [tempContent, setTempContent] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "prose font-dm bg-light-100 dark:bg-base-700 rounded dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl p-4 focus:outline-none",
      },
    },
    content: tempContent,
    editable: true,
    onUpdate: ({ editor }) => {
      setTempContent?.(editor.getHTML());
    },
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user.user?.id);
    console.log(titleInputValue);
    console.log(tempContent);
  };

  return (
    <>
      <section className="mb-4 flex items-baseline font-dm dark:text-primary-300">
        <Link
          className="pr-1 text-xl underline-offset-2 hover:underline"
          href="/dashboard/journal"
        >
          Journal
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3.5 w-3.5"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10l-10 10Z"
          />
        </svg>
        <span className="px-1">New Entry</span>
      </section>

      <form
        onSubmit={onSubmit}
        className="flex w-full flex-col rounded border border-light-500 bg-light-200 p-4 dark:border-base-700 dark:bg-base-800"
      >
        <TipTapEditor
          editor={editor}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          content={tempContent}
          setTempContent={setTempContent}
          titleInputValue={titleInputValue}
          setTitleInputValue={setTitleInputValue}
          isEditable={true}
        />
        <button
          type="submit"
          className="rounded bg-secondary-400 px-4 pb-2.5 pt-2 font-dm text-lg tracking-wide text-base-50 transition-colors hover:bg-secondary-500 active:bg-secondary-600 dark:bg-primary-600 dark:hover:bg-primary-700 dark:active:bg-primary-800"
        >
          Save Entry
        </button>
      </form>
    </>
  );
};

CreateJournalEntryPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default CreateJournalEntryPage;
