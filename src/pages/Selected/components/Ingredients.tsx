import {IRecipe} from "../../../api/interfaces/IRecipeResponse.ts";
import {getAllIngridients} from "../../../lib/fucntions.ts";

function Ingredients({meals}: {meals: IRecipe[]}) {
    const ingredients = getAllIngridients(meals)

    return (
        <div className="overflow-x-auto">
            <table className="table table-xs">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {ingredients.map((ingridient, index) =>
                        <tr>
                            <th className={"w-4"}>{index +1}</th>
                            <td>{ingridient}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Ingredients;
