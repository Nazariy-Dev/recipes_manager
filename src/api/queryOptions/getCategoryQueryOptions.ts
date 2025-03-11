import {queryOptions} from "@tanstack/react-query";
import {client} from "../recipes-api.ts";

export function getCategoriesQueryOptions() {
    return queryOptions({
        queryKey: ["categories"],
        queryFn: () => client.getCategories()
    })
}


