import { useState } from 'react';
import { KpiSection } from './KpiSection';
import { OrderFilters } from './OrderFilters';
import { OrdersTable } from './OrdersTable';
import { SegmentedControl } from '../ui/SegmentedControl';
import { mockOrders, kpiData } from '@/data/mockData';

export function OrderListPage() {
  const [timeGranularity, setTimeGranularity] = useState<'Weekly' | 'Monthly' | 'Yearly'>('Weekly');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All status');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredOrders = mockOrders.filter(order => {
    const matchesSearch = searchTerm === '' || 
      order.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'All status' || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-[22px] font-semibold leading-7 text-[hsl(var(--text))]">Order list</h1>
        
        <div className="flex items-center gap-4">
          <SegmentedControl
            options={['Weekly', 'Monthly', 'Yearly'] as const}
            value={timeGranularity}
            onChange={(value) => setTimeGranularity(value as 'Weekly' | 'Monthly' | 'Yearly')}
          />
          <div className="text-sm text-[hsl(var(--muted))]">
            Year ▾ / 2025
          </div>
        </div>
      </div>

      {/* KPIs */}
      <KpiSection data={kpiData} />

      {/* Filters */}
      <OrderFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
      />

      {/* Table */}
      <OrdersTable 
        orders={filteredOrders}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}