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
  const [titleInputValue, setTitleInputValue] = useState("");
  const [content, setContent] = useState<string | null>(null);
  const [tempContent, setTempContent] = useState(content);

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
          "prose p-4 pb-16 md:pb-4 bg-light-100 dark:bg-base-700 rounded-b border-light-500 border dark:border-base-600 dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:dark:outline-base-200 focus:outline-light-900",
      },
    },
    content,
    editable: false,
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
          {!data && isError ? (
            <span>{error}</span>
          ) : (
            <>
              {!!data && (
                <div className="mb-2 flex w-full items-center justify-end gap-2">
                  <button
                    onClick={() => {
                      editor?.setEditable(!editor.isEditable);
                      if (!editor?.isEditable) {
                        editor?.commands.setContent(content);
                        setTempContent(content);
                      }
                    }}
                    className="w-fit rounded bg-base-800 px-4 py-2 text-base-50 transition hover:bg-base-700 active:bg-base-900 dark:bg-base-200 dark:text-base-950 dark:hover:bg-base-100 dark:active:bg-base-300"
                  >
                    {!editor?.isEditable ? "Edit" : "Discard Changes"}
                  </button>
                  <button
                    onClick={onDelete}
                    className="rounded bg-red-500 px-4 py-2 text-base-50 transition hover:bg-red-600 active:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              )}

              {!editor?.isEditable && (
                <h3 className="mb-2 py-2 font-dm text-4xl">
                  {titleInputValue}
                </h3>
              )}

              {!!content && (
                <>
                  <TipTapEditor
                    isEditable={editor?.isEditable}
                    editor={editor}
                    content={content}
                    titleInputValue={titleInputValue}
                    setTitleInputValue={setTitleInputValue}
                  />
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
