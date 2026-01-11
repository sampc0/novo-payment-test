'use client';

import { useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { useRecipesStore } from "@/store/recipeStore";
import { DetailCard } from "@/components/detail/DetailCard";
import type { Recipe } from "@/types/recipes";
import { Box, Button, CircularProgress, Alert, Container } from "@mui/material";

export default function RecipeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const { recipes, fetchRecipes, isLoading, error } = useRecipesStore();

  useEffect(() => {
    if (recipes.length === 0) {
      fetchRecipes();
    }
  }, [recipes.length, fetchRecipes]);

  const recipe: Recipe | undefined = useMemo(
    () => recipes.find((r) => r.id === Number(id)),
    [recipes, id]
  );

  if (isLoading && !recipe) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error && !recipe) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
        <Button
          variant="outlined"
          onClick={() => router.push("/")}
        >
          Back to list
        </Button>
      </Container>
    );
  }

  if (!recipe) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Alert severity="info" sx={{ mb: 3 }}>
          Recipe not found.
        </Alert>
        <Button
          variant="outlined"
          onClick={() => router.push("/")}
        >
          Back to list
        </Button>
      </Container>
    );
  }

  return (
    <DetailCard
      recipe={recipe}
      onBack={() => router.push("/")}
    />
  );
}