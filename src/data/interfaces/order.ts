export interface Order {
    id: number
    name: string
    charge_total: number
    payment_method: string
    placed_on: Date
}