import { useUser } from "@clerk/nextjs";
import { useEditor } from "@tiptap/react";
import { useRouter } from "next/router";
import { useState, type ReactElement, useRef, useEffect } from "react";

import DashboardLayout from "~/components/DashboardLayout";
import { api } from "~/utils/api";
import StarterKit from "@tiptap/starter-kit";
import TipTapEditor from "~/components/TipTapEditor";
import Link from "next/link";

export default function EntryPage() {
  const user = useUser();
  const router = useRouter();
  const titleInputRef = useRef<HTMLInputElement>(null);
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
          "min-h-[25vh] prose p-4 pb-16 md:pb-4 bg-light-100 dark:bg-base-700 rounded-b border-light-500 border dark:border-base-600 dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:dark:outline-base-200 focus:outline-light-900",
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
  let updateEntry;

  if (!user.isSignedIn) {
    getEntry = api.entries.getGuestEntry.useQuery(
      { id: id as string },
      {
        onSuccess: (data) => {
          if (!!data) {
            editor?.setEditable(false);
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

    updateEntry = api.entries.updateGuestEntry.useMutation({
      onSuccess: () => {
        void refetch();
      },
    });

    deleteEntry = api.entries.deleteGuestEntry.useMutation({
      onSuccess: () => {
        void router.push("/journal");
      },
    });
  } else {
    getEntry = api.entries.getEntry.useQuery(
      { id: id as string },
      {
        onSuccess: (data) => {
          if (!!data) {
            editor?.setEditable(false);
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

    updateEntry = api.entries.updateEntry.useMutation({
      onSuccess: (data) => {
        void refetch();
      },
    });

    deleteEntry = api.entries.deleteEntry.useMutation({
      onSuccess: () => {
        void router.push("/journal");
      },
    });
  }

  const { data, isLoading, isError, refetch } = getEntry;
  const { mutate: mutateUpdate } = updateEntry;
  const { mutate: mutateDelete } = deleteEntry;
  const onDelete = () => {
    mutateDelete({
      id: id as string,
    });
  };

  useEffect(() => {
    if (titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, [editor?.isEditable]);

  return (
    <>
      <div className="col-span-12 row-start-1 flex items-baseline gap-2 border-b border-light-500 p-2 font-dm text-2xl dark:border-base-800 lg:row-span-1 lg:p-4">
        <Link className="underline-offset-2 hover:underline" href="/journal">
          Journal
        </Link>
        <span className="text-xl">&gt;</span>
        <time className="text-base" dateTime={data?.createdAt.toDateString()}>
          {data?.createdAt.toDateString()}
        </time>
        <span className="text-xl">&gt;</span>
        <span className="text-base">{data?.title}</span>
      </div>
      <section className="col-span-12 row-span-6 row-start-2 overflow-y-scroll border-light-500 p-2 dark:border-base-800 lg:p-4">
        <div className="flex min-h-screen w-full flex-col lg:min-h-0">
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            <>
              {!data && isError ? (
                <span>{error}</span>
              ) : (
                <>
                  {!!data && (
                    <div className="mb-2 grid grid-cols-12 gap-1">
                      {editor?.isEditable && (
                        <button
                          disabled={
                            tempContent === data.content &&
                            titleInputValue === data.title
                          }
                          onClick={() => {
                            editor?.setEditable(!editor.isEditable);
                            mutateUpdate({
                              id: id as string,
                              title: titleInputValue ?? "untitled",
                              content: tempContent ?? "",
                            });
                          }}
                          className="col-span-3 rounded bg-base-800 px-4 py-2 text-sm text-base-50 transition active:bg-base-900 enabled:hover:bg-base-700 disabled:bg-neutral-400 disabled:text-neutral-700 dark:bg-base-200 dark:text-base-950 dark:active:bg-base-300 dark:enabled:hover:bg-base-100 disabled:dark:bg-neutral-400 disabled:dark:text-neutral-700"
                        >
                          Save
                        </button>
                      )}
                      <button
                        onClick={() => {
                          editor?.setEditable(!editor.isEditable);
                          if (!editor?.isEditable) {
                            editor?.commands.setContent(content);
                            setTempContent(content);
                            setTitleInputValue(data.title);
                          }
                        }}
                        className="col-span-3 col-start-7 rounded bg-base-800 px-4 py-2 text-sm text-base-50 transition hover:bg-base-700 active:bg-base-900 dark:bg-base-200 dark:text-base-950 dark:hover:bg-base-100 dark:active:bg-base-300"
                      >
                        {!editor?.isEditable ? "Edit" : "Cancel"}
                      </button>
                      <button
                        onClick={onDelete}
                        className="col-span-3 col-start-10 rounded bg-red-500 px-4 py-2 text-sm text-base-50 transition hover:bg-red-600 active:bg-red-700"
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
                        titleInputRef={titleInputRef}
                        titleInputValue={titleInputValue}
                        setTitleInputValue={setTitleInputValue}
                      />
                    </>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}

EntryPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout pageTitle="Journal">{page}</DashboardLayout>;
};
