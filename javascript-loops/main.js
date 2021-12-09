/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;

  for (var i = 0; i < 10; i++) {
    numbers.push(currentNumber);
    currentNumber = currentNumber + 1;
  }

  return numbers;
}

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;

  for (var i = 2; i <= 20; i++) {
    evenNumbers.push(currentNumber);
    currentNumber = currentNumber + 2;
  }
  return evenNumbers;
}

function repeatWord(word, time) {
  var count = 1;
  var repeated = '';

  for (var i = count; i < time; i++) {
    repeated = repeated + word;
    count = count + 1;
  }
  return repeated;
}

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {

    console.log(string.charAt(i));
  }
}

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

function getKeys(object) {
  var keys = [];

  for (var key in object) {
    keys.push(key);
  }
  return keys;
}

function getValues(object) {
  var values = [];

  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
