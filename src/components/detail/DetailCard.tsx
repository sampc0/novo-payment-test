'use client';

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { Recipe } from "@/types/recipes";

interface DetailCardProps {
  recipe: Recipe;
  onBack: () => void;
}

export function DetailCard({ recipe, onBack }: DetailCardProps) {
  return (
    <section className="max-w-4xl mx-auto px-4">
      <Button
        variant="outline"
        size="sm"
        onClick={onBack}
        className="mb-3"
      >
        ← Volver a la lista
      </Button>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <CardTitle>{recipe.name}</CardTitle>
              <p className="text-sm text-gray-600 mt-1">
                {recipe.cuisine} · {recipe.difficulty} · {recipe.servings}{" "}
                porciones
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">
                ⭐ {recipe.rating.toFixed(1)} ({recipe.reviewCount} reviews)
              </Badge>
              <Badge variant="outline">
                {recipe.mealType.join(", ")}
              </Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {recipe.image && (
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full max-h-80 object-cover rounded-lg"
            />
          )}

          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span>Prep: {recipe.prepTimeMinutes} min</span>
            <span>Cocción: {recipe.cookTimeMinutes} min</span>
            <span>Calorías: {recipe.caloriesPerServing} kcal</span>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold mb-1 text-gray-900">Ingredientes</h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              {recipe.ingredients.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-1 text-gray-900">Instrucciones</h3>
            <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
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