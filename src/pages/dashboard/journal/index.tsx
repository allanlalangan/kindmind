import { type ReactElement } from "react";
import DashboardLayout from "~/components/DashboardLayout";

export default function JournalPage() {
  return (
    <>
      <h1 className="font-serif text-xl dark:text-primary-300">Journal</h1>
    </>
  );
}

JournalPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
