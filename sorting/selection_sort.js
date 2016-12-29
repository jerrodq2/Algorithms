//given an array [23,42,4,16,8,15], you must use selection sort to sort them. using selection sort you split your array into two parts, sorted at the front and unsorted at the back, basically, in the first pass, we have the given array, we iterate through the list and find the lowest number, we then swap that index with the 0 index of the list, so now the array would look like [4,42,23,16,8,15], so 4 would be considered the first of the sorted part of the array, from now on, we wouldn't look at that part of the array. So for the second pass, we would start iterating at the second index or 42, we start there and iterate to find the new lowest number (8), we then swap that index with what we started with, so the array would become [4, 8,23, 16, 42, 15], now we would start iterating through from 23, we continue this until the array is completely sorted. so the maximum and minimum number of passes through the array we will do is the length of the array, the given array is 6 long, so we would need to iterate through the array is six times, starting from the start of the unsorted portion of the array.
function selectionSort(arr){
  for(i = 0; i < arr.length; i++){
    var min  = arr[i]
    var index = i
    for(x = i; x < arr.length; x++){
      if(arr[x] < min){
        min = arr[x]//so we continually know which is the smallest
        index = x//so we know which index to swap with
      }
    }//end of inner loop
    if (min != arr[i]){//then arr[i] isn't the smallest number from that point on and it needs to be swapped
      var temp = arr[i]
      arr[i] = arr[index]
      arr[index] = temp
    }
  }//end of outer loop
  return arr
}
console.log(selectionSort([23,42,4,16,8,15])) // returns [4, 8, 15, 16, 23, 42]
console.log(selectionSort([3,2,6,9,5])) // returns [2, 3, 5, 6, 9]
console.log(selectionSort([7,28,5,33,0,4,7,16])) // returns [0, 4, 5, 7, 7, 16, 28, 33]
console.log(selectionSort([50,1,2,3,4,76])) // returns [1, 2, 3, 4, 50, 76]
