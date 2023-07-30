"use strict";
class User {
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    display() {
        console.log(`username: ${this.userName}, age: ${this.age}`);
    }
}
let user1 = new User("Anisul Islam", 25);
user1.display();
let user2 = new User("Rabeya Islam", 31);
user2.display();
