import { Search, HelpCircle, Bell, MessageCircle, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export function TopHeader() {
  return (
    <header className="flex items-center justify-between p-6 border-b border-[hsl(var(--line))] bg-white">
      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[hsl(var(--muted))]" />
          <Input
            placeholder="Search something here"
            className="pl-10 bg-gray-50 border-gray-200 rounded-[var(--radius-input)] h-10 text-sm"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        {/* Help */}
        <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
          <HelpCircle className="w-5 h-5 text-[hsl(var(--muted))]" />
        </button>

        {/* Notifications */}
        <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors relative">
          <Bell className="w-5 h-5 text-[hsl(var(--muted))]" />
          <Badge className="absolute -top-1 -right-1 w-3 h-3 p-0 bg-red-500 text-white text-xs flex items-center justify-center">
            •
          </Badge>
        </button>

        {/* Messages */}
        <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
          <MessageCircle className="w-5 h-5 text-[hsl(var(--muted))]" />
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-[hsl(var(--line))]">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://api.dicebear.com/7.x/initials/svg?seed=Sahariar.Sajib" />
            <AvatarFallback>SS</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-[hsl(var(--text))]">Sahariar Sajib</span>
            <span className="text-xs text-[hsl(var(--muted))]">sahariarsajib@gmail.com</span>
          </div>
          <ChevronDown className="w-4 h-4 text-[hsl(var(--muted))]" />
        </div>
      </div>
    </header>
  );
}