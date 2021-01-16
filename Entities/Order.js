import {
    Entity
} from './Entity';
import {
    OrderLine
} from './OrderLine';

export class Order extends Entity {
    constructor(id) {
        super(id);
    }

    get custId() {
        return this._custId;
    }

    set custId(custId) {
        this._custId = custId;
    }

    get items() {
        return this._items;
    }

    set items(items) {
        this._items = items;
        for (let item of this._items) {
            this._totalPrice += item.product.price * item.quantity;
        }
    }

    get totalPrice() {
        return this._totalPrice;
    }

    generateShippingSlip() {
        this._shippingSlip = "Type\t Quantity\t Description\n";
        for (let item of this.items) {
            if (item.product.pType === 'oneTime') {
                let iType = "";
                if (item.product.bookOrVideo == "book")
                    iType = "Book";
                else if (item.product.bookOrVideo == "video")
                    iType = "Video";
                this._shippingSlip += `${iType} \t ${item.quantity} \t ${item.product.description} \n`;
            }
        }
    }

    get shippingSlip() {
        return this._shippingSlip;
    }
}