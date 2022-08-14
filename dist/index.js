"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid Amount");
        this._balance += amount;
    }
    calculateTax() {
        return this._balance * 0.2;
    }
    getBalance() {
        return this._balance;
    }
}
let account = new Account(1, "Nima", 50);
account.deposit(50);
console.log(account.getBalance());
//# sourceMappingURL=index.js.map