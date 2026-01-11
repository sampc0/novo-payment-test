'use client';

import { useEffect, useMemo } from "react";
import { useRecipesStore } from "@/store/recipeStore";
import type { Recipe } from "@/types/recipes";

import { Sidebar } from "@/components/home/Sidebar";
import { Pagination } from "@/components/home/Pagination";
import { RecipesTable } from "@/components/home/RecipesTable";

import { Box, Button } from "@mui/material";

const HomePage = () => {
  const {
    recipes,
    isLoading,
    error,
    selectedDifficulty,
    searchQuery,
    currentPage,
    pageSize,
    setCurrentPage,
    fetchRecipes,
  } = useRecipesStore();

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  const filteredRecipes = useMemo<Recipe[]>(() => {
    let filtered = recipes;

    if (selectedDifficulty !== "All") {
      filtered = filtered.filter((r) => r.difficulty === selectedDifficulty);
    }

    if (searchQuery.trim()) {
      filtered = filtered.filter((r) =>
        r.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [recipes, selectedDifficulty, searchQuery]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredRecipes.length / pageSize)
  );
  const safePage = Math.min(currentPage, totalPages);

  const paginatedRecipes = useMemo<Recipe[]>(() => {
    const start = (safePage - 1) * pageSize;
    const end = start + pageSize;
    return filteredRecipes.slice(start, end);
  }, [filteredRecipes, safePage, pageSize]);

  const handlePrevPage = () => {
    if (safePage > 1) setCurrentPage(safePage - 1);
  };

  const handleNextPage = () => {
    if (safePage < totalPages) setCurrentPage(safePage + 1);
  };

  return (
    <Box sx={{ display: "flex", maxWidth: 1600, justifyContent: "center", gap: 4 }}>
      <Sidebar />

      <section className="flex flex-col gap-6">
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Recetas</h2>
            <p className="text-sm text-gray-600">
              Mostrando {paginatedRecipes.length} de {filteredRecipes.length}{" "}
              recetas filtradas.
            </p>
          </div>

          <Button
            onClick={fetchRecipes}
            disabled={isLoading}
          >
            {isLoading ? "Cargando..." : "Recargar"}
          </Button>
        </header>

        <RecipesTable
          recipes={paginatedRecipes}
          isLoading={isLoading}
          error={error}
        />

        <Pagination
          currentPage={safePage}
          totalPages={totalPages}
          onPrev={handlePrevPage}
          onNext={handleNextPage}
        />
      </section>
    </Box>
  );
}

export default HomePage;