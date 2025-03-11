import {queryOptions} from "@tanstack/react-query";
import {client} from "../recipes-api.ts";

export function getRecipeQueryOptions(id: string) {
    return queryOptions({
        queryKey: ["meal", id],
        queryFn: () => client.getRecipe(id)
    })
}


