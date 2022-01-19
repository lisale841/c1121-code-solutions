const add = require('./add');
const divide = require('./divide');
const multiply = require('./multiply');
const subtract = require('./subtract');

if (process.argv[3] === 'plus') {
  console.log(add(process.argv[2], process.argv[4]));
} else if (process.argv[3] === 'divide') {
  console.log(divide(process.argv[2], process.argv[4]));
} else if (process.argv[3] === 'multiply') {
  console.log(multiply(process.argv[2], process.argv[4]));
} else {
  console.log(subtract(process.argv[2], process.argv[4]));
}
