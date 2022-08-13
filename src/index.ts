let speed: number | null = -2;

let ride = {
    // Nullish Operator
    // (??) will say if value was true put there (speed) otherwise put 30
    speed: speed ?? 30,
};

console.log(ride); // if null give 30 if (0) give (0) if (other value) give (other value)
