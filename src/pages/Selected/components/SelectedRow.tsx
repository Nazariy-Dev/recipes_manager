import {useContext} from 'react';
import {IRecipe} from "../../../api/interfaces/IRecipeResponse.ts";
import {AppContext} from "../../../App.tsx";


function SelectedRow({meal}: {meal: IRecipe}) {
    const {selectedItems, setSelectedItems} = useContext(AppContext);

    const onRemove = (id: string) => {
        const newItems = selectedItems.filter(item => item.idMeal !== id)
        setSelectedItems(newItems)
    }
    return (
        <li className="list-row">
            <div><img className="size-10 rounded-box" src={meal.strMealThumb}/>
            </div>
            <div>
                <div>{meal.strMeal}</div>
                <p className="list-col-wrap text-md">
                    {meal.strInstructions}
                </p>
            </div>
            <button className="btn btn-square btn-error" onClick={()=>onRemove(meal.idMeal)}>
                Х
            </button>
        </li>
    );
}

export default SelectedRow;
