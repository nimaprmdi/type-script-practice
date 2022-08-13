// Optional Chaining
type Customer = {
    birthDay: Date;
    userId: number; // Just Here chilling
};

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : { birthDay: new Date(), userId: 0 }; // Should be two of them (birthDay & userId)
}

let customer = getCustomer(2);

// (customer?) will say if (customer) is NOT null and is NOT undefined
console.log(customer?.birthDay);

// (customer?.birthDay?) will say if both of them NOT null and is NOT undefined
console.log(customer?.birthDay?.getFullYear());

let log: any = null;
log?.("a"); // Will execute if it reference a function
