'use client';

import { Button } from "@/components/ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}

export const Pagination =({
  currentPage,
  totalPages,
  onPrev,
  onNext,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      <span>
        Página {currentPage} de {totalPages}
      </span>
      <div className="flex gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={onPrev}
          disabled={currentPage === 1}
        >
          Anterior
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={onNext}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
}