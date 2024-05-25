import { Order } from "./order"

export interface User {
    id: number
    first_name: string
    last_name: string
    orders: Order[]
}