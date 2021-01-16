import {
    Order
} from '../Entities/Order';
import {
    Customers
} from './Customers';

export class OrderService {
    constructor(customers) {
        this._customers = customers;
    }

    get customers() {
        return this._customers
    }

    set customers(customers) {
        this._customers = customers;
    }

    Process(order) {
        // Implement OR1
        for (let item of order.items) {
            if (item.product.pType === "subscription") {
                let customer = this.customers.getCustomerById(order.custId);
                if (item.product.bookOrVideo === "book")
                    customer.activatedBookSubscription = true;
                else if (item.product.bookOrVideo === "video")
                    customer.activatedVideoSubscription = true;
            }
        }

        // Implement OR2
        for (let item of order.items)
            if (item.product.pType === "oneTime") {
                order.generateShippingSlip();
                break;
            }
    }
}