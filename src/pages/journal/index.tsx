import { type ReactElement } from "react";
import DashboardLayout from "~/components/DashboardLayout";
import JournalLayout from "~/components/JournalLayout";

export default function JournalPage() {
  return <></>;
}

JournalPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardLayout pageTitle="Journal">
      <JournalLayout>{page}</JournalLayout>
    </DashboardLayout>
  );
};
