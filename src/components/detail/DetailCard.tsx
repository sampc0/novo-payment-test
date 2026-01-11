'use client';

import type { Recipe } from "@/types/recipes";
import { Badge, Button, Card, CardContent, CardHeader } from "@mui/material";

interface DetailCardProps {
  recipe: Recipe;
  onBack: () => void;
}

export const DetailCard = ({ recipe, onBack }: DetailCardProps) => {
  return (
    <section className="max-w-4xl mx-auto px-4">
      <Button
        onClick={onBack}
        className="mb-3"
      >
        ← Volver a la lista
      </Button>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p>{recipe.name}</p>
              <p className="text-sm text-gray-600 mt-1">
                {recipe.cuisine} · {recipe.difficulty} · {recipe.servings}{" "}
                porciones
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge>
                ⭐ {recipe.rating.toFixed(1)} ({recipe.reviewCount} reviews)
              </Badge>
              <Badge>
                {recipe.mealType.join(", ")}
              </Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {recipe.image && (
            <img
              src={recipe.image}
              alt={recipe.name}
            />
          )}

          <div>
            <span>Prep: {recipe.prepTimeMinutes} min</span>
            <span>Cocción: {recipe.cookTimeMinutes} min</span>
            <span>Calorías: {recipe.caloriesPerServing} kcal</span>
          </div>

          <div>
            <h3>Ingredientes</h3>
            <ul>
              {recipe.ingredients.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Instrucciones</h3>
            <ol>
              {recipe.instructions.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}