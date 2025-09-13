import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface OrderPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function OrderPagination({ currentPage, totalPages, onPageChange }: OrderPaginationProps) {
  const getPageNumbers = () => {
    const pages = [];
    
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, '...', totalPages - 1, totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, 2, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    
    return pages;
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