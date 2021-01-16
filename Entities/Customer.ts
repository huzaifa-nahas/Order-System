import {Entity} from "./Entity"

export class Customer extends Entity {
	private _firstName:string;
	private _email: string;
	private _activatedBookSubscription: boolean = false;
	private _activatedVideoSubscription: boolean = false;

	constructor(id:number, firstName: string, email:string) {
		super(id);
		this._firstName = firstName;
		this._email = email;
	}

	get firstName() : string {
		return this._firstName;
	}

	set firstName(firstName:string) {
		this._firstName = firstName;
	}

	get email() :string {
		return this._email;
	}

	set email(email:string) {
		this._email = email;
	}

	set activatedBookSubscription(activatedBookSubscription: boolean) {
		this._activatedBookSubscription = activatedBookSubscription;
	}

	set activatedVideoSubscription(activatedVideoSubscription) {		
		this._activatedVideoSubscription = activatedVideoSubscription;
	}

	get activatedBookSubscription():boolean {
		return this._activatedBookSubscription
	}

	get activatedVideoSubscription():boolean {		
		return this._activatedVideoSubscription
	}
}