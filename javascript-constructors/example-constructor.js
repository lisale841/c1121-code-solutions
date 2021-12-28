function ExampleConstructor() {

}

var example = new ExampleConstructor();
console.log('value of prototype', typeof _proto_);
console.log('value of ExampleConstructor:', ExampleConstructor);
console.log('typeof ExampleConstructor:', typeof ExampleConstructor);
console.log('example varible:', example);
console.log('instance of:', example instanceof ExampleConstructor);
