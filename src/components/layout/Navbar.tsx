'use client';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed } from "lucide-react";
import { useRecipesStore } from "@/store/recipeStore";

export const Navbar = () => {
  const { searchQuery, setSearchQuery } = useRecipesStore();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center">
          <UtensilsCrossed size={18} />
        </div>
        <div className="text-lg font-semibold">Recipe Explorer</div>
      </div>

      <div className="flex items-center gap-3">
        <Input
          className="w-64"
          placeholder="Buscar recetas..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button variant="outline">
          Iniciar sesión
        </Button>
      </div>
    </nav>
  );
}