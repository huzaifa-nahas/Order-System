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
exports.Product = void 0;
var Entity_1 = require("./Entity");
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product(id, pType, bookOrVideo, price, description) {
        var _this = _super.call(this, id) || this;
        _this._pType = pType;
        _this._bookOrVideo = bookOrVideo;
        _this._price = price;
        _this._description = description;
        return _this;
    }
    Object.defineProperty(Product.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (description) {
            this._description = description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "pType", {
        get: function () {
            return this._pType;
        },
        set: function (pType) {
            this._pType = pType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "bookOrVideo", {
        get: function () {
            return this._bookOrVideo;
        },
        set: function (bookOrVideo) {
            this._bookOrVideo = bookOrVideo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (price) {
            this._price = price;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}(Entity_1.Entity));
exports.Product = Product;
