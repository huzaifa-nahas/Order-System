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

describe("Testing OrderService", () => {
    let vidoSubscription, harryBook, videoMission;
    let customer1, customer2, customers;

    let orderLine1, orderLine2, orderLine3;
    let items;
    let orderService, order;


    beforeAll(() => {
        vidoSubscription = new Product(1, "subscription", "video", 15.60, "video subscription");
        harryBook = new Product(2, "oneTime", "book", 8.50, "Harry Potter and the Goblet of Fire");
        videoMission = new Product(3, "oneTime", "video", 4.50, "Mission Impossible");

        customer1 = new Customer(1, "Tom", "tom@gmail.com");
        customer2 = new Customer(2, "John", "john@yahoo.com");

        customers = new Customers([customer1, customer2]);

        orderLine1 = new OrderLine(1);
        orderLine1.product = vidoSubscription;

        orderLine2 = new OrderLine(2);
        orderLine2.product = harryBook;
        orderLine2.quantity = 3;

        orderLine3 = new OrderLine(3);
        orderLine3.product = videoMission;
        orderLine3.quantity = 2;

        items = [orderLine1, orderLine2, orderLine3]

        orderService = new OrderService(customers);



        order = new Order(1);
        order.custId = 2;
        order.items = items;
    })

    test('Before processing order the activated video subscription of John should be false', () => {
        expect(customers.getCustomerById(2).activatedVideoSubscription).toBe(false)
    })

    test('After processing order the activated video subscription of John should be true', () => {
        orderService.Process(order);
        expect(customers.getCustomerById(2).activatedVideoSubscription).toBe(true)
    })

    test('After processing order a shipping slip need to be generated', () => {
        orderService.Process(order);
        let shippingSlip = `Type\t Quantity\t Description
Book \t 3 \t Harry Potter and the Goblet of Fire 
Video \t 2 \t Mission Impossible \n`;
        expect(order.shippingSlip).toBe(shippingSlip)
    })
})