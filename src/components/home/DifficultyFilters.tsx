'use client';

import { useRecipesStore } from "@/store/recipeStore";
import type { Difficulty } from "@/types/recipes";
import { Button, Typography, Stack } from "@mui/material";

const difficulties: (Difficulty | 'All')[] = ['All', 'Easy', 'Medium', 'Hard'];

interface DifficultyFiltersProps {
  onFilterChange?: () => void;
  inDrawer?: boolean;
}

export const DifficultyFilters = ({ onFilterChange, inDrawer = false }: DifficultyFiltersProps) => {
  const { selectedDifficulty, setSelectedDifficulty } = useRecipesStore();

  const handleFilterClick = (diff: Difficulty | 'All') => {
    setSelectedDifficulty(diff);
    if (onFilterChange) {
      onFilterChange();
    }
  };

  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
        fontWeight={700}
        sx={{ color: inDrawer ? 'white' : 'inherit' }}
      >
        Difficulty
      </Typography>

      <Stack spacing={1}>
        {difficulties.map((diff) => (
          <Button
            key={diff}
            variant={selectedDifficulty === diff ? "contained" : "outlined"}
            onClick={() => handleFilterClick(diff)}
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
              ...(inDrawer && {
                color: selectedDifficulty === diff ? 'primary.main' : 'white',
                borderColor: 'white',
                bgcolor: selectedDifficulty === diff ? 'white' : 'transparent',
                '&:hover': {
                  bgcolor: selectedDifficulty === diff ? 'grey.100' : 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'white',
                },
              }),
              ...(!inDrawer && {
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: selectedDifficulty === diff ? 4 : 2,
                },
                ...(selectedDifficulty === diff && {
                  background: 'linear-gradient(45deg, #BC9DFA 30%, #21CBF3 90%)',
                  boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                }),
              }),
            }}
          >
            {diff === "All" ? "All" : diff}
          </Button>
        ))}
      </Stack>
    </>
  );
};
