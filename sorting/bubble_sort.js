//*******given an array of numbers, you must sort them in ascending order (lowest first), you can only do this by iterating through the array and checking if the item to the right of the one you're one, if so swap them, so given [3, 2, 6, 9, 5] one pass of the array would give us [2, 3, 6, 5, 9], since we have to keep iterating in any pass of the array, we can only check each number to the one on its right and then keep iterating. so we would need a second pass to put them in correct order [2, 3, 5, 6, 9]. Write an algorithm that given an array, uses bubble sort to sort the array.
function bubbleSort(arr){
  var keepGoing = true
  while (keepGoing){
    keepGoing = false //we set it as this false so by default it will stop after one pass, if we run into a single instance of a number needing to be switched, we will change keepGoing to true, since the numbers will have been shifted, we will need at least one more pass to confirm that they are the correct order, or more things need to be switched.
    for(i = 0; i < arr.length; i++){
      if(i == arr.length -1){
        break// no point in checking the last element
      } else if (arr[i] > arr[i + 1]){
        var temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        keepGoing = true
      }

    }//end for

  }// end while
  return arr
}
console.log(bubbleSort([3,2,6,9,5])) //returns [2, 3, 5, 6, 9]
console.log(bubbleSort([7,28,5,33,0,4,7,16])) //returns [0, 4, 5, 7, 7, 16, 28, 33]
console.log(bubbleSort([50,1,2,3,4,76])) //returns [1, 2, 3, 4, 50, 76]
