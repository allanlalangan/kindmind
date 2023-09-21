import { useUser } from "@clerk/nextjs";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useRouter } from "next/router";
import { useState } from "react";
import DashboardLayout from "~/components/DashboardLayout";
import JournalLayout from "~/components/JournalLayout";
import TipTapEditor from "~/components/TipTapEditor";
import { type NextPageWithLayout } from "~/pages/_app";
import { api } from "~/utils/api";

const CreateJournalEntryPage: NextPageWithLayout = () => {
  const router = useRouter();
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
          "prose bg-light-100 dark:bg-base-700 rounded-b border-light-500 border dark:border-base-600 dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl p-4 focus:outline-none",
      },
    },
    content: tempContent,
    editable: true,
    onUpdate: ({ editor }) => {
      setTempContent?.(editor.getHTML());
    },
  });

  let createEntry;

  if (!user.isSignedIn) {
    createEntry = api.entries.createGuestEntry.useMutation({
      onSuccess: () => {
        console.log("success");
        void router.push("/journal").then(router.reload);
      },
    });
  } else {
    createEntry = api.entries.createEntry.useMutation({
      onSuccess: () => {
        console.log("success");
        void router.push("/journal").then(router.reload);
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

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="flex w-full flex-col border-light-500 bg-light-200 p-4 dark:border-base-700 dark:bg-base-800 xl:w-2/3"
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
          className="rounded bg-base-800 px-4 pb-2.5 pt-2 font-dm text-lg tracking-wide text-base-50 transition-colors hover:bg-base-700 active:bg-base-900 dark:bg-base-200 dark:text-base-950 hover:dark:bg-base-100 active:dark:bg-base-300"
        >
          Save Entry
        </button>
      </form>
    </>
  );
};

CreateJournalEntryPage.getLayout = function getLayout(page) {
  return (
    <DashboardLayout pageTitle="Create New Journal Entry">
      <JournalLayout>{page}</JournalLayout>
    </DashboardLayout>
  );
};

export default CreateJournalEntryPage;
