// Onlu accept number & string types as argument - extends from primitives
function logNumberString<T extends number | string>(value: T): T {
    return value;
}
// Only accept (object) with (name) key - Extends from object
function logObjects<T extends { name: string }>(value: T): T {
    return value;
}

interface Person {
    name: string;
}
// Only accept (Person) interface as the type - extends from interface
function logInterface<T extends Person>(value: T): T {
    return value;
}

// Only Accept Man or People classes as type - extends from Class
class People {
    constructor(public name: string) {}
}
class Man extends People {
    constructor(public name: string) {
        super(name);
    }
}
function logClass<T extends Man>(value: T): T {
    return value;
}

logNumberString(0);
logObjects({ name: "Nima" });
logClass(new Man("Name"));
