"use strict";
class Account {
    // Initialing the properties
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    // A method inside the class
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid Amount");
        this.balance += amount;
    }
}
let account = new Account(1, "Nima", 50);
account.deposit(50);
console.log(account.balance);
//# sourceMappingURL=index.js.map