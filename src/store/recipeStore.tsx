import { create } from 'zustand';
import axios from 'axios';
import type { Recipe, RecipesApiResponse, Difficulty } from '@/types/recipes';
import { RecipeService } from '@/services/RecipeService';

interface RecipesState {
  recipes: Recipe[];
  isLoading: boolean;
  error: string | null;
  selectedDifficulty: Difficulty | 'All';
  setSelectedDifficulty: (value: Difficulty | 'All') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  currentPage: number;
  pageSize: number;
  setCurrentPage: (page: number) => void;

  fetchRecipes: () => Promise<void>;
}

export const useRecipesStore = create<RecipesState>((set, get) => ({
  recipes: [],
  isLoading: false,
  error: null,

  selectedDifficulty: 'All',
  setSelectedDifficulty(value) {
    set({ selectedDifficulty: value, currentPage: 1 });
  },

  searchQuery: '',
  setSearchQuery(query) {
    set({ searchQuery: query, currentPage: 1 });
  },

  currentPage: 1,
  pageSize: 10,
  setCurrentPage(page) {
    set({ currentPage: page });
  },

  async fetchRecipes() {
    try {
      set({ isLoading: true, error: null });

      const response: RecipesApiResponse =  await RecipeService.get();
      set({
        recipes: response.recipes,
        isLoading: false,
      });
    } catch (err: any) {
      set({
        error: err?.message || 'Error loading recipes',
        isLoading: false,
      });
    }
  },
}));