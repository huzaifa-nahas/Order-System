import {Entity} from './Entity';
import {OrderLine} from './OrderLine';
import {ItemType} from './ItemType';
import {BookOrVideo} from './BookOrVideo';

export class Order extends Entity {
    _custId: number;
    _items: OrderLine[];
    _totalPrice: number =0.0;
    _shippingSlip: string ="";

    constructor(id:number) {
    	super(id);        
    }

    get custId(): number {
    	return this._custId;
    }

    set custId(custId:number) {
    	this._custId = custId;
    }

    get items(): OrderLine[] {
        return this._items;
    }

    set items(items:OrderLine[]) {
    	this._items = items;
    	for (let item of this._items) {
            this._totalPrice += item.product.price * item.quantity;
        }
    }

    get totalPrice(): number {
        return this._totalPrice;
    }

    generateShippingSlip() {
    	this._shippingSlip += "Type\t Quantity\t Description\n"
    	for (let item of this.items) {
    		if (item.product.pType === ItemType.oneTime) {
    			let iType:String = "Book";
    			if ( item.product.bookOrVideo === BookOrVideo.video)
    				iType = "Video";
    			this._shippingSlip+= `${iType} \t ${item.quantity} \t ${item.product.description} \n`;
    		}
    	}
    }

    get shippingSlip() :string {
    	return this._shippingSlip;
    }
}