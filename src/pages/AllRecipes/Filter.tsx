import {useSuspenseQuery} from "@tanstack/react-query";
import {getCategoriesQueryOptions} from "../../api/queryOptions/getCategoryQueryOptions.ts";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";


function Filter() {
    const {data,error} = useSuspenseQuery(getCategoriesQueryOptions())
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const {pathname} = useLocation()

    const onApplyFilter = async function (filter: string) {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (filter) {
            params.set('category', filter);
        } else
            params.delete('category');
        navigate(`${pathname}?${params.toString()}`);
    }

    if (error) {
        alert("Something went wrong with categories fetch");
    }

    return (
        <select onChange={(e) => onApplyFilter(e.target.value)} className="select">
            <option disabled={true} selected>Category</option>
            <option value={""}>All</option>
            {data.map((category) => (
                <option key={category.idCategory} value={category.strCategory}>{category.strCategory}</option>
            ))}
        </select>
    )

}

export default Filter;
