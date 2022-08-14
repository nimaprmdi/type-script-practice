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

let student = new Student(1, "Nima", "Prmi");
let teacher = new Teacher("Mosh", "Hamedani");

console.log("student", student.fullName);
console.log("teacher", teacher.fullName);
