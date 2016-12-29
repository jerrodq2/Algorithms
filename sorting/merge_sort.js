//given two sorted arrays [4, 15, 16, 50], [8, 23, 42, 108], combine them into one new sorted array, the idea is that since both arrays are sorted, you compare the first element in both arrays since one of those will be the smallest number and start of the new array, so in this case 4, the first index of the first array would be the smallest. Then you compare the first index from the second array and the next index of the first one or 15 and 8, and continually check the next lowest index of each respective array.
function mergeSort(one, two){
  var answer = []
  var len = one.length + two.length
  var oneIndex = 0, twoIndex = 0
  for(i = 0; i < len ; i++){
    if(oneIndex == one.length){// the first two if statements are for if we reached the end of one of the given arrays and we just need to add the rest of the other array one index at a time
      answer.push(two[twoIndex])
      twoIndex++
    } else if(twoIndex == two.length){// the first two if statements are for if we reached the end of one of the given arrays and we just need to add the rest of the other array one index at a time
      answer.push(one[oneIndex])
      oneIndex++
    } else if (one[oneIndex] < two[twoIndex]){
      answer.push(one[oneIndex])
      oneIndex++
    } else{
      answer.push(two[twoIndex])
      twoIndex++
    }
  }//end of loop
  return answer
}
console.log(mergeSort([4, 15, 16, 50], [8, 23, 42, 108])) //returns [4, 8, 15, 16, 23, 42, 50, 108]
console.log(mergeSort([3,11,15,20,60], [7,10,28,28,55])) //returns [3, 7, 10, 11, 15, 20, 28, 28, 55, 60]
