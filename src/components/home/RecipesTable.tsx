'use client';

import type { Recipe } from "@/types/recipes";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Box,
  CircularProgress,
  Alert,
  Stack,
  Rating,
  CardActionArea
} from "@mui/material";
import { useRouter } from "next/navigation";

interface RecipeTableProps {
  recipes: Recipe[];
  isLoading: boolean;
  error: string | null;
}

export const RecipesTable = ({ recipes, isLoading, error }: RecipeTableProps) => {
  const router = useRouter();
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 8, minWidthwidth: '100%' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ mb: 3 }}>
        {error}
      </Alert>
    );
  }

  if (recipes.length === 0) {
    return (
      <Alert severity="info" sx={{ mb: 3 }}>
        No recipes found with the selected filters.
      </Alert>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'success';
      case 'Medium': return 'warning';
      case 'Hard': return 'error';
      default: return 'default';
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <Grid
        container
        spacing={3}
        sx={{
          justifyContent: 'center',
          maxWidth: '100%',
        }}
      >
        {recipes.map((recipe) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 5, lg: 3 }}
            key={recipe.id}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Card
              sx={{
                height: '100%',
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                bgcolor: "aliceblue",
                borderRadius: 3,
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6,
                }
              }}
            >
              <CardActionArea onClick={() => router.push(`/recipes/${recipe.id}`)}>
                <CardMedia
                  component="img"
                  height="200"
                  image={recipe.image}
                  alt={recipe.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" component="h3" gutterBottom noWrap>
                    {recipe.name}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
                    <Rating value={recipe.rating} precision={0.1} size="small" readOnly />
                    <Typography variant="body2" color="text.secondary">
                      ({recipe.reviewCount})
                    </Typography>
                  </Box>

                  <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                    <Chip
                      label={recipe.difficulty}
                      size="small"
                      color={getDifficultyColor(recipe.difficulty)}
                    />
                    <Chip
                      label={recipe.cuisine}
                      size="small"
                      variant="outlined"
                    />
                  </Stack>

                  <Box sx={{ mt: 'auto' }}>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                      Time: {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Servings: {recipe.servings}
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
        </Grid>
      </Box>
    );
  };