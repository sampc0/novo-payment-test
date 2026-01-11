'use client';

import { useRecipesStore } from "@/store/recipeStore";
import type { Difficulty } from "@/types/recipes";
import { Box, Button, Typography, Paper, Stack } from "@mui/material";

const difficulties: (Difficulty | 'All')[] = ['All', 'Easy', 'Medium', 'Hard'];

export const Sidebar = () => {
  const { selectedDifficulty, setSelectedDifficulty } = useRecipesStore();

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
        <Typography
          variant="h6"
          gutterBottom
          fontWeight={700}
        >
          Difficulty
        </Typography>

        <Stack spacing={1}>
          {difficulties.map((diff) => (
            <Button
              key={diff}
              variant={selectedDifficulty === diff ? "contained" : "outlined"}
              onClick={() => setSelectedDifficulty(diff)}
              fullWidth
              sx={{
                justifyContent: 'flex-start',
                textTransform: 'none',
                py: 1,
                px: 2,
                borderRadius: 2,
                fontWeight: selectedDifficulty === diff ? 600 : 500,
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: selectedDifficulty === diff ? 4 : 2,
                },
                ...(selectedDifficulty === diff && {
                  background: 'linear-gradient(45deg, #BC9DFA 30%, #21CBF3 90%)',
                  boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                }),
              }}
            >
              {diff === "All" ? "All" : diff}
            </Button>
          ))}
        </Stack>
      </Paper>
    </Box>
  );
}