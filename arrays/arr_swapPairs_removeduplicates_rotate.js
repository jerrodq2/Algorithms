Array.prototype.swapPairs = function(){//swap positions of successive pairs of values in an array. If length is odd, do not change the final element. Ex: given [4,2,3,5,6] return [2,4,5,3,6]
  var odd = this.length%2 == 0? false : true
  var len = odd? this.length - 1 : this.length
  for(i = 0; i < len; i+= 2){
    var temp = this[i]
    this[i] = this[i + 1]
    this[i + 1] = temp
  }
}


Array.prototype.rotate = function(offset){//given an offset, rotate every element in the array to the right by that amount, when a value hits the end of the array, it is moved to the beginning. Ex: given [1,2,3,4] and offset of 2, return [3,4,1,2]
  var offset = offset%this.length
  //Note: the offset variable was created because if the array has a length of 4, and it is shifted 40 times, then the array will be returned in the exact same state as it was original same for if it was shifted 4 times. But if it is shifted 39 times, then 36 out of 39 times will be pointless, since it will not change. So if we change offset to 39%4, it gives us 3, which is the only number of rotations that will matter and actually change the array.
  for(i = 0; i < offset; i++){
    var temp = this[this.length - 1]

    for(x = this.length - 1; x >= 0 ; x--){
      if(x == 0){
        this[x] = temp
      } else {
        this[x] = this[x - 1]
      }
    }//end of inner loop

  }//end of outer for loop\
}// end of rotate



Array.prototype.removeDuplicates = function(){//given a sorted array, remove all duplicate values. Don't use any built in methods (besides length and pop), and do this without any nested loops
  var toRemove = []
  for(i = 0; i < this.length ; i++){
    if(this[i] == this[i+1])
      toRemove.push(i)
  }
  function clearToRemove(arr){
    if(toRemove.length == 0)
      return
    for(i = toRemove[toRemove.length-1]; i < arr.length - 1; i++){
      arr[i] = arr[i+1]
    }
    arr.pop()
    toRemove.pop()
    clearToRemove(arr)
  }// end of clearToRemove
  clearToRemove(this)
  return this
}





// var arr = [1,2,3,4,5]
// arr.swapPairs()
// arr.rotate(1)
// arr.rotate(3)
// arr.rotate(10000001)
// console.log(arr);

// var second = [1,2,3,4,5,6]
// second.swapPairs()
// console.log(second);



var third = [1,1,1,2,3,3,4,5,6,7,7]

third.removeDuplicates()
console.log(third);
