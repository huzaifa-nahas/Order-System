import {
    Entity
} from "./Entity";

export class Customer extends Entity {
    constructor(id, firstName, email) {
        super(id);
        this._firstName = firstName;
        this._email = email;
        this._activatedBookSubscription = false;
        this._activatedVideoSubscription = false;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }

    set activatedBookSubscription(activatedBookSubscription) {
        this._activatedBookSubscription = activatedBookSubscription;
    }

    set activatedVideoSubscription(activatedVideoSubscription) {
        this._activatedVideoSubscription = activatedVideoSubscription;
    }

    get activatedBookSubscription() {
        return this._activatedBookSubscription;
    }

    get activatedVideoSubscription() {
        return this._activatedVideoSubscription;
    }

}