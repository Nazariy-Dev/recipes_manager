import RecipeCard from "./RecipeCard.tsx";
import {IRecipe} from "../api/interfaces/IRecipeResponse.ts";


function Recipes({meals: data}: {meals?: IRecipe[]}) {

    return (
        <div className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
                {data?.map((item) => <RecipeCard key={item.idMeal} recipe={item}/>)}
            </div>
        </div>

    );
}

export default Recipes;
