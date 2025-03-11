import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import { useDebouncedCallback } from 'use-debounce';


function Search() {
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const [searchParams] = useSearchParams()
    const query = searchParams.get("query") || ''


    const onSearch = useDebouncedCallback( async  (query: string) => {
        const params = new URLSearchParams(searchParams);
        if (query) {
            params.set('page', '1');
            params.set('query', query);
        } else {
            params.delete("query")
        }

        navigate(`${pathname}?${params.toString()}`);
    }, 400)

    return (
            <input defaultValue={query} onChange={(e)=>onSearch(e.target.value)} type="text" placeholder="Type here" className="input w-full"/>
    );
}

export default Search;
