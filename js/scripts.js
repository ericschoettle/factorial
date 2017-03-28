//factorial, recursive style
function factorial(number) {
  var accumulator = 1
  while (number>1) {
    accumulator = accumulator * number;
    number -= 1;
  }
  return accumulator
}

//factorial, for-loop style
function factorialFor(number) {
  countingArray = []
  for (var i = 1; i <= number; i++) {
    countingArray.push(i)
  }
  var accumulator = 1
  for (var i = 0; i < countingArray.length; i++) {
    accumulator = accumulator * countingArray[i]
  }
  return accumulator
}
