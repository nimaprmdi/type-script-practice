class Account {
    nickname?: string;

    constructor(public readonly id: number, public owner: string, private _balance: number) {}

    get balance(): number { // Will get the private property 
        return this._balance;
    }

    set balance(value: number) { // Will set the private property 
        if (value <= 0) throw new Error("Invalid Value");

        this._balance = value;
    }
}

let account = new Account(1, "Nima", 50);

console.log(account.balance); // we can get the property value here
account.balance = 1; // we can access and change its property value here
