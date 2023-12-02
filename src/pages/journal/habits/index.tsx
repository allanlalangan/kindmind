import Link from "next/link";
import { type ReactElement } from "react";
import DashboardLayout from "~/components/DashboardLayout";

export default function HabitsPage() {
  return (
    <section className="col-span-12 flex flex-col gap-2 p-2 lg:gap-4 lg:p-4">
      <h2 className="text-lg">Habits</h2>
    </section>
  );
}

HabitsPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout pageTitle="Journal">{page}</DashboardLayout>;
};
