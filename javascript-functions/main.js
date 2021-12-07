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
