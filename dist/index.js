"use strict";
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    get fullName() {
        return this.firstname + " " + this.lastname;
    }
    walk() {
        console.log("Walk");
    }
}
class Principle extends Person {
    get fullName() {
        return "Principle" + super.fullName;
    }
}
class Teacher extends Person {
    // Overriding the fullName from The parnt Class using (override) keyword
    get fullName() {
        return "Professor " + super.fullName; // Here We used super.(method) to get method from top(Parent) class
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
}
printNames([
    new Student(1, "Nima", "Prmi"),
    new Teacher("Mosh", "Hamedani"),
    new Principle("Mary", "Weather"),
]);
// It is polymorphism
function printNames(people) {
    for (let person of people)
        console.log(person.fullName);
}
//# sourceMappingURL=index.js.map