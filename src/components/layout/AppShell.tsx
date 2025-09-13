import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { TopHeader } from './TopHeader';
interface AppShellProps {
  children: ReactNode;
}
export function AppShell({
  children
}: AppShellProps) {
  return (
    <div className="min-h-screen bg-[#f6f7fb] text-slate-900">
      <div className="flex">
        <aside className="w-60 shrink-0 bg-white border-r">
          <Sidebar />
        </aside>

        <main className="flex-1 min-w-0">
          <header className="sticky top-0 z-30 bg-white border-b">
            <TopHeader />
          </header>

          <div className="px-6 py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}