class Account {
    readonly id: number; // Setting type of the property
    owner: string;
    private _balance: number; // Only accessible from inside of class (private should start with _ )
    nickname?: string; // optional modifier

    // Initialing the properties
    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }

    // A method inside the class
    deposit(amount: number): void {
        if (amount <= 0) throw new Error("Invalid Amount");

        this._balance += amount;
    }

    // A private function only available inside class
    private calculateTax(): number {
        return this._balance * 0.2;
    }

    getBalance(): number {
        return this._balance;
    }
}

let account = new Account(1, "Nima", 50);
account.deposit(50);

console.log(account.getBalance()); // return this._balance
