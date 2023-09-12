import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "next/link";
import { useState } from "react";
import DashboardLayout from "~/components/DashboardLayout";
import TipTapEditor from "~/components/TipTapEditor";
import { type NextPageWithLayout } from "~/pages/_app";

const moon_phase_report = {
  considered_date: "2-10-2017",
  moon_phase: "Balsamic Moon",
  significance:
    "The Moon now is waning and is located halfway between Last Quarter and New Moon. The seeds are moving towards maturation, while rest of the plant withers away. The energy of the plant concentrates into the seed which is preparing itself for the next cycle. In the seasonal progression, this phase represents Halloween, midway between the Fall Equinox and the Winter Solstice. The wall that separates the dead from the living, thins and ghosts walk on the plant of the living.",
  report:
    "This is a time to rest, recreate and reflect on yourself and try to reconnect with inner powerhouses of strength. It is currently not a good time to start something afresh. It is a phase where all you should do is reflect your life objectively and increase awareness of what is important to you. At this point, make your bucket list and realise your dreams and aspirations. What are the larger goals that you can you aspire to and will bring vitality and excitement into your life and make your life a little more interesting and offbeat? Just think and reflect on those aspects. Do not jump on the implementation of the listed goals.",
};

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
          "prose font-serif bg-light-100 dark:bg-base-700 rounded dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl p-4 focus:outline-none",
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
      <section className="mb-2 font-serif dark:text-primary-300">
        <Link
          className="pr-1 underline-offset-2 hover:underline"
          href="/dashboard/journal"
        >
          Journal
        </Link>
        &gt;
        <span className="px-1">Create New Entry</span>
      </section>
      <section className="mx-2 flex flex-col gap-4 pb-4 lg:flex-row">
        <article className="h-fit w-full rounded bg-light-200 p-4 dark:bg-base-800 lg:w-1/2">
          <h2 className="mb-4 font-serif text-lg text-primary-600 dark:text-tertiary-200">
            Sample Moon Report
          </h2>
          <p className="mb-2">Date: {moon_phase_report.considered_date}</p>
          <p className="mb-2">Moon Phase: {moon_phase_report.moon_phase}</p>
          <p className="mb-2">{moon_phase_report.significance} </p>
          <p className="mb-2">{moon_phase_report.report}</p>
          <button className="mt-4 w-full rounded bg-accent-600 px-4 pb-2.5 pt-2 text-base-950 transition-colors hover:bg-accent-700 active:bg-accent-800 dark:bg-accent-400 dark:hover:bg-accent-500 dark:active:bg-accent-600">
            Generate Journal Prompts (work in progress)
          </button>
        </article>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full flex-col rounded border border-secondary-800 p-4 dark:border-primary-200 lg:w-1/2"
        >
          <button
            type="button"
            className="col-span-2 rounded bg-secondary-400 px-4 pb-2.5 pt-2 text-base-50 transition-colors hover:bg-secondary-500 active:bg-secondary-600 dark:bg-primary-600 dark:hover:bg-primary-700 dark:active:bg-primary-800"
          >
            Submit Entry
          </button>

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
      </section>
    </>
  );
};

CreateJournalEntryPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default CreateJournalEntryPage;
