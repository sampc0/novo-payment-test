'use client';

import { useRecipesStore } from "@/store/recipeStore";
import type { Difficulty } from "@/types/recipes";
import { Button } from "@mui/material";

const difficulties: (Difficulty | 'All')[] = ['All', 'Easy', 'Medium', 'Hard'];

export const Sidebar = () => {
  const { selectedDifficulty, setSelectedDifficulty } = useRecipesStore();

  return (
    <aside>
      <h2>Dificultad</h2>
      <p>
        Filtra las recetas según la dificultad de preparación.
      </p>

      <div>
        {difficulties.map((diff) => (
          <Button
            key={diff}
            onClick={() => setSelectedDifficulty(diff)}
          >
            {diff === "All" ? "Todas" : diff}
          </Button>
        ))}
      </div>
    </aside>
  );
}