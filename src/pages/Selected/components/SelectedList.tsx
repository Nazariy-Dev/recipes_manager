import {IRecipe} from "../../../api/interfaces/IRecipeResponse.ts";
import SelectedRow from "./SelectedRow.tsx";


function SelectedList({meals: data}: { meals?: IRecipe[] }) {
    return (
        <ul className="list bg-base-100 rounded-box shadow-md">
            {data?.map((meal: IRecipe) => <SelectedRow key={meal.idMeal} meal={meal}/>)}
        </ul>
    );
}

export default SelectedList;
