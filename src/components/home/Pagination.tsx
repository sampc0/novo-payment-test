'use client';

import { Button } from "@mui/material";

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
    <div>
      <span>
        Página {currentPage} de {totalPages}
      </span>
      <div>
        <Button
          onClick={onPrev}
          disabled={currentPage === 1}
        >
          Anterior
        </Button>
        <Button
          onClick={onNext}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
}