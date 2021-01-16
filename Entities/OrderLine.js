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
exports.OrderLine = void 0;
var Entity_1 = require("./Entity");
var ItemType_1 = require("./ItemType");
var OrderLine = /** @class */ (function (_super) {
    __extends(OrderLine, _super);
    function OrderLine(id) {
        return _super.call(this, id) || this;
    }
    Object.defineProperty(OrderLine.prototype, "quantity", {
        get: function () {
            if (this.product.pType == ItemType_1.ItemType.subscription)
                return 1; // The user should only buy one subscription
            return this._quantity;
        },
        set: function (quantity) {
            this._quantity = quantity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderLine.prototype, "product", {
        get: function () {
            return this._product;
        },
        set: function (product) {
            this._product = product;
        },
        enumerable: false,
        configurable: true
    });
    return OrderLine;
}(Entity_1.Entity));
exports.OrderLine = OrderLine;
