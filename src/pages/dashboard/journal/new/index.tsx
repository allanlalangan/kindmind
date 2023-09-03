import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "next/link";
import { useState } from "react";
import DashboardLayout from "~/components/DashboardLayout";
import TipTapEditor from "~/components/TipTapEditor";
import { type NextPageWithLayout } from "~/pages/_app";

const CreateJournalEntryPage: NextPageWithLayout = () => {
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
          "prose border border-primary-400 rounded dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl p-4 pt-6 focus:outline-none",
      },
    },
    content: tempContent,
    editable: true,
    onUpdate: ({ editor }) => {
      setTempContent?.(editor.getHTML());
    },
  });

  return (
    <>
      <section className="mb-2">
        <Link
          className="pr-1 underline-offset-2 hover:underline"
          href="/dashboard/journal"
        >
          Journal
        </Link>
        &gt;
        <span className="px-1">Create New Entry</span>
      </section>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative col-span-12 -mx-0 flex flex-col rounded"
      >
        <div className="-mx-4 grid grid-cols-2 gap-1 p-2">
          <button
            type="button"
            className="col-span-2 rounded border border-primary-400 p-2 transition"
          >
            Submit Entry
          </button>
        </div>
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
      </form>
    </>
  );
};

CreateJournalEntryPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default CreateJournalEntryPage;
