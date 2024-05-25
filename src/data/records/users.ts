import { User } from "../interfaces/user";
import { testOrders } from "./orders";

export const testUsers: User[] = [
    {
        id: 1,
        first_name: 'john',
        last_name: 'doe',
        orders: [
            testOrders[0]
        ]
    }
]