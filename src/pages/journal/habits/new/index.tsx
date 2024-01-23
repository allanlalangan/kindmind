import { type ReactElement } from "react";
import DashboardLayout from "~/components/DashboardLayout";
import NewHabitForm from "~/components/NewHabitForm";

export default function NewHabitPage() {
  return (
    <section className="col-span-12 row-span-full flex flex-col gap-2 p-2 lg:gap-4 lg:p-4">
      <NewHabitForm />
    </section>
  );
}

NewHabitPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout pageTitle="Journal">{page}</DashboardLayout>;
};
