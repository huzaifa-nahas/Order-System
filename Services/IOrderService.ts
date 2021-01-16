import {Order} from '../Entities/Order';

export interface IOrderService {
	Process (order:Order) :void;
}