//******** create function that with a given number, returns the the number that will be at the index of the given number in the Ficonacci sequence. use iteration. function could be altered to keep the array fib so it isn't re-created with each calling of the funciton.
function iFibonacci(n){
  if ( n == 1)
    return 1
  if (n == 0)
    return 0
  var fib = [0, 1]
  for(i = 2; i <= n; i++){
    fib.push( fib[i - 1] + fib[i - 2] )
  }
  return fib[fib.length - 1]
}
