import {
    Entity
} from './Entity';

import {
    Product
} from './Product';

export class OrderLine extends Entity {
    constructor(id) {
        super(id);
    }

    get quantity() {
        if (this.product.pType == "subscription")
            return 1;
        return this._quantity;
    }

    set quantity(quantity) {
        this._quantity = quantity;
    }

    get product() {
        return this._product;
    }

    set product(product) {
        this._product = product;
    }
}