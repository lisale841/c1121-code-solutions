function ExampleConstructor() {

}
console.log('value of prototype:', ExampleConstructor.prototype);
console.log('typeof prototype:', typeof ExampleConstructor.prototype);
var example = new ExampleConstructor();

console.log('value of example:', example);
console.log('value of instanceof', example instanceof ExampleConstructor);
