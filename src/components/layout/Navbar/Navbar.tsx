'use client';

import { UtensilsCrossed } from "lucide-react";
import { useRecipesStore } from "@/store/recipeStore";
import { Button, Input } from "@mui/material";


export const Navbar = () => {
  const { searchQuery, setSearchQuery } = useRecipesStore();

  return (
    <nav>
      <div>
        <UtensilsCrossed size={18} />
        Recipe Explorer
      </div>

      <div>
        <Input
          placeholder="Buscar recetas..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button variant="contained">Iniciar sesión</Button>
      </div>
    </nav>
  );
}