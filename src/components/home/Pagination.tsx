"use client";

import { Box, Button, Typography, Stack } from "@mui/material";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPrev,
  onNext,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 2,
        py: 2,
      }}
    >
      <Typography variant="body2" color="text.secondary">
        {currentPage} / {totalPages}
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined"
          onClick={onPrev}
          disabled={currentPage === 1}
        >
          Prev
        </Button>
        <Button
          variant="contained"
          onClick={onNext}
          disabled={currentPage === totalPages}
        >
         Next 
        </Button>
      </Stack>
    </Box>
  );
};
