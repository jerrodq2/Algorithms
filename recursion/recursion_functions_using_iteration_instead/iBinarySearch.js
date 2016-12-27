//********implement a iteration function that is given and array and through the binary search method, returns the index of a given number or false
function iBinarySearch(arr, n){
  var mid = Math.floor(arr.length/2) //middle of the given array, tells us which direction to move
  if(arr[mid] == n)
    return mid
  if(arr[mid] < n){
    var start = mid, end = arr.length-1
  } else{
    var start = 0, end = mid
  }
  while(true){//infinite loop, break conditions are inside as returns
    if(start[arr] == n)
      return start
    if(end[arr] == n)
      return end
    if(start == (end - 1))//This states that the span of the array we're working with is only two indexes long, meaning we've narrowed it down to 2 possiblities and if both of those fail the 2 above conditionals, then the index isn't in the given array so return false.
      return false
    mid = Math.floor( (start + end)/2 )
    if(arr[mid] == n){
      return mid
    } else if(arr[mid] < n){
      start = mid
      continue
    } else{
      end = mid
      continue
    }
  }
}
