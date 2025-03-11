import {Outlet} from "react-router-dom";
import Header from "./components/Header.tsx";
import {createContext, useState} from "react";
import {IRecipe} from "./api/interfaces/IRecipeResponse.ts";

interface  IAppContext {
    selectedItems: IRecipe[];
    setSelectedItems: (selectedItems: IRecipe[]) => void;
}

const defaultState: IAppContext = {
    selectedItems: [],
    setSelectedItems: () => {}
}


export const AppContext = createContext<IAppContext>(defaultState);

function App() {
    const [selectedItems, setSelectedItems] = useState<IRecipe[]>([])

    return (
        <AppContext.Provider value={{selectedItems, setSelectedItems}}>
            <div className="container mx-auto px-2">
                <Header/>
                <Outlet/>
            </div>
        </AppContext.Provider>
    )
}

export default App
