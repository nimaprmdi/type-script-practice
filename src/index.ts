function Caplitalize(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.get;

    descriptor.get = function () {
        const result = original?.call(this);
        return typeof result === "string" ? result.toUpperCase() : result;
    };
}

class Person {
    constructor(public firstname: string, public lastname: string) {}

    @Caplitalize
    get fullName() {
        return `${this.firstname} ${this.lastname}`;
    }
}

let person = new Person("Nima", "Prmi");
console.log(person.fullName);
