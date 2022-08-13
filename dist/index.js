"use strict";
let speed = -2;
let ride = {
    // Nullish Operator
    // (??) will say if value was true put there (speed) otherwise put 30
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
console.log(ride); // if null give 30 if (0) give (0) if (other value) give (other value)
//# sourceMappingURL=index.js.map