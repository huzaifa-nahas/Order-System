"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customers = void 0;
var Customers = /** @class */ (function () {
    function Customers(customers) {
        this._customers = customers;
    }
    Object.defineProperty(Customers.prototype, "customers", {
        get: function () {
            return this._customers;
        },
        enumerable: false,
        configurable: true
    });
    Customers.prototype.getCustomerById = function (id) {
        for (var _i = 0, _a = this._customers; _i < _a.length; _i++) {
            var customer = _a[_i];
            if (customer.id === id)
                return customer;
        }
    };
    return Customers;
}());
exports.Customers = Customers;
