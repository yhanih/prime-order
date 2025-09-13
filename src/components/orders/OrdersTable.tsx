import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { StatusBadge } from '../ui/StatusBadge';
import { OrderPagination } from '../ui/OrderPagination';
import { MoreHorizontal } from 'lucide-react';
import { Order } from '@/data/mockData';

interface OrdersTableProps {
  orders: Order[];
  currentPage: number;
  onPageChange: (page: number) => void;
}

interface OrderRowProps {
  order: Order;
}

function OrderRow({ order }: OrderRowProps) {
  return (
    <tr className="border-b border-[hsl(var(--line))] hover:bg-gray-50/50 transition-colors">
      {/* Product Name */}
      <td className="py-4 px-6">
        <div className="flex flex-col min-w-[260px]">
          <span className="font-semibold text-[hsl(var(--text))] text-sm">{order.productName}</span>
          <span className="text-xs text-[hsl(var(--muted))] mt-0.5">{order.productCategory}</span>
        </div>
      </td>

      {/* Customer Name */}
      <td className="py-4 px-6">
        <div className="flex items-center gap-3 min-w-[220px]">
          <Avatar className="w-8 h-8">
            <AvatarImage src={order.customerAvatar} />
            <AvatarFallback className="text-xs">
              {order.customerName.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium text-[hsl(var(--text))] text-sm">{order.customerName}</span>
            <span className="text-xs text-[hsl(var(--muted))] mt-0.5">{order.productCategory}</span>
          </div>
        </div>
      </td>

      {/* Order ID */}
      <td className="py-4 px-6">
        <div className="flex flex-col min-w-[220px]">
          <span className="font-mono text-[hsl(var(--text))] text-sm">{order.orderId}</span>
          <span className="text-xs text-[hsl(var(--muted))] mt-0.5">{order.createdDate}</span>
        </div>
      </td>

      {/* Amount */}
      <td className="py-4 px-6 text-right">
        <div className="flex flex-col min-w-[140px]">
          <span className="font-semibold text-[hsl(var(--text))] text-sm">$ {order.amount}</span>
          <span className="text-xs text-[hsl(var(--muted))] mt-0.5">{order.paymentMethod}</span>
        </div>
      </td>

      {/* Status */}
      <td className="py-4 px-6 text-center">
        <div className="min-w-[140px] flex justify-center">
          <StatusBadge status={order.status} />
        </div>
      </td>

      {/* Actions */}
      <td className="py-4 px-6 text-right">
        <div className="flex items-center justify-end gap-2 min-w-[140px]">
          <Button 
            variant="outline" 
            size="sm" 
            className="h-8 px-3 text-xs bg-white border-gray-200"
          >
            Details
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 w-8 p-0 hover:bg-gray-100"
          >
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </td>
    </tr>
  );
}

export function OrdersTable({ orders, currentPage, onPageChange }: OrdersTableProps) {
  const itemsPerPage = 8;
  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOrders = orders.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-white rounded-[var(--radius-card)] shadow-[0_8px_24px_rgba(16,24,40,0.08)] overflow-hidden">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-[hsl(var(--line))]">
            <tr>
              <th className="py-3 px-6 text-left text-xs font-semibold text-[hsl(var(--text))] uppercase tracking-wider">
                Product name
              </th>
              <th className="py-3 px-6 text-left text-xs font-semibold text-[hsl(var(--text))] uppercase tracking-wider">
                Customer name
              </th>
              <th className="py-3 px-6 text-left text-xs font-semibold text-[hsl(var(--text))] uppercase tracking-wider">
                Order id
              </th>
              <th className="py-3 px-6 text-right text-xs font-semibold text-[hsl(var(--text))] uppercase tracking-wider">
                Amount
              </th>
              <th className="py-3 px-6 text-center text-xs font-semibold text-[hsl(var(--text))] uppercase tracking-wider">
                Status
              </th>
              <th className="py-3 px-6 text-right text-xs font-semibold text-[hsl(var(--text))] uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedOrders.map((order) => (
              <OrderRow key={order.id} order={order} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-[hsl(var(--line))]">
        <OrderPagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}