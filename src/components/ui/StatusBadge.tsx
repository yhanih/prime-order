interface StatusBadgeProps {
  status: 'Confirm' | 'Cancel' | 'warning';
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const statusClasses = {
    Confirm: 'status-chip status-confirm',
    Cancel: 'status-chip status-cancel',
    warning: 'status-chip status-warning'
  };

  return (
    <span className={statusClasses[status]}>
      {status}
    </span>
  );
}