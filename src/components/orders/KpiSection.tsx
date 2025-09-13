interface KpiData {
  totalOrders: string;
  newOrders: string;
  completedOrders: string;
  cancelledOrders: string;
}

interface KpiSectionProps {
  data: KpiData;
}

interface KpiItemProps {
  label: string;
  value: string;
}

function KpiItem({ label, value }: KpiItemProps) {
  return (
    <div className="flex flex-col">
      <span className="text-sm text-[hsl(var(--muted))] font-medium mb-1">{label}</span>
      <span className="text-2xl font-bold text-[hsl(var(--text))]">{value}</span>
    </div>
  );
}

export function KpiSection({ data }: KpiSectionProps) {
  return (
    <div className="grid grid-cols-4 gap-8">
      <KpiItem label="Total orders" value={data.totalOrders} />
      <KpiItem label="New orders" value={data.newOrders} />
      <KpiItem label="Completed orders" value={data.completedOrders} />
      <KpiItem label="Cancelled orders" value={data.cancelledOrders} />
    </div>
  );
}