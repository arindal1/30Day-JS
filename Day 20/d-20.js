// Activity 1: Understanding LocalStorage

// Task 1: Save and Retrieve a String Value
localStorage.setItem('myString', 'Hello, LocalStorage!');
console.log(localStorage.getItem('myString'));


// Task 2: Save and Retrieve an Object
const myObject = { name: 'John Doe', age: 30 };
localStorage.setItem('myObject', JSON.stringify(myObject));
const retrievedObject = JSON.parse(localStorage.getItem('myObject'));
console.log(retrievedObject);


// Activity 2: Using LocalStorage

// Task 3: Save User Input to LocalStorage
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#localStorageForm');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = nameInput.value;
        const email = emailInput.value;
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        displayLocalStorageData();
    });

    const displayLocalStorageData = () => {
        const name = localStorage.getItem('name');
        const email = localStorage.getItem('email');
        if (name && email) {
            document.querySelector('#localStorageData').textContent = `Name: ${name}, Email: ${email}`;
        }
    };

    displayLocalStorageData();
});


// Task 4: Remove an Item from LocalStorage
localStorage.setItem('itemToRemove', 'This will be removed');
console.log('Before removal:', localStorage.getItem('itemToRemove'));
localStorage.removeItem('itemToRemove');
console.log('After removal:', localStorage.getItem('itemToRemove'));


// Activity 3: Understanding SessionStorage

// Task 5: Save and Retrieve a String Value
sessionStorage.setItem('mySessionString', 'Hello, SessionStorage!');
console.log(sessionStorage.getItem('mySessionString'));


// Task 6: Save and Retrieve an Object
const mySessionObject = { username: 'JaneDoe', loggedIn: true };
sessionStorage.setItem('mySessionObject', JSON.stringify(mySessionObject));
const retrievedSessionObject = JSON.parse(sessionStorage.getItem('mySessionObject'));
console.log(retrievedSessionObject);


// Activity 4: Using SessionStorage

// Task 7: Save User Input to SessionStorage
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#sessionStorageForm');
    const sessionNameInput = document.querySelector('#sessionName');
    const sessionEmailInput = document.querySelector('#sessionEmail');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = sessionNameInput.value;
        const email = sessionEmailInput.value;
        sessionStorage.setItem('sessionName', name);
        sessionStorage.setItem('sessionEmail', email);
        displaySessionStorageData();
    });

    const displaySessionStorageData = () => {
        const name = sessionStorage.getItem('sessionName');
        const email = sessionStorage.getItem('sessionEmail');
        if (name && email) {
            document.querySelector('#sessionStorageData').textContent = `Name: ${name}, Email: ${email}`;
        }
    };

    displaySessionStorageData();
});


// Task 8: Remove an Item from SessionStorage
sessionStorage.setItem('sessionItemToRemove', 'This will be removed');
console.log('Before removal:', sessionStorage.getItem('sessionItemToRemove'));
sessionStorage.removeItem('sessionItemToRemove');
console.log('After removal:', sessionStorage.getItem('sessionItemToRemove'));


// Activity 5: Comparing LocalStorage and SessionStorage

// Task 9: Save and Retrieve Values from Both Storages
const saveToBothStorages = (key, value) => {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
    console.log('LocalStorage:', localStorage.getItem(key));
    console.log('SessionStorage:', sessionStorage.getItem(key));
};

saveToBothStorages('sharedKey', 'Shared Value');


// Task 10: Clear All Data from Both Storages
const clearBothStorages = () => {
    localStorage.clear();
    sessionStorage.clear();
    console.log('LocalStorage cleared:', localStorage.length === 0);
    console.log('SessionStorage cleared:', sessionStorage.length === 0);
};

clearBothStorages();
