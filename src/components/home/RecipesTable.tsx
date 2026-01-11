'use client';

import Link from "next/link";
import type { Recipe } from "@/types/recipes";

interface RecipeTableProps {
  recipes: Recipe[];
  isLoading: boolean;
  error?: string | null;
}

export const RecipesTable = ({ recipes, isLoading, error }: RecipeTableProps) => {
  return (
    <div> recipes </div>
  );
}