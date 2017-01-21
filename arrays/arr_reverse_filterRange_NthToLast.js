Array.prototype.reverseInPlace = function(){//reverse array in place, no built in methods
  var mid = Math.floor(this.length/2), otherSide = this.length-1
  for(i = 0; i < mid; i++){
    var temp = this[i]
    this[i] = this[otherSide - i]
    this[otherSide - i] = temp
  }
  return this
}


Array.prototype.filterRange = function(low, high){//given a low and a high, remove any values between the low and high, and return array with all other value in the original order. no built in methods except pop and length
  var indexesToRemove = []
  for(i = 0; i < this.length; i++){
    if(low < this[i] && this[i] < high)
      indexesToRemove.push(i)
  }
  while(indexesToRemove.length != 0){
    var lastIndex = indexesToRemove[indexesToRemove.length - 1]
    for(i = lastIndex; i < this.length-1; i++){
      this[i] = this[i + 1]
    }
    this.pop()
    indexesToRemove.pop()
  }//end of while loop
}// end of filterRange



Array.prototype.NthToLast = function(n){//given n, return the index that is nth to the last place. Ex: given [1,2,3,4,5] and n=2, return 4, the second to last place or 2 away from the end
  if(n > this.length || n == 0)
    return false
  return this[this.length - n]
}


var arr = [1,2,3,4,5,6,7,8,9]
var second = [1,2,3,4,5,6]
// arr.reverseInPlace()
// second.reverseInPlace()

// arr.filterRange(3,7)
// console.log(arr);
// console.log(second);

console.log(arr.NthToLast(3));
console.log(arr.NthToLast(1));
console.log(arr.NthToLast(0));
