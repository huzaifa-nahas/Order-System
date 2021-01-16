import {
    Customer
} from '../Entities/Customer';
import {
    Customers
} from '../Services/Customers';
import {
    OrderService
} from '../Services/OrderService';
import {
    Product
} from '../Entities/Product';
import {
    OrderLine
} from '../Entities/OrderLine';
import {
    Order
} from '../Entities/Order';

let vidoSubscription = new Product(1, "subscription", "video", 15.60, "video subscription");
let harryBook = new Product(2, "oneTime", "book", 8.50, "Harry Potter and the Goblet of Fire");
let videoMission = new Product(3, "oneTime", "video", 4.50, "Mission Impossible");

let customer1 = new Customer(1, "Tom", "tom@gmail.com");
let customer2 = new Customer(2, "John", "john@yahoo.com");

let customers = new Customers([customer1, customer2]);

let orderLine1 = new OrderLine(1);
orderLine1.product = vidoSubscription;

let orderLine2 = new OrderLine(2);
orderLine2.product = harryBook;
orderLine2.quantity = 3;

let orderLine3 = new OrderLine(3);
orderLine3.product = videoMission;
orderLine3.quantity = 2;

let orderService = new OrderService(customers);

let items = [orderLine1, orderLine2, orderLine3]

let order = new Order(1);
order.custId = 2;
order.items = items;

console.log(`Activated subscription of ${customers.getCustomerById(2).firstName} is ${customers.getCustomerById(2).activatedVideoSubscription}`);

orderService.Process(order);

console.log("After Order Processing");

console.log(`Activated subscription of ${customers.getCustomerById(2).firstName} is ${customers.getCustomerById(2).activatedVideoSubscription}`);

console.log(`Generated slip for shipping of the order is \n ${order.shippingSlip} `);