//******** with a given number, return the the answer of itself multiplied by every number between itself and zero, use iteration, not recursion.
function iFactorial(n){
  var sum = n, num = n
  while(num != 1){
    num --
    sum *= num
  }
  return sum
}
