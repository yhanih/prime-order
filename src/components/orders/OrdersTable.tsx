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
    <tr className="group border-b border-[hsl(var(--line))] hover:bg-slate-50 transition-colors md:table-row grid rounded-xl border p-3 md:p-0">
      {/* Product Name */}
      <td className="py-4 px-6">
        <div className="flex flex-col">
          <span className="font-semibold text-[#0f172a] text-sm">{order.productName}</span>
          <span className="meta">{order.productCategory}</span>
        </div>
      </td>

      {/* Customer Name */}
      <td className="py-4 px-6">
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src={order.customerAvatar} />
            <AvatarFallback className="text-xs">
              {order.customerName.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium text-[#0f172a] text-sm">{order.customerName}</span>
            <span className="meta">{order.productCategory}</span>
          </div>
        </div>
      </td>

      {/* Order ID */}
      <td className="py-4 px-6">
        <div className="flex flex-col">
          <span className="font-mono text-slate-700 text-sm">{order.orderId}</span>
          <span className="meta">{order.createdDate}</span>
        </div>
      </td>

      {/* Amount */}
      <td className="py-4 px-6 text-right">
        <div className="flex flex-col">
          <span className="font-medium text-[#0f172a] text-sm">$ {order.amount}</span>
          <span className="meta">{order.paymentMethod}</span>
        </div>
      </td>

      {/* Status */}
      <td className="py-4 px-6 text-center">
        <StatusBadge status={order.status} />
      </td>

      {/* Actions */}
      <td className="py-4 px-6 text-right">
        <div className="flex items-center justify-end gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="h-8 px-3 text-xs bg-white border-gray-200"
          >
            Details
          </Button>
          <MoreHorizontal className="inline-block ml-2 opacity-60 group-hover:opacity-100 transition-opacity w-4 h-4 text-gray-400" />
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
        <table className="w-full table-fixed">
          <colgroup>
            <col className="w-[26%]" /> {/* Product name */}
            <col className="w-[22%]" /> {/* Customer name */}
            <col className="w-[22%]" /> {/* Order id */}
            <col className="w-[12%]" /> {/* Amount */}
            <col className="w-[10%]" /> {/* Status */}
            <col className="w-[8%]"  /> {/* Action */}
          </colgroup>
          <thead className="sticky top-0 z-10 bg-slate-50/95 backdrop-blur supports-[backdrop-filter]:bg-slate-50/75 shadow-[0_1px_0_0_rgba(0,0,0,0.04)] hidden md:table-header-group">
            <tr>
              <th className="py-3 px-6 text-left th">
                Product name
              </th>
              <th className="py-3 px-6 text-left th">
                Customer name
              </th>
              <th className="py-3 px-6 text-left th">
                Order id
              </th>
              <th className="py-3 px-6 text-right th">
                Amount
              </th>
              <th className="py-3 px-6 text-center th">
                Status
              </th>
              <th className="py-3 px-6 text-right th">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="grid gap-3 md:table-row-group">
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