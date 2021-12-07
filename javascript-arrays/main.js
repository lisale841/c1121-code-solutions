var color = ['red', 'white', 'blue'];
console.log('value of colors[0]:', color[0]);
console.log('value of colors[1]:', color[1]);
console.log('value of colors[2]:', color[2]);
console.log('America is ' + color[0] + ', ' + color[1] + ', and ' + color[2] + '.');
color[2] = 'green';
console.log('Mexico is ' + color[0] + ', ' + color[1] + ', and ' + color[2] + '.');
console.log(color);

var students = ['Lisa', 'Paul', 'Mohamad', 'Lyn'];
var numberOfStudents = students.length;
console.log('There are ' + numberOfStudents + ' students in the class.');
var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];
console.log('The last student in the array is ' + lastStudent);
console.log(students);
