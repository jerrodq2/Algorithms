//given array [6, 5, 3, 1, 8, 7, 2, 4], use insertion sort to sort the array. So starting with the first index, that number can be considered the start of the nums that are already sorted, almost frozen as those indexes won't move themselves. so starting out, 6 would be the first frozen index, next we look at the next index, so 5, we then one by one, starting the leftmost frozen index compare it to all frozen indexes to see where it goes a put it there, so we would compare it with six and put it on its left since it's smaller, so now our array would look like [5,6, 3, 1, 8, 7, 2, 4] with 5 and 6 frozen. So now we would go to the next index, 3. We would then compare it with each frozen index starting with 6, so it's smaller so we switch it with six, then 5 and it would be the smallest so it would go on the right. We do so for each element of the array until all are sorted/frozen
function insertionSort(arr){
  for(i = 1; i < arr.length; i++){
    for(x = i; x > 0; x --){
      if(arr[x] < arr[x - 1]){
        var temp = arr[x]
        arr[x] = arr[x - 1]
        arr[x - 1] = temp
      }
    }// end of inner loop
  }//end of outer loop
  return arr
}
console.log(insertionSort([23,42,4,16,8,15])) // returns [4, 8, 15, 16, 23, 42]
console.log(insertionSort([6,5,3,1,8,7,2,4])) // returns [1, 2, 3, 4, 5, 6, 7, 8]
console.log(insertionSort([7,28,5,33,0,4,7,16])) // returns [0, 4, 5, 7, 7, 16, 28, 33]
console.log(insertionSort([50,1,2,3,4,76])) // returns  [1, 2, 3, 4, 50, 76]
