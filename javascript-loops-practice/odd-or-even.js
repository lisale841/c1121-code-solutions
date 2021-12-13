/* exported oddOrEven */
function oddOrEven(numbers) {
  var numString = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      numString.push('even');
    } else {
      numString.push('odd');
    }
  }
  return numString;
}
