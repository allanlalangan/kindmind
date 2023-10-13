import { useUser } from "@clerk/nextjs";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import DashboardLayout from "~/components/DashboardLayout";
import TipTapEditor from "~/components/TipTapEditor";
import { type NextPageWithLayout } from "~/pages/_app";
import { api } from "~/utils/api";

const CreateJournalEntryPage: NextPageWithLayout = () => {
  const router = useRouter();
  const user = useUser();

  const titleInputRef = useRef<HTMLInputElement | null>(null);
  const [titleInputValue, setTitleInputValue] = useState("");

  const [tempContent, setTempContent] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "min-h-[25vh] prose p-4 md:pb-4 bg-light-100 dark:bg-base-700 rounded-b border-light-500 border dark:border-base-600 dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:dark:outline-base-200 focus:outline-light-900",
      },
    },
    content: tempContent,
    editable: true,
    onUpdate: ({ editor }) => {
      setTempContent?.(editor.getHTML());
    },
  });

  useEffect(() => {
    if (titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, [editor?.isEditable]);

  let createEntry;

  if (!user.isSignedIn) {
    createEntry = api.journal.createGuestEntry.useMutation({
      onSuccess: () => {
        console.log("success");
        void router.push("/journal?redirected=true");
      },
    });
  } else {
    createEntry = api.journal.createEntry.useMutation({
      onSuccess: () => {
        console.log("success");
        void router.push("/journal?redirected=true");
      },
    });
  }

  const { mutate } = createEntry;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (tempContent === "" || titleInputValue === "") return;
    mutate({
      title: titleInputValue,
      content: tempContent,
    });
  };

  const today = new Date();

  return (
    <>
      <div className="col-span-12 flex items-baseline gap-2 border-b border-light-500 p-2 font-dm text-2xl dark:border-base-800 lg:row-span-1 lg:p-4">
        <Link className="underline-offset-2 hover:underline" href="/journal">
          Journal
        </Link>
        <span className="text-xl">&gt;</span>
        <time className="text-base" dateTime={today.toDateString()}>
          {today.toDateString()}
        </time>
        <span className="text-xl">&gt;</span>
        <span className="text-base italic">New Entry</span>
      </div>
      <section className="col-span-12 row-span-full row-start-2 overflow-y-scroll border-light-500 p-2 dark:border-base-800 lg:p-4">
        <form
          onSubmit={onSubmit}
          className="flex min-h-screen w-full flex-col lg:min-h-0"
        >
          <div className="mb-2 grid grid-cols-12">
            <button
              type="submit"
              className="col-span-3 col-start-10 rounded bg-base-800 px-4 pb-2.5 pt-2 font-dm text-sm text-base-50 transition-colors hover:bg-base-700 active:bg-base-900 dark:bg-base-200 dark:text-base-950 hover:dark:bg-base-100 active:dark:bg-base-300"
            >
              Save
            </button>
          </div>
          <TipTapEditor
            isNewEntry={true}
            editor={editor}
            content={tempContent}
            setTempContent={setTempContent}
            titleInputRef={titleInputRef}
            titleInputValue={titleInputValue}
            setTitleInputValue={setTitleInputValue}
            isEditable={true}
          />
        </form>
      </section>
    </>
  );
};

CreateJournalEntryPage.getLayout = function getLayout(page) {
  return (
    <DashboardLayout pageTitle="Create New Journal Entry">
      {page}
    </DashboardLayout>
  );
};

export default CreateJournalEntryPage;
