"use strict";
let sales = 123456; // Type number
let course = "String"; // Type string
let is_published = false; // Type boolean (Also we can dont mention the variable type)
let level; // Type Any
let numbers = [1, 2, 3];
let user = [1, "Nima"];
user.push(1);
// Like this we can define own type and value
const myUser = 2 /* Size.Medium */;
let employee = {
    id: 1,
    name: "Nima",
    retire: () => {
        console.log(Date);
    },
};
// Giving instant, optional, default arguments
function calculateTax(income, taxYear, taxYears = 2022) {
    if ((taxYear || 2022) < 50000)
        return income * 1.2;
    return income * 1.3 + taxYears;
}
//# sourceMappingURL=index.js.map