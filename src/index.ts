/***** START Same Code as Top */
class Person {
    constructor(public firstname: string, public lastname: string) {}

    get fullName(): string {
        return this.firstname + " " + this.lastname;
    }

    walk() {
        console.log("Walk");
    }
}

class Teacher extends Person {
    // Overriding the fullName from The parnt Class using (override) keyword
    override get fullName(): string {
        return "Professor " + super.fullName; // Here We used super.(method) to get method from top(Parent) class
    }
}

class Student extends Person {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }
}

/***** END Same Code as Top */

class Principle extends Person {
    override get fullName(): string {
        return "Principle " + super.fullName;
    }
}

// Polymorphismed call
printNames([
    new Student(1, "Nima", "Prmi"), // Here we have shape of the Student object(class)
    new Teacher("Mosh", "Hamedani"), // Here we have shape of the Teacher object(class)
    new Principle("Mary", "Weather"),
]);

// It is polymorphism
function printNames(people: Person[]) {
    for (let person of people) console.log(person.fullName);
}
