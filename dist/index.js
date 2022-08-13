"use strict";
var _a;
function getCustomer(id) {
    return id === 0 ? null : { birthDay: new Date(), userId: id };
}
let customer = getCustomer(2);
// (customer?) will say if (customer) is NOT null and is NOT undefined
console.log(customer === null || customer === void 0 ? void 0 : customer.birthDay);
// (customer?.birthDay?) will say if both of them NOT null and is NOT undefined
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthDay) === null || _a === void 0 ? void 0 : _a.getFullYear());
console.log(customer === null || customer === void 0 ? void 0 : customer.userId);
//# sourceMappingURL=index.js.map