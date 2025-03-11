import Recipes from "../../components/Recipes.tsx";
import Search from "../../components/Search.tsx";
import {useSearchParams} from "react-router-dom";
import {useSuspenseQuery} from "@tanstack/react-query";
import LoadingSpinner from "../../components/LoadingSpinner.tsx";
import {getRecipesQueryOptions} from "../../api/queryOptions/getRecipesQueryOptions.ts";
import Pagination from "../../components/Pagination.tsx";
import {generatePage} from "../../lib/fucntions.ts";

const itemsPerPage = Number(import.meta.env.VITE_ITEMS_PER_PAGE)


function SearchResipes() {
    const [searchParams] = useSearchParams()
    const query = searchParams.get("query") || ''
    const page = Number(searchParams.get("page")) || 1;


    const {data, isPending, error} = useSuspenseQuery({...getRecipesQueryOptions(query)})
    const singlePage = generatePage(page, itemsPerPage, data)

    return (
        <>
            <Search/>
            <Recipes meals={singlePage }/>

            {!query && !data && <div className={"text-2xl  font-semibold text-center"}>Try searching for recipes</div>}

            {query && !data && !isPending && <div className={"text-2xl  font-semibold text-center"}>No recipe</div>}

            {query && isPending && !error && <LoadingSpinner/>}

            {error && <div>Something went wrong</div>}
            {data && <Pagination totalPages={Math.floor(data.length / itemsPerPage) || 1}/>}
        </>
    );
}

export default SearchResipes;
