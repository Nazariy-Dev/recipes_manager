import {useSearchParams} from "react-router-dom";
import {useSuspenseQuery} from "@tanstack/react-query";
import {getRecipesQueryOptions} from "../../api/queryOptions/getRecipesQueryOptions.ts";
import LoadingSpinner from "../../components/LoadingSpinner.tsx";
import Recipes from "../../components/Recipes.tsx";
import Filter from "./Filter.tsx";
import Pagination from "../../components/Pagination.tsx";
import Heading from "../../components/Heading.tsx";
import {generatePage} from "../../lib/fucntions.ts";

const itemsPerPage = Number(import.meta.env.VITE_ITEMS_PER_PAGE)

function AllRecipes() {
    const [searchParams] = useSearchParams()
    const {data, isPending, error,} = useSuspenseQuery(getRecipesQueryOptions())
    const page = Number(searchParams.get("page")) || 1;
    const category = searchParams.get("category") || "";

    const filteredData = data.filter(meal => category ? meal.strCategory == category : true)
    const singlePage = generatePage(page, itemsPerPage, filteredData)

    return (
        <div className={"pb-8"}>
            <Filter/>
            <Recipes meals={singlePage}/>
            {!data && !isPending && <Heading text={"No recipes"}/>}
            {isPending && !error && <LoadingSpinner/>}
            {error && <Heading text={"Something went wrong"}/>}
            {filteredData && <Pagination totalPages={Math.floor(filteredData.length / itemsPerPage) || 1}/>}
        </div>
    );
}

export default AllRecipes;
