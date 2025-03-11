import {AppContext} from "../../App.tsx";
import {useContext} from "react";
import SelectedList from "./components/SelectedList.tsx";
import Ingredients from "./components/Ingredients.tsx";
import Heading from "../../components/Heading.tsx";

function Selected() {
    const {selectedItems} = useContext(AppContext);

    return (
        <>
            {
                selectedItems.length > 0 ?
                    <div>
                        <div className={"text-4xl mb-4 mt-6 font-semibold"}>Selected items</div>

                        <SelectedList meals={selectedItems}/>

                        <div className={"text-4xl mb-4 mt-6 font-semibold"}>Ingridients</div>
                        <Ingredients meals={selectedItems}/>
                    </div> :
                    <Heading text={"No selected recipes"}/>
            }
        </>
    )
}

export default Selected;
