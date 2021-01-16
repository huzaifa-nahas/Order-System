import {IOrderService} from './IOrderService';
import {Order} from '../Entities/Order';
// import {OrderLine} from '../Entities/OrderLine';
import {ItemType} from '../Entities/ItemType';
import {BookOrVideo} from '../Entities/BookOrVideo'
import {Customers} from './Customers';

export class OrderService implements IOrderService {
	private _customers: Customers;

	get customers():Customers {
		return this._customers;
	}

	set customers(customers:Customers) {
		this._customers = customers;
	}

	constructor (customers: Customers) {
		this._customers = customers;
	}

	Process (order:Order) :void {		
		// Implement OR1
		for (let item of order.items) {
			if (item.product.pType === ItemType.subscription) {
				let customer = this.customers.getCustomerById(order.custId);
				if (item.product.bookOrVideo === BookOrVideo.book)
					customer.activatedBookSubscription=true;
				else if (item.product.bookOrVideo === BookOrVideo.video) {
					customer.activatedVideoSubscription = true;
				}
			}

		}

		// Implement OR2
		for (let item of order.items) 
			if (item.product.pType === ItemType.oneTime) {
				order.generateShippingSlip();
				break;
			}
	}
}