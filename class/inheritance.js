"use strict";
class User1 {
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    display() {
        console.log(`username: ${this.userName}, age: ${this.age}`);
    }
}
class Student extends User1 {
    constructor(userName, age, studentId) {
        super(userName, age);
        this.studentId = studentId;
    }
    display() {
        console.log(`username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`);
    }
}
let student1 = new Student("keya", 31, 1302020015);
student1.display();
let user_1 = new User1("Anisul Islam", 25);
user_1.display();
// let user2 = new User1("Rabeya Islam", 31);
// user2.display();
