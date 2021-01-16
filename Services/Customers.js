import {
    Customer
} from '../Entities/Customer';

export class Customers {
    constructor(customers) {
        this._customers = customers;
    }

    get customers() {
        return this._customers;
    }

    getCustomerById(id) {
        for (let customer of this.customers)
            if (customer.id === id)
                return customer;
    }
}