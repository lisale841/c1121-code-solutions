/* exported calculator */

var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (numbers) {
    var sum = 0;
    for (var i = 0; i <= numbers.length - 1; i++) {
      sum = sum + numbers[i];
    }
    return sum;
  },
  getAverage(numbers) {
    var sum = 0;
    var i = 0; sum = 0; var ArrayLen = numbers.length;
    while (i < ArrayLen) {
      sum = sum + numbers[i++];

    }
    return sum / ArrayLen;

  }

};
