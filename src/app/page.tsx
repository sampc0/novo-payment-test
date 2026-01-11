"use client";

import { useEffect, useMemo } from "react";
import { useRecipesStore } from "@/store/recipeStore";
import type { Recipe } from "@/types/recipes";

import { Sidebar } from "@/components/home/Sidebar";
import { Pagination } from "@/components/home/Pagination";
import { RecipesTable } from "@/components/home/RecipesTable";

import { Box, Button, Typography } from "@mui/material";

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

  const totalPages = Math.max(1, Math.ceil(filteredRecipes.length / pageSize));
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
    <Box sx={{ display: "flex", justifyContent: "center", p: 5 }}>
      <Box sx={{ display: "flex", maxWidth: 1300, width: '100%', gap: 5 }}>
        <Sidebar />

        <Box component="section" sx={{ flex: 1, minWidth: 0, minHeight: '80vh' }}>
          <header>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%"
              }}
            >
              <Typography variant="h5" >
                Recipes
              </Typography>
              <Pagination
                currentPage={safePage}
                totalPages={totalPages}
                onPrev={handlePrevPage}
                onNext={handleNextPage}
              />
            </Box>
          </header>

          <RecipesTable
            recipes={paginatedRecipes}
            isLoading={isLoading}
            error={error}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
