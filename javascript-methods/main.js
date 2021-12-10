var a = 1;
var b = 2;
var c = 3;

var maximumValue = Math.max(a, b, c);
console.log('maximumValue: ', maximumValue);

var heroes = ['iron man', 'captain america', 'spiderman', 'wonder woman'];

var randomNumber = Math.random();
randomNumber = heroes.length * randomNumber;
var randomIndex = Math.floor(randomNumber);
console.log('value of random index:', randomIndex);
var randomHeroes = heroes[randomIndex];
console.log('value of random heroes:', randomHeroes);
var library = [
  {
    title: '=Book 1',
    author: 'Dr. A'
  },
  {
    title: 'Book 2',
    author: 'Dr. B'
  },
  {
    title: 'Book 3',
    author: 'Dr. C'
  }
];
var lastBook = library.pop();
console.log('value of the last book:', lastBook);
var firstBook = library.shift();
console.log('value of the first book:', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmaye'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library:', library);
var fullName = 'Lisa Le';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
