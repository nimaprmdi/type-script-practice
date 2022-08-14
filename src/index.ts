class Account {
    nickname?: string;

    constructor(public readonly id: number, public owner: string, private _balance: number) {}

    deposit(amount: number): void {
        if (amount <= 0) throw new Error("Invalid Amount");

        this._balance += amount;
    }

    private calculateTax(): number {
        return this._balance * 0.2;
    }

    get balance(): number {
        return this._balance;
    }

    set balance(value: number) {
        if (value <= 0) throw new Error("Invalid Value");

        this._balance = value;
    }
}

let account = new Account(1, "Nima", 50);
account.deposit(50);

console.log(account.balance);
