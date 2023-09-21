import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useState, type ReactElement } from "react";

import DashboardLayout from "~/components/DashboardLayout";
import JournalLayout from "~/components/JournalLayout";
import { api } from "~/utils/api";

interface entry {
  content: string;
  createdAt: Date;
  id: string;
  title: string;
  updatedAt: Date;
  userId: null | string;
}

export default function EntryPage() {
  const user = useUser();
  const router = useRouter();
  const { id } = router.query;
  const [entry, setEntry] = useState<entry | null>(null);
  const [error, setError] = useState<string | false>(false);

  let getEntry;
  let deleteEntry;

  if (!user.isSignedIn) {
    getEntry = api.entries.getGuestEntry.useQuery(
      { id: id as string },
      {
        onSuccess: (data) => {
          if (!!data) {
            setError(false);
            setEntry(data);
          }
        },
        onError: (error) => {
          setError(error.message);
        },
      }
    );

    deleteEntry = api.entries.deleteGuestEntry.useMutation({
      onSuccess: () => {
        console.log(`Deleted journal entry: ${entry?.title}`);
        void router.push("/journal").then(router.reload);
      },
    });
  } else {
    getEntry = api.entries.getEntry.useQuery(
      { id: id as string },
      {
        onSuccess: (data) => {
          if (!!data) {
            setError(false);
            setEntry(data);
          }
        },
        onError: (error) => {
          setError(error.message);
        },
      }
    );

    deleteEntry = api.entries.deleteEntry.useMutation({
      onSuccess: () => {
        console.log(`Deleted journal entry: ${entry?.title}`);
        void router.push("/journal").then(router.reload);
      },
    });
  }
  const { mutate } = deleteEntry;
  const onDelete = () => {
    mutate({
      id: id as string,
    });
  };

  return (
    <section className="flex w-full flex-col border-t border-light-500 p-4 dark:border-base-800 lg:border-none xl:w-2/3">
      {error && <span>{error}</span>}
      {entry && (
        <>
          <span className="px-1">Entry ID: {id}</span>
          <span>{entry.title}</span>
          <button
            onClick={onDelete}
            className="rounded bg-red-500 px-4 py-2 text-base-50 hover:bg-red-600 active:bg-red-700"
          >
            Delete
          </button>
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
