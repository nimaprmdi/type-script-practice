class Person {
    constructor(public firstname: string, public lastname: string) {}

    get fullName(): string {
        return this.firstname + " " + this.lastname;
    }

    walk() {
        console.log("Walk");
    }
}

class Student extends Person {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }
}

let student = new Student(1, "Nima", "Prmi");
