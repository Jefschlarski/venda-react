import { Category } from "../../category/types/Category"

export interface Product {
    id: number
    name: string
    image: string
    price: number
    category: Category
}