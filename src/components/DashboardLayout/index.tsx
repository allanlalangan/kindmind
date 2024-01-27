import ThemeSwitch from "../ThemeSwitch";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

export default function DashboardLayout({
  children,
  pageTitle,
}: {
  children: React.ReactNode;
  pageTitle?: string;
}) {
  const router = useRouter();
  const routeTree = router.route.slice(1).split("/");
  console.log(routeTree);
  const currentRoute = routeTree[routeTree.length - 1];
  console.log(currentRoute);
  return (
    <>
      <Head>
        <title>{`kindMind | ${pageTitle}`}</title>
        <meta name="description" content="Journal + Mood & Habit Tracker App" />
      </Head>
      <div className="grid h-screen grid-cols-12 grid-rows-24">
        <header className="col-span-12 row-span-1 grid grid-cols-12 border-b border-light-500 bg-light-300 px-2 py-2 transition dark:border-base-800 dark:bg-base-900 lg:col-start-3 lg:col-end-13 lg:justify-end">
          {currentRoute !== "dashboard" ? (
            <div className="col-span-8 flex items-center gap-1">
              <div className="flex items-baseline gap-1.5">
                {routeTree?.map((route, i) => (
                  <>
                    {route !== "[id]" && (
                      <span key={i} className="capitalize">
                        route
                      </span>
                    )}
                    {i !== routeTree.length - 1 &&
                      routeTree[i + 1] !== "[id]" && (
                        <span className="text-xl">&gt;</span>
                      )}
                  </>
                ))}
              </div>
            </div>
          ) : (
            <Link
              href="/"
              className="col-span-8 flex items-center text-xl underline-offset-2 hover:underline lg:sr-only"
            >
              kindMind
            </Link>
          )}
          <div className="col-span-4 col-start-9 flex items-center justify-end">
            <ThemeSwitch />
          </div>
        </header>
        <aside className="fixed bottom-0 z-10 row-span-full flex h-16 w-full flex-col justify-center bg-light-400 px-4 py-2 transition dark:bg-base-950 lg:col-start-1 lg:col-end-3 lg:h-screen lg:w-1/6 lg:-translate-x-0 lg:items-start lg:justify-start">
          <Link
            href="/"
            className="hidden font-dm text-3xl tracking-wide underline-offset-2 hover:underline lg:block"
          >
            kindMind
          </Link>
          <nav className="flex items-center justify-evenly lg:mt-2 lg:flex-col lg:items-start">
            <Link
              href="/dashboard"
              className="underline-offset-2 hover:underline"
            >
              Dashboard
            </Link>
            <Link
              href="/journal/habits"
              className="underline-offset-2 hover:underline"
            >
              Habits
            </Link>
            <Link
              href="/journal/emotions"
              className="underline-offset-2 hover:underline"
            >
              Emotions
            </Link>
            <Link
              href="/journal"
              className="underline-offset-2 hover:underline"
            >
              Journal
            </Link>
          </nav>
        </aside>
        <main className="col-span-12 row-span-full row-start-2 mb-16 grid grid-cols-12 grid-rows-12 lg:col-start-3 lg:col-end-13 lg:mb-0">
          {children}
        </main>
      </div>
    </>
  );
}
