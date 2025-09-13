interface SegmentedControlProps<T extends string> {
  options: T[];
  value: T;
  onChange: (value: T) => void;
}

export function SegmentedControl<T extends string>({ 
  options, 
  value, 
  onChange 
}: SegmentedControlProps<T>) {
  return (
    <div className="flex bg-gray-100 rounded-lg p-1">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`
            px-4 py-2 text-sm font-medium rounded-md transition-all
            ${value === option
              ? 'bg-[hsl(var(--primary))] text-white shadow-sm'
              : 'text-[hsl(var(--muted))] hover:text-[hsl(var(--text))]'
            }
          `}
        >
          {option}
        </button>
      ))}
    </div>
  );
}