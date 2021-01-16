import {
    Entity
} from './Entity';

export class Product extends Entity {
    constructor(id, pType, bookOrVideo, price, description) {
        super(id);
        this._pType = pType;
        this._bookOrVideo = bookOrVideo;
        this._price = price;
        this._description = description;
    }

    get description() {
        return this._description;
    }

    set description(description) {
        this._description = description;
    }

    get pType() {
        return this._pType;
    }

    set pType(pType) {
        this._pType = pType;
    }

    get bookOrVideo() {
        return this._bookOrVideo;
    }

    set bookOrVideo(bookOrVideo) {
        this._bookOrVideo = bookOrVideo;
    }

    get price() {
        return this._price;
    }

    set price(price) {
        this._price = price;
    }

}