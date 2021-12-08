function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

var convertMinutesToSecondsResults = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResults:', convertMinutesToSecondsResults);

function greet(name) {
  return '"Hey, ' + name + '"';
}

var greeting = greet('Lisa');
console.log('greeting:', greeting);

function getArea(width, height) {
  return width * height;
}

var getAreaResults = getArea(17, 42);
console.log('getAreaResults:', getAreaResults);

function getFirstName(person) {
  return person.firstName;
}

var getFirstNameResults = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('value of getFirstNameResults: ', getFirstNameResults);

function getLastElement(array) {
  return array[array.length - 1];
}

var getLastElementResults = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('value of getLastElementResults: ', getLastElementResults);
