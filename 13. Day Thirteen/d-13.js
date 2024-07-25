// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

// main.js
import add from './add.js';

console.log(add(5, 3)); // Output: 8


// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

// main.js
import person from './person.js';

console.log(person.greet()); // Output: Hello, my name is John Doe and I am 30 years old.


// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

// main.js
import { add, subtract } from './math.js';

console.log(add(10, 5));       // Output: 15
console.log(subtract(10, 5));  // Output: 5


// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.

// main.js
import multiply from './multiply.js';

console.log(multiply(6, 7)); // Output: 42


// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

// main.js
import * as math from './constants.js';

console.log(math.PI);          // Output: 3.14
console.log(math.square(4));   // Output: 16
console.log(math.cube(3));     // Output: 27


// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.

// CLI...
// npm install lodash

// main.js
import _ from 'lodash';

const numbers = [10, 5, 3, 7];
const sortedNumbers = _.sortBy(numbers);

console.log(sortedNumbers); // Output: [3, 5, 7, 10]


// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.

// CLI...
// npm install axios

// main.js
import axios from 'axios';

axios.get('https://api.publicapis.org/entries')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });



// Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.

// CLI...

// npm install
// npm run build

// index.html
// webpack.config.js
// package.json



// Feature Request 1: Basic Module Script
// Task 1


// Feature Request 2: Named and Default Exports Script
// Task 3


// Feature Request 3: Third-Party Module Script

// CLI...
// npm install lodash axios

// main.js
import _ from 'lodash';
import axios from 'axios';

// Using lodash
const numbers1 = [10, 5, 3, 7];
const sortedNumbers1 = _.sortBy(numbers1);
console.log(sortedNumbers1); // Output: [3, 5, 7, 10]

// Using axios
axios.get('https://api.publicapis.org/entries')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });


// Feature Request 4: Module Bundling Script (Optional)

// Refer to Activity 5 for the setup and usage of Webpack to bundle multiple JavaScript files into a single file.
