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
exports.Customer = void 0;
var Entity_1 = require("./Entity");
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(id, firstName, email) {
        var _this = _super.call(this, id) || this;
        _this._activatedBookSubscription = false;
        _this._activatedVideoSubscription = false;
        _this._firstName = firstName;
        _this._email = email;
        return _this;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (firstName) {
            this._firstName = firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (email) {
            this._email = email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "activatedBookSubscription", {
        get: function () {
            return this._activatedBookSubscription;
        },
        set: function (activatedBookSubscription) {
            this._activatedBookSubscription = activatedBookSubscription;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "activatedVideoSubscription", {
        get: function () {
            return this._activatedVideoSubscription;
        },
        set: function (activatedVideoSubscription) {
            this._activatedVideoSubscription = activatedVideoSubscription;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}(Entity_1.Entity));
exports.Customer = Customer;
