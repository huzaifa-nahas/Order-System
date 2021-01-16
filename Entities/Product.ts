import {Entity} from './Entity';

import {BookOrVideo} from './BookOrVideo';

import {ItemType } from './ItemType';

export class Product extends Entity {
	private _description:string;
	private _pType: ItemType;
	private _bookOrVideo: BookOrVideo;	
	private _price:number;

	constructor(id:number, pType:ItemType, bookOrVideo:BookOrVideo, price:number, description:string) {
		super(id);
		this._pType = pType;
		this._bookOrVideo = bookOrVideo;
		this._price = price;
		this._description = description;
	}

	get description():string {
		return this._description;
	}

	set description(description:string) {
		this._description = description
	}

	get pType():ItemType {
		return this._pType;
	}

	set pType(pType:ItemType) {
		this._pType = pType;
	}

	get bookOrVideo():BookOrVideo {
		return this._bookOrVideo;
	}

	set bookOrVideo(bookOrVideo: BookOrVideo) {
		this._bookOrVideo = bookOrVideo;
	}

	get price():number {
		return this._price;
	}

	set price(price:number) {
		this._price = price;
	}
}