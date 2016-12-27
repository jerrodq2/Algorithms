//******** create function that with a given number, returns the the number that will be at the index of the given number in the Ficonacci sequence. use recursion.
function rFibonacci(n){
  if ( n == 1)
    return 1
  if (n == 0)
    return 0
  return rFibonacci(n - 1) + rFibonacci(n - 2)
}
