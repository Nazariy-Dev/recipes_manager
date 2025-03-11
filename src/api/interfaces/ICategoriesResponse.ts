export interface ICategory {
    idCategory: string
    strCategory: string
    strCategoryDescription: string
    strCategoryThumb: string
}

export interface ICategoriesResponse {
    categories: ICategory[];
}
