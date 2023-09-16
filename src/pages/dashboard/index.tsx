import { type ReactElement } from "react";
import DashboardLayout from "~/components/DashboardLayout";

export default function DashboardPage() {
  return (
    <>
      <h1 className="font-dm text-xl dark:text-primary-300">Dashboard</h1>
    </>
  );
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout pageTitle="Dashboard">{page}</DashboardLayout>;
};
