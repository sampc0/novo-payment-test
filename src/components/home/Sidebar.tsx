'use client';

import { Button } from "@/components/ui/button";
import { useRecipesStore } from "@/store/recipeStore";
import type { Difficulty } from "@/types/recipes";

const difficulties: (Difficulty | 'All')[] = ['All', 'Easy', 'Medium', 'Hard'];

export const Sidebar = () => {
  const { selectedDifficulty, setSelectedDifficulty } = useRecipesStore();

  return (
    <aside className="w-64 bg-white p-6 rounded-lg shadow-sm h-fit sticky top-4">
      <h2 className="text-xl font-semibold mb-2">Dificultad</h2>
      <p className="text-sm text-gray-600 mb-6">
        Filtra las recetas según la dificultad de preparación.
      </p>

      <div className="flex flex-col gap-2">
        {difficulties.map((diff) => (
          <Button
            key={diff}
            size="sm"
            variant={diff === selectedDifficulty ? "default" : "outline"}
            className="justify-start"
            onClick={() => setSelectedDifficulty(diff)}
          >
            {diff === "All" ? "Todas" : diff}
          </Button>
        ))}
      </div>
    </aside>
  );
}