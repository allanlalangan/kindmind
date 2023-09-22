import { useUser } from "@clerk/nextjs";
import { useEditor } from "@tiptap/react";
import { useRouter } from "next/router";
import { useState, type ReactElement } from "react";

import DashboardLayout from "~/components/DashboardLayout";
import JournalLayout from "~/components/JournalLayout";
import { api } from "~/utils/api";
import StarterKit from "@tiptap/starter-kit";
import TipTapEditor from "~/components/TipTapEditor";

export default function EntryPage() {
  const user = useUser();
  const router = useRouter();
  const { id } = router.query;
  const [error, setError] = useState<string | false>(false);

  const [isEditable, setIsEditable] = useState(false);
  const [titleInputValue, setTitleInputValue] = useState("");
  const [content, setContent] = useState<string | null>(null);
  const [tempContent, setTempContent] = useState(content);

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
    content: content,
    editable: true,
    onUpdate: ({ editor }) => {
      setTempContent?.(editor.getHTML());
    },
  });

  let getEntry;
  let deleteEntry;

  if (!user.isSignedIn) {
    getEntry = api.entries.getGuestEntry.useQuery(
      { id: id as string },
      {
        onSuccess: (data) => {
          if (!!data) {
            console.log("success", data);
            editor?.commands.setContent(data.content);
            setContent(data.content);
            setTempContent(data.content);
            setTitleInputValue(data.title);
          }
        },
        onError: (error) => {
          setError(error.message);
        },
        refetchOnWindowFocus: false,
      }
    );

    deleteEntry = api.entries.deleteGuestEntry.useMutation({
      onSuccess: () => {
        console.log(`Deleted journal entry: ${data?.title}`);
        void router.push("/journal?redirected=true");
      },
    });
  } else {
    getEntry = api.entries.getEntry.useQuery(
      { id: id as string },
      {
        onSuccess: (data) => {
          if (!!data) {
            console.log("success", data);
            editor?.commands.setContent(data.content);
            setContent(data.content);
            setTempContent(data.content);
            setTitleInputValue(data.title);
          }
        },
        onError: (error) => {
          setError(error.message);
        },
        refetchOnWindowFocus: false,
      }
    );

    deleteEntry = api.entries.deleteEntry.useMutation({
      onSuccess: () => {
        console.log(`Deleted journal entry: ${data?.title}`);
        void router.push("/journal?redirected=true");
      },
    });
  }

  const { data, isLoading, isError } = getEntry;
  const { mutate } = deleteEntry;
  const onDelete = () => {
    mutate({
      id: id as string,
    });
  };

  return (
    <section className="flex w-full flex-col border-t border-light-500 p-4 dark:border-base-800 lg:border-none xl:w-2/3">
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          {!data ? (
            <span>{error}</span>
          ) : (
            <>
              {!isEditable && (
                <h3 className="mb-4 font-dm text-4xl">{titleInputValue}</h3>
              )}
              {!!content && (
                <>
                  <TipTapEditor
                    editor={editor}
                    content={content}
                    titleInputValue={titleInputValue}
                    setTitleInputValue={setTitleInputValue}
                  />
                  <button
                    onClick={onDelete}
                    className="rounded bg-red-500 px-4 py-2 text-base-50 hover:bg-red-600 active:bg-red-700"
                  >
                    Delete
                  </button>
                </>
              )}
            </>
          )}
        </>
      )}
    </section>
  );
}

EntryPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardLayout pageTitle="Journal">
      <JournalLayout>{page}</JournalLayout>
    </DashboardLayout>
  );
};
