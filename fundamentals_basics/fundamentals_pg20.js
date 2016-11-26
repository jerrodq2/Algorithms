//Values Greater than Second, pg.20. Write a function that accepts any array, and returns a new array with the array values that are greater than its second value, print how many values this is, what if the array is only one element long?
function valuesGreaterThanSecond(arr){
  if(arr.length == 1){
    return []
  }
  var standard = arr[1] //second value
  var count = 0//for how many values are greter than standard
  var answer = []
  for(var i = 0; i < arr.length; i++){
    if(arr[i] > standard){
      answer.push(arr[i])
      count ++
    }
  }
  console.log(count)
  return answer
}
console.log(valuesGreaterThanSecond([0,1,2,3,4,5]))//prints 4, returns [2, 3, 4, 5]
console.log(valuesGreaterThanSecond([5, 3, 11, 2, 20, 0, 80, 6]))//prints 5, returns [5, 11, 20, 80, 6]


//Fahrenheit to Celsius, pg.20. Write a function that accepts a number of degrees in Farhenheit, and returns the equizalent temperature as expressed in celsius, formula for F to C = (F - 32) * 5/9
function FarhenheitToCelsius(num){
  return (num - 32) * 5/9
}

console.log(FarhenheitToCelsius(35))// returns 1.66....
console.log(FarhenheitToCelsius(50))// returns 10
