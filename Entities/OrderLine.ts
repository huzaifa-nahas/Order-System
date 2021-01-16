import {Entity} from './Entity';
import {Product} from './Product';
import {ItemType} from './ItemType';

export class OrderLine extends Entity {
	private _quantity: number;
	private _product:Product;

	constructor (id:number) {
		super(id);
	}	

	get quantity():number {
		if (this.product.pType == ItemType.subscription) 
			return 1; // The user should only buy one subscription
		return this._quantity;
	}

	set quantity(quantity: number) {
		this._quantity = quantity;
	}
	
	get product(): Product {
		return this._product;
	}

	set product(product: Product) {
		this._product = product;
	}

}