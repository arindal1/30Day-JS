// Activity 1: Basic Event Handling

// Task 1: Add a click event listener to a button that changes the text content of a paragraph.
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('textParagraph').textContent = 'Text has been changed!';
});

// Task 2: Add a double-click event listener to an image that toggles its visibility.
document.getElementById('toggleImage').addEventListener('dblclick', function() {
    this.classList.toggle('hidden');
});


// Activity 2: Mouse Events

// Task 3: Add a mouseover event listener to an element that changes its background color.
document.getElementById('colorDiv').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'lightblue';
});

// Task 4: Add a mouseout event listener to an element that resets its background color.
document.getElementById('colorDiv').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});


// Activity 3: Keyboard Events

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
document.getElementById('keyInput').addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
});

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
document.getElementById('keyInput').addEventListener('keyup', function() {
    document.getElementById('inputValue').textContent = this.value;
});


// Activity 4: Form Events

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
});

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
document.getElementById('dropdown').addEventListener('change', function() {
    document.getElementById('selectedValue').textContent = `Selected: ${this.value}`;
});


// Activity 5: Event Delegation

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
document.getElementById('itemList').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log('List item clicked:', event.target.textContent);
    }
});

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
document.getElementById('parentElement').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        console.log('Button clicked:', event.target.id);
    }
});



// Feature Request 1: Text Content Manipulation Script
// Write a script that selects an HTML element by its ID and changes its text content.
function changeTextContentById(elementId, newText) {
    document.getElementById(elementId).textContent = newText;
}


// Feature Request 2: Element Creation Script
// Create a script that demonstrates creating a new div element and appending it to the body.
function createAndAppendDiv(newText) {
    const newDiv = document.createElement('div');
    newDiv.textContent = newText;
    document.body.appendChild(newDiv);
}


// Feature Request 3: Element Removal Script
// Write a script that selects an HTML element and removes it from the DOM.
function removeElementById(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.parentNode.removeChild(element);
    }
}


// Feature Request 4: Attribute Modification Script
// Create a script that changes the attributes of an HTML element.
function changeElementAttribute(elementId, attributeName, attributeValue) {
    const element = document.getElementById(elementId);
    if (element) {
        element.setAttribute(attributeName, attributeValue);
    }
}


// Feature Request 5: Event Handling Script
// Write a script that adds event listeners to HTML elements to change their content or style based on user interactions.
function addClickEventListener(elementId, callback) {
    const element = document.getElementById(elementId);
    if (element) {
        element.addEventListener('click', callback);
    }
}

function addMouseOverEventListener(elementId, callback) {
    const element = document.getElementById(elementId);
    if (element) {
        element.addEventListener('mouseover', callback);
    }
}

function addMouseOutEventListener(elementId, callback) {
    const element = document.getElementById(elementId);
    if (element) {
        element.addEventListener('mouseout', callback);
    }
}


// Example Usage:
// Change text content
changeTextContentById('exampleText', 'New text content');

// Create and append a new div
createAndAppendDiv('This is a newly created div.');

// Remove an element by ID
removeElementById('removeThisElement');

// Change an element's attribute
changeElementAttribute('exampleImage', 'src', 'https://github.com/arindal1/30Day-JS/blob/main/res/2.jpg');

// Add event listeners
addClickEventListener('exampleButton', () => {
    alert('Button clicked!');
});

addMouseOverEventListener('exampleDiv', () => {
    document.getElementById('exampleDiv').style.backgroundColor = 'lightblue';
});

addMouseOutEventListener('exampleDiv', () => {
    document.getElementById('exampleDiv').style.backgroundColor = '';
});
