import { Search, Calendar, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface OrderFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  statusFilter: string;
  onStatusChange: (value: string) => void;
}

export function OrderFilters({ 
  searchTerm, 
  onSearchChange, 
  statusFilter, 
  onStatusChange 
}: OrderFiltersProps) {
  return (
    <div className="flex items-center justify-between">
      {/* Search */}
      <div className="relative w-80">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[hsl(var(--muted))]" />
        <Input
          placeholder="Search your order id"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-white border-gray-200 rounded-[var(--radius-input)] h-10 text-sm"
        />
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        {/* Date Picker */}
        <Button 
          variant="outline" 
          className="h-10 px-4 gap-2 bg-white border-gray-200 text-[hsl(var(--text))] font-normal"
        >
          <Calendar className="w-4 h-4" />
          June, 2025
        </Button>

        {/* Status Filter */}
        <Select value={statusFilter} onValueChange={onStatusChange}>
          <SelectTrigger className="w-40 h-10 bg-white border-gray-200">
            <SelectValue placeholder="All status ▾" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All status">All status</SelectItem>
            <SelectItem value="Confirm">Confirm</SelectItem>
            <SelectItem value="Cancel">Cancel</SelectItem>
            <SelectItem value="warning">Warning</SelectItem>
          </SelectContent>
        </Select>

        {/* Add Order Button */}
        <Button className="h-10 px-6 gap-2 bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-white">
          <Plus className="w-4 h-4" />
          Add order
        </Button>
      </div>
    </div>
  );
}