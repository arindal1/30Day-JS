// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};
console.log(book);


// Task 2: Access and log the title and author properties of the book object.
console.log(`Title: ${book.title}`);
console.log(`Author: ${book.author}`);


// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.getDetails = function() {
    return `${this.title} by ${this.author}`;
};
console.log(book.getDetails());


// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updateYear = function(newYear) {
    this.year = newYear;
};
book.updateYear(1961);
console.log(book);


// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
    name: "Central Library",
    books: [
        { title: "1984", author: "George Orwell", year: 1949 },
        { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
        { title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953 }
    ]
};
console.log(library);


// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(`Library Name: ${library.name}`);
library.books.forEach(book => console.log(`Book Title: ${book.title}`));


// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
book.getTitleAndYear = function() {
    return `${this.title} (${this.year})`;
};
console.log(book.getTitleAndYear());


// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}


// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log(Object.keys(book));
console.log(Object.values(book));


// Feature Request 1: Write a script that creates a book object, adds methods to it, and logs its properties and method results.
const bookFeature = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    getDetails: function() {
        return `${this.title} by ${this.author}`;
    },
    updateYear: function(newYear) {
        this.year = newYear;
    },
    getTitleAndYear: function() {
        return `${this.title} (${this.year})`;
    }
};

console.log(bookFeature);
console.log(bookFeature.getDetails());
bookFeature.updateYear(1926);
console.log(bookFeature);
console.log(bookFeature.getTitleAndYear());


// Feature Request 2: Create a script that defines a library object containing an array of book objects and logs the library's details.
const libraryFeature = {
    name: "City Library",
    books: [
        { title: "Moby Dick", author: "Herman Melville", year: 1851 },
        { title: "The Odyssey", author: "Homer", year: -800 },
        { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
    ],
    getLibraryDetails: function() {
        console.log(`Library Name: ${this.name}`);
        this.books.forEach(book => console.log(`Book Title: ${book.title}`));
    }
};

console.log(libraryFeature);
libraryFeature.getLibraryDetails();


// Feature Request 3: Write a script that demonstrates iterating over an object's properties using for...in loop and Object.keys/Object.values.
const bookIteration = {
    title: "War and Peace",
    author: "Leo Tolstoy",
    year: 1869
};

console.log('Using for...in loop:');
for (let key in bookIteration) {
    console.log(`${key}: ${bookIteration[key]}`);
}

console.log('Using Object.keys and Object.values:');
console.log(Object.keys(bookIteration));
console.log(Object.values(bookIteration));
