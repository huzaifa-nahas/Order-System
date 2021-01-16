import {ICustomers} from './ICustomers';
import {Customer} from '../Entities/Customer';

export class Customers implements ICustomers {
	private _customers : Customer[];

	constructor (customers: Customer[]) {
		this._customers = customers;
	}

	get customers():Customer[] {
		return this._customers;
	}

	getCustomerById(id:number): Customer {
		for (let customer of this._customers) {
			if (customer.id === id)
				return customer;
		}
	}

	
}