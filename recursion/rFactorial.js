//******** with a given number, return the the answer of itself multiplied by every number between itself and zero, use recursion.
function rFactorial(n){
  if( n == 1){
    return 1
  } else{
    return rFactorial(n -1) * n
  }
}
