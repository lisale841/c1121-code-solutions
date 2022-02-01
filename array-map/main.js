const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubledNumbersArray = numbers.map(x => x * 2);
console.log('doubledNumbersArray', doubledNumbersArray);

const pricesArray = numbers.map(x => '$' + Number.parseFloat(x).toFixed(2));
console.log('pricesArrayArray:', pricesArray);

const upperCasedArray = languages.map(x => x.toUpperCase());
console.log('upperCasedArray:', upperCasedArray);

const firstLetterArray = languages.map(x => x[0]);
console.log('firstLetterArray', firstLetterArray);
