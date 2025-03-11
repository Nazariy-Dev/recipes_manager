import clsx from 'clsx';
import {Link} from 'react-router-dom';
import {useLocation, useSearchParams} from 'react-router-dom';
import {generatePagination} from "../lib/generatePagination.ts";
import Arrow from "../assets/arrow-left-solid.svg"

export default function Pagination({totalPages}: { totalPages: number }) {
    const [searchParams] = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;
    const allPages = generatePagination(currentPage, totalPages);
    const {pathname} = useLocation();

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    return (
        <div className={"py-4"}>
            <div className="flex overflow-hidden justify-center">
                <PaginationArrow
                    direction="left"
                    href={createPageURL(currentPage - 1)}
                    isDisabled={currentPage <= 1}
                />

                <div className="join">
                    {allPages.map((page, index) => {
                        let position: 'first' | 'last' | 'single' | 'middle' | undefined;

                        if (index === 0) position = 'first';
                        if (index === allPages.length - 1) position = 'last';
                        if (allPages.length === 1) position = 'single';
                        if (page === '...') position = 'middle';

                        return (
                            <PaginationNumber
                                key={index}
                                href={createPageURL(page)}
                                page={page}
                                position={position}
                                isActive={currentPage === page}
                            />
                        );
                    })}
                </div>

                <PaginationArrow
                    direction="right"
                    href={createPageURL(currentPage + 1)}
                    isDisabled={currentPage >= totalPages}
                />
            </div>
        </div>
    );
}

function PaginationNumber({
                              page,
                              href,
                              isActive,
                              position,
                          }: {
    page: number | string;
    href: string;
    position?: 'first' | 'last' | 'middle' | 'single';
    isActive: boolean;
}) {
    const className = clsx(
        'join-item btn border',
        {
            'rounded-l-md': position === 'first' || position === 'single',
            'rounded-r-md': position === 'last' || position === 'single',
            'btn-active': isActive,
            'pointer-events-none': position === 'middle'
        },
    );

    return isActive || position === 'middle' ? (
        <div className={className}>{page}</div>
    ) : (
        <Link to={href} className={className}>
            {page}
        </Link>
    );
}

function PaginationArrow({
                             href,
                             direction,
                             isDisabled,
                         }: {
    href: string;
    direction: 'left' | 'right';
    isDisabled?: boolean;
}) {
    const className = clsx(
        'flex h-10 w-10 items-center justify-center rounded-md bg-base-200 hover:bg-base-300',
        {
            'pointer-events-none opacity-40': isDisabled,
            'mr-2 md:mr-4': direction === 'left',
            'ml-2 md:ml-4': direction === 'right',
        },
    );

    const icon =
        direction === 'left' ? (
            <div className={"w-4 h-4"}>
                <img alt={'arrow'} className={"h-full w-full"} src={Arrow}/>
            </div>
        ) : (
            <div className={"w-4 h-4"}>
                <img alt={'arrow'} className={"h-full w-full rotate-180"} src={Arrow}/>
            </div>
        );


    return isDisabled ? (
        <div className={className}>{icon}</div>
    ) : (
        <Link className={className} to={href}>
            {icon}
        </Link>
    );
}



