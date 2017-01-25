Array.prototype.flatten = function(){//flatten the given array, meaning you must remove all nested arrays, do not create another array, values should be in same order. For example, given [1, [2,3], 4, []], the array should become [1,2,3,4]. No built in methods, except Array.isArray, length, and pop. Nested arrays only go one deep, meaning we can have this [ [], 1] but not this [ [[],1], 2]
  if(this.length == 0)
    return

  //START OF USED INNER FUCNTIONS
  function insert(val, index, arr){//function to insert a value at a given index of an array
    for(i = arr.length; i > index ; i--){
      arr[i] = arr[i - 1]
    }
    arr[index] = val
  }// end of insert
  function removeInnerArray(boolean, index, arr){//function to remove the nested arrays and return the nested array if there are any values contained within it, so we can insert each value in the original order
    if(boolean)
      var holder = arr[index]
    for(i = index; i <= arr.length-1; i++){
      arr[i] = arr[i + 1]
    }
    arr.pop()
    return boolean? holder : false
  }// end of removeInnerArray
  //END OF USED INNER FUCNTIONS

  var counter = 0
  while(counter < this.length){
    if( !Array.isArray(this[counter]) ){
      counter ++
    } else if( this[counter].length == 0 ){
      removeInnerArray(false, counter, this)
    } else {
      var nestedArray = removeInnerArray(true, counter, this)
      for(x = 0; x < nestedArray.length; x++){
        insert(nestedArray[x], counter, this)
        counter ++
        // console.log(i);
      }//end of for loop
    }// end of else

  }//end of while
}//END OF FLATTEN ********************************



Array.prototype.mode = function(){// return the most frequent value in the array. If no value is used more than once, return the first value. Ex: given [1,2,3,1,4,4,5,1] return 1. No new arrays
  var mode = this[0], counter = 1
  for(i = 0; i < this.length; i++){
    var currentCounter = 0;
    for(x = 0; x < this.length; x++){
      if(this[i] == this[x])
        currentCounter++
    }// end of inner loop
    if(currentCounter > counter){
      counter = currentCounter
      mode = this[i]
    }
  }//end of outer loop
  return counter == 1? this[0] : mode
}// end of mode



Array.prototype.removeDuplicates = function(){// return a copy of the original array without duplicates, ex: given[1,2,1,4,5,2] return [1,2,4,5]
  var answer = [], indexesToIgnore = []
  for( i = 0; i < this.length; i++){
    var shouldIPass = false, counter = 0

    for(x = 0; x < indexesToIgnore.length; x++){
      if(i == indexesToIgnore[x]){
        shouldIPass = true
        break
      }
    }// end of first inner loop

    if(shouldIPass)
      continue

    for(x = 0; x < this.length; x++){
      if(this[i] == this[x]){
        counter++
        if(counter > 1){
          indexesToIgnore.push(x)
        }//end of inner if
      }//end of outer if
    }// end of second inner loop

    answer.push(this[i])
  }// end of outer loop
  return answer
}




// var nested = [1, 2, [3], [4,5,6], [], 7]
// console.log(nested);
// nested.flatten()
// console.log(nested);


// var modeArray = [1,2,3,1,4,4,5,1]
// var mode = modeArray.mode()
// console.log(mode);


var duplicates = [1,2,1,4,5,2]
var noDup = duplicates.removeDuplicates()
console.log(noDup);
