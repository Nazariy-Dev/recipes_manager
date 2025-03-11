import {Link, useLocation} from "react-router-dom";
import {useContext} from "react";
import {AppContext} from "../App.tsx";

function Header() {
    const {pathname} = useLocation()
    const {selectedItems} = useContext(AppContext);


    return (
        <ul className="flex items-center justify-end sm:justify-center  text-lg mb-8 mt-6">
            <div role="tablist" className="tabs tabs-sm sm:tabs-md tabs-box bg-neutral-content">
                <Link role="tab" className={"tab " + (pathname == "/search" ? " tab-active" : "")} to={"/search"}>Search
                    Recipes</Link>
                <Link role="tab" className={"tab " + (pathname == "/" ? " tab-active" : "")} to={"/"}>See all</Link>
                <Link role="tab" className={"relavite tab " + (pathname == "/selected" ? " tab-active" : "")} to={"/selected"}>
                    {selectedItems.length > 0 && <div className="absolute badge badge-info -top-2 -right-2">{selectedItems.length}</div>}
                    <div>Selected</div>
                </Link>
            </div>
        </ul>
    );
}

export default Header;
