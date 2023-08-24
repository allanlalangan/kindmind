import ThemeSwitch from "../ThemeSwitch";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="grid h-screen grid-cols-12 grid-rows-24">
        <header className="col-span-12 flex h-full items-center justify-between border-b border-light-500 bg-light-300 px-4 dark:border-b dark:border-base-800 dark:bg-base-900 lg:col-start-3 lg:col-end-13 lg:justify-end">
          <span className="font-display text-3xl uppercase tracking-wide text-primary-600 dark:text-tertiary-300 lg:hidden">
            Stars
          </span>
          <ThemeSwitch />
        </header>
        <aside className="fixed -left-1/3 row-span-full row-start-1 w-1/3 bg-light-400 px-4 py-2 dark:bg-base-950 lg:static lg:col-start-1 lg:col-end-3 lg:w-full">
          <span className="font-display text-3xl uppercase tracking-wide text-primary-600 dark:text-tertiary-300">
            Stars
          </span>
          <ul className="mt-4">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </aside>
        <main className="col-span-12 row-span-full row-start-2 flex flex-col p-4 lg:col-start-3 lg:col-end-13">
          <h1 className="font-serif text-xl dark:text-primary-300">
            Dashboard
          </h1>
          {children}
        </main>
      </div>
    </>
  );
}
