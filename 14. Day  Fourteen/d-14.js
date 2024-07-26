
// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const person = new Person('John Doe', 30);
console.log(person.greet()); // Output: Hello, my name is John Doe and I am 30 years old.


// Task 2: Add a method to the Person class that updates the age property and logs the updated age.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
}

const person = new Person('John Doe', 30);
person.updateAge(31); // Output: Updated age: 31


// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    getStudentId() {
        return `Student ID: ${this.studentId}`;
    }
}

const student = new Student('Jane Doe', 20, 'S12345');
console.log(student.getStudentId()); // Output: Student ID: S12345


// Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    greet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}

const student = new Student('Jane Doe', 20, 'S12345');
console.log(student.greet()); // Output: Hello, my name is Jane Doe, I am 20 years old, and my student ID is S12345.


// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    static genericGreet() {
        return 'Hello, this is a generic greeting!';
    }
}

console.log(Person.genericGreet()); // Output: Hello, this is a generic greeting!


// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Student extends Person {
    static studentCount = 0;

    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student.studentCount++;
    }

    static getStudentCount() {
        return `Total number of students: ${Student.studentCount}`;
    }
}

const student1 = new Student('Jane Doe', 20, 'S12345');
const student2 = new Student('John Smith', 22, 'S67890');

console.log(Student.getStudentCount()); // Output: Total number of students: 2


// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person = new Person('John', 'Doe');
console.log(person.fullName); // Output: John Doe


// Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person = new Person('John', 'Doe');
person.fullName = 'Jane Smith';
console.log(person.fullName); // Output: Jane Smith


// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account {
    #balance = 0;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited: ${amount}, New Balance: ${this.#balance}`);
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            console.log('Insufficient funds.');
        } else {
            this.#balance -= amount;
            console.log(`Withdrawn: ${amount}, New Balance: ${this.#balance}`);
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new Account(100);
account.deposit(50);    // Output: Deposited: 50, New Balance: 150
account.withdraw(30);   // Output: Withdrawn: 30, New Balance: 120
account.withdraw(200);  // Output: Insufficient funds.


// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

const account = new Account(100);
account.deposit(50);    // Output: Deposited: 50, New Balance: 150
account.withdraw(30);   // Output: Withdrawn: 30, New Balance: 120
account.withdraw(200);  // Output: Insufficient funds.
console.log(`Final Balance: ${account.getBalance()}`); // Output: Final Balance: 120


// Feature Request 1: Basic Class Script

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const person = new Person('John Doe', 30);
console.log(person.greet()); // Output: Hello, my name is John Doe and I am 30 years old.


// Feature Request 2: Class Inheritance Script

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    greet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}

const student = new Student('Jane Doe', 20, 'S12345');
console.log(student.greet()); // Output: Hello, my name is Jane Doe, I am 20 years old, and my student ID is S12345.


//  Feature Request 3: Static Methods and Properties Script

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    static genericGreet() {
        return 'Hello, this is a generic greeting!';
    }
}

class Student extends Person {
    static studentCount = 0;

    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student.studentCount++;
    }

    static getStudentCount() {
        return `Total number of students: ${Student.studentCount}`;
    }
}

console.log(Person.genericGreet()); // Output: Hello, this is a generic greeting!

const student1 = new Student('Jane Doe', 20, 'S12345');
const student2 = new Student('John Smith', 22, 'S67890');

console.log(Student.getStudentCount()); // Output: Total number of students: 2


// Feature Request 4: Getters and Setters Script

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person = new Person('John', 'Doe');
console.log(person.fullName); // Output: John Doe

person.fullName = 'Jane Smith';
console.log(person.fullName); // Output: Jane Smith


// Feature Request 5: Private Fields Script

class Account {
    #balance = 0;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited: ${amount}, New Balance: ${this.#balance}`);
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            console.log('Insufficient funds.');
        } else {
            this.#balance -= amount;
            console.log(`Withdrawn: ${amount}, New Balance: ${this.#balance}`);
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new Account(100);
account.deposit(50);    // Output: Deposited: 50, New Balance: 150
account.withdraw(30);   // Output: Withdrawn: 30, New Balance: 120
account.withdraw(200);  // Output: Insufficient funds.
console.log(`Final Balance: ${account.getBalance()}`); // Output: Final Balance: 120
