//********implement a recrusive function that is given and array and through the binary search method, returns the index of a given number or false
function rBinarySearch(arr, n){
  var mid = Math.floor(arr.length/2) //middle of the given array, tells us which direction to move

  function recrusive(start, end){
    if(arr[start] == n)
      return start
    if(arr[end] == n)
      return end
    if( start == (end - 1) )//This states that the span of the array we're working with is only two indexes long, meaning we've narrowed it down to 2 possiblities and if both of those fail the 2 above conditionals, then the index isn't in the given array so return false.
      return false
    var middle = Math.floor( (start + end)/2 )
    if(arr[middle] == n){// no point going any furth
      return middle
    } else if(arr[middle] < n){ //then the number is betwen the middle index and end, a new span to work with.
      return recrusive(middle, end)
    } else{ // then the number is between middle and start
      return recrusive(start, middle)
    }
  }// END OF INNER FUNCTION

  // here we will actually call the recursive function
  if( arr[mid] == n)
    return mid
  if( arr[mid] < n)
    return recrusive(mid, arr.length-1)
  return recrusive(0, mid)

}
