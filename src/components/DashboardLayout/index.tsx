import ThemeSwitch from "../ThemeSwitch";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="w-full ">
        <ThemeSwitch />
      </header>
      <h1 className="mx-2 font-serif text-xl dark:text-primary-300">
        Dashboard
      </h1>
      <main className="p-2">{children}</main>
    </>
  );
}
