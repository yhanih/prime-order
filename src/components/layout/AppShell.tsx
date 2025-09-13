import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { TopHeader } from './TopHeader';
interface AppShellProps {
  children: ReactNode;
}
export function AppShell({
  children
}: AppShellProps) {
  return <div className="min-h-screen p-6">
      <div className="dashboard-frame">
        <div className="flex min-h-[calc(100vh-3rem)]">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            
            <main className="flex-1 p-6">
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>;
}