function Phone(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;

}
var myPhone = new Phone('Apple', 'Iphone 13', '2021');
console.log('value of myphone:', myPhone);
console.log('typeof myphone:', typeof myPhone);

var grocerylist = ['eggs', 'milk', 'apple'];
grocerylist = new Array('apple', 'banana', 'flour');
console.log('value of grocerylist:', grocerylist);
console.log('typeof grocerylist:', typeof grocerylist);

function Sum(c, d) {
  return c + d;
}
var changedSum = new Sum('a', 'b', 'return a +b');
console.log('value of sum:', changedSum);
console.log('typeof function:', typeof changedSum);

var string1 = 'Hello';
string1 = new String('Hello World');
console.log('value of string1:', string1);
console.log('typeOf string1:', typeof string1);

var a = 2;
a = new Number(3);
console.log('value of number:', a);
console.log('typeof number:', typeof a);

var x = true;
x = new Boolean(false);
console.log('value of boolean:', x);
console.log('typeof boolean:', typeof x);
