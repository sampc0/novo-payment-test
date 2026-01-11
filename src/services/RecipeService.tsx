import type { RecipesApiResponse} from '@/types/recipes';
import axios from 'axios';

const RECIPES_API_URL = 'https://dummyjson.com/recipes?limit=0';

export class RecipeService {
    static async get(): Promise<RecipesApiResponse> {
        const response = await axios.get(RECIPES_API_URL, {
            method: "get",
        });
        return response.data;
    }
}