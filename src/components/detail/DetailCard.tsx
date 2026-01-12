'use client';

import type { Recipe } from "@/types/recipes";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Stack,
  Rating,
  Container,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { ArrowLeft, Clock, Flame, UtensilsCrossed } from 'lucide-react';

interface DetailCardProps {
  recipe: Recipe;
  onBack: () => void;
}

export const DetailCard = ({ recipe, onBack }: DetailCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'success';
      case 'Medium': return 'warning';
      case 'Hard': return 'error';
      default: return 'default';
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button
        startIcon={<ArrowLeft size={20} />}
        onClick={onBack}
        sx={{ mb: 3 }}
        variant="outlined"
      >
        Back to list
      </Button>

      <Card elevation={3}>
        <CardMedia
          component="img"
          height="400"
          image={recipe.image}
          alt={recipe.name}
          sx={{ objectFit: 'cover' }}
        />

        <CardContent sx={{ p: { xs: 2, md: 4 } }}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h4" component="h1" gutterBottom fontWeight={700}>
              {recipe.name}
            </Typography>

            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
              <Rating value={recipe.rating} precision={0.1} readOnly />
              <Typography variant="body2" color="text.secondary">
                {recipe.rating.toFixed(1)} ({recipe.reviewCount} reviews)
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
              <Chip
                label={recipe.difficulty}
                color={getDifficultyColor(recipe.difficulty)}
                size="small"
              />
              <Chip label={recipe.cuisine} variant="outlined" size="small" />
              <Chip
                icon={<UtensilsCrossed size={16} />}
                label={`${recipe.servings} servings`}
                variant="outlined"
                size="small"
              />
              {recipe.mealType.map((type) => (
                <Chip key={type} label={type} variant="outlined" size="small" />
              ))}
            </Stack>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Grid container spacing={3} sx={{ mb: 3 }}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Clock size={20} color="gray" />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Prep Time
                  </Typography>
                  <Typography variant="body1" fontWeight={600}>
                    {recipe.prepTimeMinutes} min
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Clock size={20} color="gray" />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Cook Time
                  </Typography>
                  <Typography variant="body1" fontWeight={600}>
                    {recipe.cookTimeMinutes} min
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Flame size={20} color="gray" />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Calories
                  </Typography>
                  <Typography variant="body1" fontWeight={600}>
                    {recipe.caloriesPerServing} kcal
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom fontWeight={600}>
              Ingredients
            </Typography>
            <List>
              {recipe.ingredients.map((item, idx) => (
                <ListItem key={idx} sx={{ py: 0.5 }}>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{ variant: 'body1' }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box>
            <Typography variant="h5" component="h2" gutterBottom fontWeight={600}>
              Instructions
            </Typography>
            <List sx={{ listStyleType: 'decimal', pl: 2 }}>
              {recipe.instructions.map((step, idx) => (
                <ListItem key={idx} sx={{ display: 'list-item', py: 1 }}>
                  <Typography variant="body1">{step}</Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};