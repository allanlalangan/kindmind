import { type ReactElement } from "react";
import DashboardLayout from "~/components/DashboardLayout";

export default function DashboardPage() {
  return (
    <>
      <h1 className="p-4 font-dm text-2xl">Dashboard</h1>
    </>
  );
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout pageTitle="Dashboard">{page}</DashboardLayout>;
};
