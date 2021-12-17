var books = [
  {
    isbn: 123453,
    title: 'Javascript',
    author: 'Dr. Jay'
  },
  {
    isbn: 678910,
    title: 'Css',
    author: 'Dr. Cee'
  },
  {
    isbn: 456728,
    title: 'Html',
    author: 'Dr. Hay'
  }
];
console.log('typeof:', typeof books);

console.log('typeof:', typeof JSON.stringify(books));

var student = '{"id":719,"name":"Lisa"}';
console.log('type of:', student);

var jsonStudent = JSON.parse(student);
console.log('typeof :', jsonStudent);
