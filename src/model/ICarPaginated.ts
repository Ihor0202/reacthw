import {IPaginationPage} from "./IPaginationPage";

export interface ICarPaginated {
    total_items: number
    total_pages: number
    prev: null | IPaginationPage
    next: null | IPaginationPage
    items: []
}