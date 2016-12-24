//Algorithm from code wars. Given the triangle of consecutive odd numbers:
//             1
//          3     5
//       7     9    11
//   13    15    17    19
//21    23    25    27    29
//...
//Calculate the row sums of this triangle from the row index (starting at index 1)
function rowSumOddNumbers(n){
  var counter = 2, start = 1
  for(var i = 2; i <= n; i++){
    start += counter
    counter += 2
  }
  sum = start
  numToAdd = start
  for(var i = 1; i < n; i++){
    numToAdd += 2
    sum += numToAdd
  }
  console.log(sum);
}
rowSumOddNumbers(2) // logs 8
rowSumOddNumbers(3) // logs 27
rowSumOddNumbers(4) // logs 64
rowSumOddNumbers(5) // logs 125
rowSumOddNumbers(42) // logs 74088
