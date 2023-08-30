import { type ReactElement } from "react";
import DashboardLayout from "~/components/DashboardLayout";

export default function ChartsPage() {
  return (
    <>
      <h1 className="font-serif text-xl dark:text-primary-300">Charts</h1>
    </>
  );
}

ChartsPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
