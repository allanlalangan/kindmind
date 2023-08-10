export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="w-full p-2">
        <h1 className="font-serif text-xl dark:text-primary-300">Dashboard</h1>
      </header>
      <main className="p-2">{children}</main>
    </>
  );
}
