Array.prototype.balancePoint = function(){//returns a boolean based on if there is a balance point between two indexes of an array, a balance point is where one side's sum equals the other's. For example, [1,2,3,4,10] return true, the point is between indexes 3(4) and index 4(10). Since all indexes up to 3 add up to 10, they are balanced with the last index. [1,2,4,2,1] would return false, there is no point between two indexes where one side equals the other, one side is always greater. No built in methods
  if(this.length <= 1)
    return false
  var sum = 0
  for(i = 0; i < this.length; i++){
    sum += this[i]
  }
  var leftSideSum = 0
  for(i=0; i < this.length-1; i++){
    leftSideSum += this[i]
    sum -= this[i]
    if(leftSideSum == sum)
      return true
  }
  return false
}// end of balancePoint



Array.prototype.balanceIndex = function(){//same as above function, except this time it returns boolean based on if the balance point is on an index. ex: [-2,5,7,0,3] returns true, the balance point is index 2 (7). Everything before index 2 equals everything after index 2.
  if(this.length <= 1)
    return false
  var sum = 0
  for(i = 1; i < this.length; i++){
    sum += this[i]
  }
  var leftSideSum = 0
  for(i=1; i < this.length-1; i++){
    leftSideSum += this[i-1]
    sum -= this[i]
    if(leftSideSum == sum)
      return true
  }
  return false
}//



Array.prototype.binarySearch = function(val){//returns boolean based on if the array contains the given val, search through array using the binary search method, array is sorted
  if(this.length == 0)
    return false
  var start = 0, end = this.length-1
  while(start < end -1){
    var mid = Math.floor( (end+start)/2)
    if(this[mid] == val){
      return true
    } else if(this[mid] < val){
      start = mid
    } else {
      end = mid
    }
  }// end of while
  return this[start] == val || this[end] == val ? true : false
}




// console.log([1,2,3,4,10].balancePoint());
// console.log([1,1,1,3].balancePoint());
// console.log([1,2,4,2,1].balancePoint());


// console.log([-2,5,7,0,3].balanceIndex());
// console.log([1,1,4,1,1].balanceIndex());
// console.log([1,1,4,1,15].balanceIndex());
// console.log([9,9].balanceIndex());


console.log([1,2,3,4,5,6,7,8,9,10].binarySearch(1));
console.log([1,2,3,4,5,6,7,8,9,10].binarySearch(4));
console.log([1,2,3,4,5,6,7,8,9,10].binarySearch(5));
console.log([1,2,3,4,5,6,7,8,9,10].binarySearch(11));
console.log([1,2,3,4,5,6,7,8,9,10].binarySearch(0));
