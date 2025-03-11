import {ICategory, ICategoriesResponse} from "./interfaces/ICategoriesResponse.ts";
import {IRecipe, IRecipeResponse} from "./interfaces/IRecipeResponse.ts";

const apiBasePath = import.meta.env.VITE_BASE_API_URL

async function get<TBody>(relativeUrl: string): Promise<TBody> {
    const response = await fetch(`${apiBasePath}${relativeUrl}`);
    const value: TBody = await response.json();
    return value;
}


interface IRecipesClient {
    getCategories: () => Promise<ICategory[]>;
    getRecipe: (id: string) => Promise<IRecipe>;
    getRecipes: (query?: string) => Promise<IRecipe[]>;
}

export const client: IRecipesClient = {
    getCategories: async () => {
        const data = await get<ICategoriesResponse>("/categories.php")
        return data.categories
    },
    getRecipe: async (id: string) => {
        const data = await get<IRecipeResponse>(`/lookup.php?i=${id}`)
        return data.meals[0]
    },
    getRecipes: async (query?: string): Promise<IRecipe[]> => {
        const data = await get<IRecipeResponse>(`/search.php?s=${query}`)
        return data.meals
    }


};
