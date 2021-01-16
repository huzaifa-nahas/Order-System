"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
var Entity_1 = require("./Entity");
var ItemType_1 = require("./ItemType");
var BookOrVideo_1 = require("./BookOrVideo");
var Order = /** @class */ (function (_super) {
    __extends(Order, _super);
    function Order(id) {
        var _this = _super.call(this, id) || this;
        _this._totalPrice = 0.0;
        _this._shippingSlip = "";
        return _this;
    }
    Object.defineProperty(Order.prototype, "custId", {
        get: function () {
            return this._custId;
        },
        set: function (custId) {
            this._custId = custId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (items) {
            this._items = items;
            for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
                var item = _a[_i];
                this._totalPrice += item.product.price * item.quantity;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "totalPrice", {
        get: function () {
            return this._totalPrice;
        },
        enumerable: false,
        configurable: true
    });
    Order.prototype.generateShippingSlip = function () {
        this._shippingSlip += "Type\t Quantity\t Description\n";
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.product.pType === ItemType_1.ItemType.oneTime) {
                var iType = "Book";
                if (item.product.bookOrVideo === BookOrVideo_1.BookOrVideo.video)
                    iType = "Video";
                this._shippingSlip += iType + " \t " + item.quantity + " \t " + item.product.description + " \n";
            }
        }
    };
    Object.defineProperty(Order.prototype, "shippingSlip", {
        get: function () {
            return this._shippingSlip;
        },
        enumerable: false,
        configurable: true
    });
    return Order;
}(Entity_1.Entity));
exports.Order = Order;
