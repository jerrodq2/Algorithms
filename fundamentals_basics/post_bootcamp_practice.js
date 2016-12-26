//******** swap first and last number in an array
function swapTwo(arr){
  var temp = arr[0]
  arr[0] = arr[arr.length -1 ]
  arr[arr.length - 1 ] = temp
  return arr
}

//*********** reverse an array without built in methods or creating a new array
function reverse(arr){
  for(var i = 0; i < Math.floor(arr.length/2); i++){
    var temp = arr[i]
    arr[i] = arr[ (arr.length - 1) - i ]
    arr[ (arr.length - 1) - i ] = temp
  }
  return arr
}

//******** insert given number (y) into a given index(x) no built in methods. Assumption is the given index will be within the bounds of the array, different scenario if it can be outside
function insert(arr, x, y){
  for (var i = arr.length - 1; i >= x; i--){
    if (i == x){
      arr[i] = y
    } else{
      arr[i + 1] = arr[i]
    }
  }
  return arr
}

//********** remove all the negative numbers from an array. given an array, remove all negative numbers and return the array with all positive numbers in their original order, do this without create a new or temporary array, can use pop method
function removeNegatives(arr){
  var i = 0
  while(i < arr.length){
    if(arr[i] < 0){
      for(var x = i; x < arr.length; x++){
        if(x == arr.length - 1){
          arr.pop()
        } else{
          arr[x] = arr[x + 1]
        }
      }
    }// end if
    else{
      i ++
    }
  }
  return arr
}
