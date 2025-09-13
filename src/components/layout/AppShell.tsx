import { ReactNode } from 'react';
import { AppSidebar } from './Sidebar';
import { TopHeader } from './TopHeader';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

interface AppShellProps {
  children: ReactNode;
}
export function AppShell({
  children
}: AppShellProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-[#f6f7fb] text-slate-900 flex w-full">
        <AppSidebar />

        <main className="flex-1 min-w-0 flex flex-col">
          <header className="sticky top-0 z-30 bg-white border-b flex items-center">
            <SidebarTrigger className="ml-4" />
            <div className="flex-1">
              <TopHeader />
            </div>
          </header>

          <div className="px-6 py-6 flex-1">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}