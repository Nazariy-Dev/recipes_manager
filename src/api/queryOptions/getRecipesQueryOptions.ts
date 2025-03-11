import {queryOptions} from "@tanstack/react-query";
import {client} from "../recipes-api.ts";

export function getRecipesQueryOptions(query: string = "") {
    return queryOptions({
        queryKey: ["recipes", query],
        queryFn: () => client.getRecipes(query)
    })
}


