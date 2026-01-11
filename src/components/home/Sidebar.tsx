'use client';

import { Box, Paper } from "@mui/material";
import { DifficultyFilters } from "./DifficultyFilters";

export const Sidebar = () => {
  return (
    <Box
      component="aside"
      sx={{
        display: { xs: 'none', md: 'block' },
        width: 250,
        flexShrink: 0,
        pr: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 2,
          top: 24,
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'divider',
        }}
      >
        <DifficultyFilters />
      </Paper>
    </Box>
  );
}