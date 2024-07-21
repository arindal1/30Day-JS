// Task 1: Select an HTML element by its ID and change its text content.
document.getElementById('header').textContent = 'New Header Text';


// Task 2: Select an HTML element by its class and change its background color.
document.querySelector('.content').style.backgroundColor = 'lightblue';


// Task 3: Create a new div element with some text content and append it to the body.
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello, World!';
document.body.appendChild(newDiv);


// Task 4: Create a new li element and add it to an existing ul list.
const newLi = document.createElement('li');
newLi.textContent = 'New List Item';
document.getElementById('myList').appendChild(newLi);


// Task 5: Select an HTML element and remove it from the DOM.
const elementToRemove = document.getElementById('itemToRemove');
if (elementToRemove) {
    elementToRemove.remove();
}


// Task 6: Remove the last child of a specific HTML element.
const parentElement = document.getElementById('myList');
if (parentElement.lastElementChild) {
    parentElement.removeChild(parentElement.lastElementChild);
}


// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
document.getElementById('image').setAttribute('src', 'https://github.com/arindal1/30Day-JS/blob/main/res/3.jpg');


// Task 8: Add and remove a CSS class to/from an HTML element.
const headerElement = document.getElementById('header');
headerElement.classList.add('newClass');
headerElement.classList.remove('content');


// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
document.getElementById('myButton').addEventListener('click', function() {
    document.getElementById('myParagraph').textContent = 'Button Clicked!';
});


// Task 10: Add a mouseover event listener to an element that changes its border color.
document.getElementById('hoverElement').addEventListener('mouseover', function() {
    this.style.borderColor = 'red';
    this.style.borderStyle = 'solid';
});


// Feature Requests:
// 1. Text Content Manipulation Script
function changeTextContentById(elementId, newText) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = newText;
    }
}
changeTextContentById('header', 'Updated Header Text');

// 2. Element Creation Script
function createAndAppendDiv() {
    const newDiv = document.createElement('div');
    newDiv.textContent = 'This is a new div!';
    document.body.appendChild(newDiv);
}
createAndAppendDiv();

// 3. Element Removal Script
function removeElementById(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.remove();
    }
}
removeElementById('itemToRemove');

// 4. Attribute Modification Script
function changeElementAttribute(elementId, attribute, newValue) {
    const element = document.getElementById(elementId);
    if (element) {
        element.setAttribute(attribute, newValue);
    }
}
changeElementAttribute('image', 'src', 'newImage.jpg');

// 5. Event Handling Script
function addClickListenerToButton(buttonId, paragraphId) {
    const button = document.getElementById(buttonId);
    const paragraph = document.getElementById(paragraphId);
    if (button && paragraph) {
        button.addEventListener('click', function() {
            paragraph.textContent = 'Button was clicked!';
        });
    }
}
addClickListenerToButton('myButton', 'myParagraph');

function addMouseOverListener(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.addEventListener('mouseover', function() {
            this.style.borderColor = 'blue';
            this.style.borderStyle = 'solid';
        });
    }
}
addMouseOverListener('hoverElement');
