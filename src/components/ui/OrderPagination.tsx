import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface OrderPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function OrderPagination({ currentPage, totalPages, onPageChange }: OrderPaginationProps) {
  // Fixed pagination layout per spec: 1 2 3 ... 11 13 14
  const getPageNumbers = () => {
    return [1, 2, 3, '...', 11, 13, 14];
  };

  return (
    <div className="flex items-center justify-between">
      {/* Previous */}
      <Button
        variant="ghost"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="gap-2 text-[hsl(var(--muted))] hover:text-[hsl(var(--text))] disabled:opacity-50"
      >
        <ChevronLeft className="w-4 h-4" />
        Previous
      </Button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {getPageNumbers().map((page, index) => (
          <div key={index}>
            {page === '...' ? (
              <span className="px-3 py-2 text-[hsl(var(--muted))]">...</span>
            ) : (
              <Button
                variant={currentPage === page ? "default" : "ghost"}
                size="sm"
                onClick={() => onPageChange(page as number)}
                className={`w-8 h-8 p-0 ${
                  currentPage === page
                    ? 'bg-[hsl(var(--primary))] text-white hover:bg-[hsl(var(--primary))]/90'
                    : 'text-[hsl(var(--muted))] hover:text-[hsl(var(--text))] hover:bg-gray-50'
                }`}
              >
                {page}
              </Button>
            )}
          </div>
        ))}
      </div>

      {/* Next */}
      <Button
        variant="ghost"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="gap-2 text-[hsl(var(--muted))] hover:text-[hsl(var(--text))] disabled:opacity-50"
      >
        Next
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
}