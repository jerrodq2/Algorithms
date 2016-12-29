//given an array, sort it using quick sort. We pick a pivot, we'll use the first index, then we create two arrays, left and right, and we compare it with every element in the given array, and put them into the left array if they are smaller or the right array, if they are bigger. We then repeat these steps for the two sub lists. Repeat all of these steps until the entire array is sorted
function quickSort(arr){
  if(arr.length == 0 || arr.length == 1)//if the array is empty or only has one, then it is sorted, no reason to sort anymore
    return arr
  if(arr.length == 2){// if there is only two then we can sort it now, no reason to call this function again
    if(arr[0] > arr[1]){
      var temp = arr[1]
      arr[1] = arr[0]
      arr[0] = temp
    }
    return arr
  }//so now we create the pivot, or number we compare the rest to. then we separate the rest of the array into the left or right now arrays, and recursively call this funciton on both of those, we repeat these steps until we hit the base cases of being given an array with a length of 0, 1, or 2
  var pivot = arr[0]
  var right = []
  var left = []
  for(i = 1; i < arr.length; i++){
    arr[i] < pivot? right.push(arr[i]) : left.push(arr[i])
  }
  return quickSort(right).concat(pivot).concat(quickSort(left))
}
console.log(quickSort([4,3,2,5,6,1])) //returns [1, 2, 3, 4, 5, 6]
console.log(quickSort([35,8,1,79,79,45])) //returns [1, 8, 35, 45, 79, 79]
console.log(quickSort([99,3,23,14,84])) //returns [3, 14, 23, 84, 99]
