//******* with a given number, return the the sum of itself and every number between itself and zero, use iteration, not recursion.
function iSum(n){
  var sum = n, num = n
  while(num != 0){
    num --
    sum += num
  }
  return sum
}
