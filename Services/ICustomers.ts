import {Customer} from '../Entities/Customer';

export interface ICustomers {
	getCustomerById(id:number):Customer;
}