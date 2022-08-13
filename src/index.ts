// Union Type Checking

function kgToLbs(weight: number | string): number {
    if (typeof weight === "number") return weight * 2.2; // Intellisense  detect that is number
    else return parseInt(weight) * 2.2; // Intellisense detect that is string
}
