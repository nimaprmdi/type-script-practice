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
let student = new Student(1, "Nima", "Prmi");
let teacher = new Teacher("Mosh", "Hamedani");
console.log("student", student.fullName);
console.log("teacher", teacher.fullName);
//# sourceMappingURL=index.js.map