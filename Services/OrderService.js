"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
// import {OrderLine} from '../Entities/OrderLine';
var ItemType_1 = require("../Entities/ItemType");
var BookOrVideo_1 = require("../Entities/BookOrVideo");
var OrderService = /** @class */ (function () {
    function OrderService(customers) {
        this._customers = customers;
    }
    Object.defineProperty(OrderService.prototype, "customers", {
        get: function () {
            return this._customers;
        },
        set: function (customers) {
            this._customers = customers;
        },
        enumerable: false,
        configurable: true
    });
    OrderService.prototype.Process = function (order) {
        // Implement OR1
        for (var _i = 0, _a = order.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.product.pType === ItemType_1.ItemType.subscription) {
                var customer = this.customers.getCustomerById(order.custId);
                if (item.product.bookOrVideo === BookOrVideo_1.BookOrVideo.book)
                    customer.activatedBookSubscription = true;
                else if (item.product.bookOrVideo === BookOrVideo_1.BookOrVideo.video) {
                    customer.activatedVideoSubscription = true;
                }
            }
        }
        // Implement OR2
        for (var _b = 0, _c = order.items; _b < _c.length; _b++) {
            var item = _c[_b];
            if (item.product.pType === ItemType_1.ItemType.oneTime) {
                order.generateShippingSlip();
                break;
            }
        }
    };
    return OrderService;
}());
exports.OrderService = OrderService;
