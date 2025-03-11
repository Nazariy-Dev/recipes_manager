import {IRecipe} from "../api/interfaces/IRecipeResponse.ts";
import {Link} from "react-router-dom";
import goToIcon from "../assets/up-right-from-square-solid.svg"
import {useContext} from "react";
import {AppContext} from "../App.tsx";

function RecipeCard({recipe}: { recipe: IRecipe }) {
    const {selectedItems, setSelectedItems} = useContext(AppContext);

    const onSelect = (item: IRecipe) => {
        setSelectedItems([...selectedItems, item])
    }

    const onRemove = (id: string) => {
        const newItems = selectedItems.filter(item => item.idMeal !== id)
        setSelectedItems(newItems)
    }

    return (
        <div className="card bg-base-100 w-full shadow-sm">
            <figure>
                <img
                    src={recipe.strMealThumb}
                    alt="recipe image"/>
            </figure>
            <div className="card-body p-4 justify-between">
                <h2 className="card-title">{recipe.strMeal}</h2>
                {recipe.strInstructions && <p className="truncate">{recipe.strInstructions}</p>}
                <div className="flex items-center justify-start gap-4">
                    <div className="badge badge-outline">{recipe.strCategory}</div>
                    <a href={recipe.strSource} target={"_blank"} className=" w-5 h-5">
                        <img alt={"go-to image"} className={"w-full h-full"} src={goToIcon}/>
                    </a>
                </div>
                <div className="card-actions justify-end mt-2">
                    <Link to={`/recipe/${recipe.idMeal}`} className="btn btn-secondary">Details</Link>
                    {selectedItems.some(item => item.idMeal === recipe.idMeal) ?
                        <div onClick={()=>onRemove(recipe.idMeal)} className="btn btn-accent">Remove</div> :
                        <div onClick={()=>onSelect(recipe)} className="btn btn-accent">Select</div>
                    }
                </div>

            </div>
        </div>
    );
}

export default RecipeCard;
