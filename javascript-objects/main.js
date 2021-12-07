var student = {
  firstName: 'Lisa',
  lastName: 'Le',
  age: 30
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'A/R Bookkeeper';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log(student);

var vehicle = {
  make: 'Subaru',
  model: 'sedan',
  year: 2012
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log(vehicle);

var pet = {
  name: 'Peanut',
  type: 'chihuahua'

};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
