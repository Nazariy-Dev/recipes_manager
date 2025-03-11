import {IRecipe} from "../api/interfaces/IRecipeResponse.ts";

export const getIngredients = (meal: IRecipe) => {
    const ingredients: string[] = []

    for (const key in meal) {
        const ingredient = meal[key];
        if (key.includes("Ingredient") && ingredient) {
            ingredients.push(ingredient);
        }
    }

    return ingredients;
}

export const getAllIngridients = (meals: IRecipe[]) => {
    const ingredients: string[] = []

    meals.forEach(meal => {
        for (const key in meal) {
            const indgredient = meal[key];
            if (key.includes("Ingredient") && indgredient) {
                ingredients.push(indgredient);
            }
        }
    })

    return [...new Set(ingredients)];
}

export const generatePage = (page: number, itemsPerPage: number, data: IRecipe[]) =>
{
    const start: number = (page - 1) * itemsPerPage
    const singlePage = data.slice(start, start + itemsPerPage)
    return singlePage
}
