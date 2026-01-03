'use client';

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import type { Recipe } from "@/types/recipes";

interface RecipeTableProps {
  recipes: Recipe[];
  isLoading: boolean;
  error?: string | null;
}

export const RecipesTable = ({ recipes, isLoading, error }: RecipeTableProps) => {
  return (
    <div className="table-wrapper">
      <div className="table-scroll">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Cocina</TableHead>
              <TableHead>Prep (min)</TableHead>
              <TableHead>Cocción (min)</TableHead>
              <TableHead>Raciones</TableHead>
              <TableHead>Dificultad</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {isLoading && recipes.length === 0 && !error && (
              <TableRow>
                <TableCell colSpan={6}>Cargando recetas...</TableCell>
              </TableRow>
            )}

            {!isLoading && error && (
              <TableRow>
                <TableCell colSpan={6} className="text-red-300">
                  {error}
                </TableCell>
              </TableRow>
            )}

            {!isLoading && !error && recipes.length === 0 && (
              <TableRow>
                <TableCell colSpan={6}>
                  No hay recetas para mostrar.
                </TableCell>
              </TableRow>
            )}

            {!isLoading && !error && recipes.length > 0 && (
              <>
                {recipes.map((recipe) => (
                  <TableRow key={recipe.id} className="hover:bg-slate-900/50">
                    <TableCell className="font-medium">
                      <Link
                        href={`/recipes/${recipe.id}`}
                        className="underline decoration-slate-500 hover:text-sky-300"
                      >
                        {recipe.name}
                      </Link>
                    </TableCell>
                    <TableCell>{recipe.cuisine}</TableCell>
                    <TableCell>{recipe.prepTimeMinutes}</TableCell>
                    <TableCell>{recipe.cookTimeMinutes}</TableCell>
                    <TableCell>{recipe.servings}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="capitalize">
                        {recipe.difficulty}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}