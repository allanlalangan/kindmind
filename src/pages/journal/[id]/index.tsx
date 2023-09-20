import { useRouter } from "next/router";
import { type ReactElement } from "react";

import DashboardLayout from "~/components/DashboardLayout";
import JournalLayout from "~/components/JournalLayout";

export default function EntryPage() {
  const router = useRouter();
  const { id } = router.query;

  return <span className="px-1">Entry ID: {id}</span>;
}

EntryPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardLayout pageTitle="Journal">
      <JournalLayout>{page}</JournalLayout>
    </DashboardLayout>
  );
};
