interface StatusBadgeProps {
  status: 'Confirm' | 'Cancel' | 'warning';
}

const styles = {
  Confirm: "text-emerald-700 bg-emerald-50 ring-1 ring-emerald-200",
  Cancel: "text-rose-700 bg-rose-50 ring-1 ring-rose-200",
  warning: "text-amber-700 bg-amber-50 ring-1 ring-amber-200",
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span 
      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${styles[status]}`}
      aria-label={`Status: ${status}`}
    >
      {status}
    </span>
  );
}