import {Link, useParams} from "react-router-dom";
import {useSuspenseQuery} from "@tanstack/react-query";
import {getRecipeQueryOptions} from "../../api/queryOptions/getRecipeOptions.ts";
import {getIngredients} from "../../lib/fucntions.ts";
import Arrow from "../../assets/arrow-left-solid.svg"

function Recipe() {
    const id = useParams().id || ""
    const {data: meal} = useSuspenseQuery(getRecipeQueryOptions(id))
    return (
        <div className={"mb-20"}>
            <div className={"w-full h-80"}>
                <img className={"w-full h-full object-cover"} alt={"recipe image"} src={meal.strMealThumb}/>
            </div>
            <h1 className="text-4xl font-bold mt-6 mb-4">{meal.strMeal}</h1>
            <ul className="flex flex-col gap-2">
                <li className="flex gap-2">
                    <span className={"text-neutral"}>Category:</span>
                    <span>{meal.strCategory}</span>
                </li>
                <li className="flex gap-2">
                    <span className={"text-neutral"}>Ingredients:</span>
                    {getIngredients(meal).join(", ")}
                </li>
                <li className="flex flex-col gap-2">
                    <div className={"text-neutral"}>How to cook:</div>
                    <span>{meal.strInstructions}</span>
                </li>
                <div className="flex gap-2">
                    <a href={meal.strSource}  target={"_blank"} className={"link"}>Source</a>
                    <a href={meal.strYoutube} target={"_blank"} className={"link"}>YouTube</a>
                </div>
            </ul>
            <Link to={"../"} className="btn-accent absolute btn top-6 left-4 flex gap-2">
                <div className="h-4 w-4 ">
                    <img className="w-full h-full" src={Arrow} alt={"back arrow"}/>
                </div>
                <div>Go back</div>
            </Link>
        </div>
    );
}

export default Recipe;
