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
  const [error, setError] = useState<string | false>(false);

  let getEntry;
  let deleteEntry;

  if (!user.isSignedIn) {
    getEntry = api.entries.getGuestEntry.useQuery(
      { id: id as string },
      {
        onSuccess: (data) => {
          console.log("success", data);
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
      {isLoading && <span>Loading...</span>}
      {isError && <span>{error}</span>}
      {data && (
        <>
          <span className="font-dm text-2xl">{data.title}</span>
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
