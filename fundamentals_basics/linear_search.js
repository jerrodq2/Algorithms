//******** iterate through a given array of unsorted numbers and return the index or a given number or false if not found
function linear(num, arr){
  for(i = 0; i < arr.length; i ++){
    if(arr[i] == num)
      return i
  }
  return false
}
