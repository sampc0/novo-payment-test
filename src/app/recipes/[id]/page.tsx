'use client';

import { useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { useRecipesStore } from "@/store/recipeStore";
import { DetailCard } from "@/components/detail/DetailCard";
import type { Recipe } from "@/types/recipes";
import { Button } from "@/components/ui/button";

export default function RecipeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const { recipes, fetchRecipes, isLoading, error } = useRecipesStore();

  // Si no hay recetas en el store (navegación directa), las cargamos
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
      <section className="recipe-detail-container">
        <p>Cargando receta...</p>
      </section>
    );
  }

  if (error && !recipe) {
    return (
      <section className="recipe-detail-container">
        <p style={{ color: "#fecaca" }}>{error}</p>
        <Button
          variant="outline"
          size="sm"
          className="mt-3"
          onClick={() => router.push("/")}
        >
          Volver a la lista
        </Button>
      </section>
    );
  }

  if (!recipe) {
    return (
      <section className="recipe-detail-container">
        <p>No se encontró la receta.</p>
        <Button
          variant="outline"
          size="sm"
          className="mt-3"
          onClick={() => router.push("/")}
        >
          Volver a la lista
        </Button>
      </section>
    );
  }

  return (
    <DetailCard
      recipe={recipe}
      onBack={() => router.push("/")}
    />
  );
}