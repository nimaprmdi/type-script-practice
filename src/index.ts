let sales: number = 123_456; // Type number
let course: string = "String"; // Type string
let is_published = false; // Type boolean (Also we can dont mention the variable type)
let level; // Type Any
let numbers: number[] = [1, 2, 3];

let user: [number, string] = [1, "Nima"];
user.push(1);

// PascalCase
const enum Size {
    Small = 1,
    Medium, // Automaticaly set 2
    Large, // Automaticaly set 3
}

// Like this we can define own type and value
const myUser: Size = Size.Medium;

type Employee = {
    readonly id: number;
    name?: string; // optional value
    retire: (date: Date) => void;
};

let employee: Employee = {
    id: 1,
    name: "Nima",
    retire: () => {
        console.log(Date);
    },
};

// Giving instant, optional, default arguments
function calculateTax(income: number, taxYear?: number, taxYears = 2022): number {
    if ((taxYear || 2022) < 50_000) return income * 1.2;
    return income * 1.3 + taxYears;
}
